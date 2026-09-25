// Vercel Edge Middleware: language negotiation for the static site.
import { next, rewrite } from "@vercel/edge";
import {
	defaultLanguage,
	isSupportedLanguage,
	resolvePreferredLanguage,
} from "./i18n.config.mjs";

const COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

function languageCookie(language: string) {
	return `lang=${language}; Max-Age=${COOKIE_MAX_AGE}; Path=/; SameSite=Lax; Secure`;
}

function getCookie(request: Request, name: string) {
	const cookies = request.headers.get("cookie")?.split(";") ?? [];
	const cookie = cookies.find(
		(entry) => entry.trim().split("=", 1)[0] === name,
	);
	return cookie?.trim().slice(name.length + 1);
}

export const config = {
	matcher: [
		"/((?!api|font|.*.html|.*.png|.*.jpg|.*.jpeg|.*.webp|.*.gif|_astro|_image|manifest.webmanifest|favicon.ico|robots.txt|wrangler|.*.xml|.*.svg|sw.js|.*.js).*)",
	],
};

export default function middleware(request: Request) {
	const url = new URL(request.url);
	const firstSegment = url.pathname.split("/")[1];

	if (isSupportedLanguage(firstSegment)) {
		return next({
			headers: { "Set-Cookie": languageCookie(firstSegment) },
		});
	}

	const language = resolvePreferredLanguage(
		getCookie(request, "lang"),
		request.headers.get("accept-language"),
	);
	url.pathname = `/${language}${url.pathname}`;
	if (!url.pathname.endsWith("/")) url.pathname += "/";

	const headers = { "Set-Cookie": languageCookie(language) };
	if (language === defaultLanguage) {
		return rewrite(url.pathname, { headers });
	}

	return new Response(null, {
		status: 302,
		headers: { ...headers, Location: url.pathname },
	});
}
