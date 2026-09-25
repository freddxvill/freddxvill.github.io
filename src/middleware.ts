import { defineMiddleware } from "astro:middleware";
import {
	defaultLanguage,
	isSupportedLanguage,
	resolvePreferredLanguage,
} from "../i18n.config.mjs";

const COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

// Astro handles language negotiation locally. Production uses the equivalent
// Vercel Edge Middleware from /middleware.ts so the generated site stays static.
export const onRequest = defineMiddleware(async (context, next) => {
	if (import.meta.env.MODE !== "development") return next();

	const firstSegment = context.url.pathname.split("/")[1];
	if (
		firstSegment?.startsWith("_") ||
		/\.(?:png|jpe?g|webp|gif|ico|svg|css|js|xml|txt|webmanifest)$/.test(context.url.pathname) ||
		firstSegment?.startsWith("manifest.webmanifest") ||
		firstSegment?.startsWith("dev-sw.js") ||
		firstSegment?.startsWith("api") ||
		firstSegment?.startsWith("wrangler")
	) {
		return next();
	}

	if (isSupportedLanguage(firstSegment)) {
		context.cookies.set("lang", firstSegment, {
			maxAge: COOKIE_MAX_AGE,
			path: "/",
			sameSite: "lax",
			secure: false,
		});
		return next();
	}

	const language = resolvePreferredLanguage(
		context.cookies.get("lang")?.value,
		context.request.headers.get("accept-language"),
	);
	context.cookies.set("lang", language, {
		maxAge: COOKIE_MAX_AGE,
		path: "/",
		sameSite: "lax",
		secure: false,
	});

	if (language === defaultLanguage) {
		return context.rewrite(`/${defaultLanguage}${context.url.pathname}`);
	}

	return context.redirect(`/${language}${context.url.pathname}`);
});
