export type PortalPage = "think-tank" | "information-exchange" | "technology-topic-service";

const portalHashes: Record<PortalPage, string> = {
  "think-tank": "top",
  "information-exchange": "ie-top",
  "technology-topic-service": "tp-top",
};

export function isPortalPage(value: string | null): value is PortalPage {
  return value === "think-tank" || value === "information-exchange" || value === "technology-topic-service";
}

export function buildPortalPageHref(target: PortalPage, source = window.location.href) {
  const url = new URL(source);
  url.search = "";
  url.searchParams.set("page", target);
  url.hash = portalHashes[target];
  return `${url.pathname}${url.search}${url.hash}`;
}
