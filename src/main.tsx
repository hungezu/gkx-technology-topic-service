import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import FigmaThinkTankPage from "./FigmaThinkTankPage";
import InformationExchangePage from "./InformationExchangePage";
import TechnologyTopicServicePage from "./TechnologyTopicServicePage";
import { buildPortalPageHref, isPortalPage, type PortalPage } from "./portalRoutes";
import "./portal-fidelity.css";
import "./technology-topic-service.css";

const requestedPage = new URLSearchParams(window.location.search).get("page");
const page: PortalPage = isPortalPage(requestedPage) ? requestedPage : "think-tank";
const pageConfigs = {
  "think-tank": { title: "新型高端智库", component: FigmaThinkTankPage },
  "information-exchange": { title: "科技信息交流", component: InformationExchangePage },
  "technology-topic-service": { title: "科技专题服务", component: TechnologyTopicServicePage },
} satisfies Record<PortalPage, { title: string; component: typeof FigmaThinkTankPage }>;

if (requestedPage !== page) {
  window.history.replaceState(window.history.state, "", buildPortalPageHref(page));
}

const pageConfig = pageConfigs[page];

document.title = `${pageConfig.title} - 深圳国际科技信息中心`;
const RootPage = pageConfig.component;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RootPage />
  </StrictMode>,
);
