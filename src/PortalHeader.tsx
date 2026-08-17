import { ChevronDown, Search } from "lucide-react";
import type { ReactNode } from "react";
import { buildPortalPageHref, type PortalPage } from "./portalRoutes";

type PortalHeaderProps = {
  currentPage: PortalPage;
};

function HeaderMenu({
  label,
  active,
  children,
}: {
  label: string;
  active?: boolean;
  children: ReactNode;
}) {
  return (
    <div className={`fp-header-menu${active ? " is-active" : ""}`}>
      <button type="button" aria-haspopup="menu">
        {label}
        <ChevronDown size={14} strokeWidth={1.8} />
      </button>
      <div className="fp-header-popover" role="menu">
        {children}
      </div>
    </div>
  );
}

export default function PortalHeader({ currentPage }: PortalHeaderProps) {
  const active = currentPage === "information-exchange" ? "science" : "strategy";
  return (
    <header className="fp-site-header">
      <div className="fp-site-header-inner">
        <a className="fp-brand" href={buildPortalPageHref("think-tank")} aria-label="深圳国际科技信息中心首页">
          <img src="/assets/gkx-logo.png" alt="" />
          <strong>深圳国际科技信息中心</strong>
        </a>

        <nav className="fp-main-nav" aria-label="主导航">
          <a href={buildPortalPageHref("think-tank")}>首页</a>
          <HeaderMenu label="科学研究" active={active === "science"}>
            <a role="menuitem" href={buildPortalPageHref("information-exchange")} aria-current={currentPage === "information-exchange" ? "page" : undefined}>科技信息交流</a>
          </HeaderMenu>
          <span className="fp-nav-static">未来教育<ChevronDown size={14} strokeWidth={1.8} /></span>
          <HeaderMenu label="战略咨询" active={active === "strategy"}>
            <a role="menuitem" href={buildPortalPageHref("think-tank")} aria-current={currentPage === "think-tank" ? "page" : undefined}>新型高端智库</a>
            <a role="menuitem" href={buildPortalPageHref("technology-topic-service")} aria-current={currentPage === "technology-topic-service" ? "page" : undefined}>科技专题服务</a>
          </HeaderMenu>
          <span className="fp-nav-static">科技评价<ChevronDown size={14} strokeWidth={1.8} /></span>
        </nav>

        <label className="fp-global-search">
          <input aria-label="全站搜索" placeholder="AI科研/AI教育/AI战略咨询/AI科技评价" />
          <Search size={16} strokeWidth={1.8} aria-hidden="true" />
        </label>
        <span className="fp-header-link">应用</span>
        <span className="fp-header-link">登陆</span>
        <span className="fp-register">免费注册</span>
      </div>
    </header>
  );
}
