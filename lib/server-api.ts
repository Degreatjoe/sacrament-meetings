import { headers } from "next/headers";

function getConfiguredOrigin(): string | null {
  const origin =
    process.env.APP_ORIGIN ??
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : null);

  if (!origin) {
    return null;
  }

  const url = new URL(origin);
  if (
    (url.protocol !== "http:" && url.protocol !== "https:") ||
    url.username ||
    url.password ||
    url.pathname !== "/" ||
    url.search ||
    url.hash
  ) {
    throw new Error("APP_ORIGIN must be an HTTP(S) origin without a path");
  }

  return url.origin;
}

export async function getServerApiUrl(path: string): Promise<URL> {
  if (!path.startsWith("/") || path.startsWith("//")) {
    throw new Error("Meetings API paths must be app-relative paths");
  }

  const configuredOrigin = getConfiguredOrigin();
  if (configuredOrigin) {
    return new URL(path, configuredOrigin);
  }

  const requestHeaders = await headers();
  if (process.env.NODE_ENV === "production") {
    throw new Error("Set APP_ORIGIN to the deployed application's HTTP(S) origin");
  }

  const host = requestHeaders.get("host");

  if (!host || host.includes(",")) {
    throw new Error("Unable to determine the request host for the meetings API");
  }

  const forwardedProtocol = requestHeaders
    .get("x-forwarded-proto")
    ?.split(",")[0]
    .trim();
  const protocol =
    forwardedProtocol ??
    (host.startsWith("localhost") || host.startsWith("127.0.0.1")
      ? "http"
      : "https");

  if (protocol !== "http" && protocol !== "https") {
    throw new Error(`Unsupported request protocol: ${protocol}`);
  }

  const requestOrigin = new URL(`${protocol}://${host}`);
  return new URL(path, requestOrigin.origin);
}
