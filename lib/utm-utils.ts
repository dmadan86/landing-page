/**
 * Utility functions for working with UTM parameters
 */

export const UTM_PARAMS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
];

export function storeUtmParams(): void {
  if (typeof window === "undefined") return;

  const urlParams = new URLSearchParams(window.location.search);

  UTM_PARAMS.forEach((param) => {
    const value = urlParams.get(param);
    if (value) {
      localStorage.setItem(param, value);
    }
  });
}

export function getUtmParams(): Record<string, string> {
  if (typeof window === "undefined") return {};

  const params: Record<string, string> = {};

  UTM_PARAMS.forEach((param) => {
    const value = localStorage.getItem(param);
    if (value) {
      params[param] = value;
    }
  });

  return params;
}

export function addUtmParamsToUrl(url: string): string {
  if (typeof window === "undefined") return url;

  const utmParams = getUtmParams();
  if (Object.keys(utmParams).length === 0) return url;

  const urlObj = new URL(url, window.location.origin);
  const searchParams = urlObj.searchParams;

  Object.entries(utmParams).forEach(([key, value]) => {
    searchParams.set(key, value);
  });

  return urlObj.toString();
}

export function createUtmUrl(path: string): string {
  if (typeof window === "undefined") return path;

  if (!path.startsWith("http") && !path.startsWith("/")) {
    return path;
  }

  try {
    return addUtmParamsToUrl(path);
  } catch (e) {
    console.error("Error adding UTM params to path:", e);
    return path;
  }
}
