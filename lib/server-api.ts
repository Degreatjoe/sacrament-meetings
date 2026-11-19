import { headers } from "next/headers";

export async function getServerApiUrl(path: string): Promise<URL> {
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host");

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

  return new URL(path, `${protocol}://${host}`);
}
