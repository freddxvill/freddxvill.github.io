export const defaultLanguage = "es";
export const supportedLanguages = Object.freeze(["en", "es"]);

export function isSupportedLanguage(value) {
	return typeof value === "string" && supportedLanguages.includes(value);
}

export function matchSupportedLanguage(value) {
	if (!value) return undefined;

	const normalized = value.trim().toLowerCase();
	return supportedLanguages.find(
		(language) =>
			language.toLowerCase() === normalized ||
			language.toLowerCase() === normalized.split("-")[0],
	);
}

export function resolvePreferredLanguage(cookieLanguage, acceptLanguage) {
	const cookieMatch = matchSupportedLanguage(cookieLanguage);
	if (cookieMatch) return cookieMatch;

	for (const entry of acceptLanguage?.split(",") ?? []) {
		const match = matchSupportedLanguage(entry.split(";")[0]);
		if (match) return match;
	}

	return defaultLanguage;
}
