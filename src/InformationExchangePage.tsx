import {
  ArrowDownUp,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Eye,
  MapPin,
  MessageCircle,
  Play,
  ThumbsUp,
  Users,
} from "lucide-react";
import type { ReactNode } from "react";
import PortalHeader from "./PortalHeader";
import "./information-exchange.css";

const assetRoot = "/assets/figma-information-exchange";

const debateRows = [
  { status: "进行中", extra: "+4", active: true },
  { status: "即将开始", extra: "+1", active: false },
  { status: "即将开始", extra: "+2", active: false },
];

const hotCards = [1, 2, 3];

function SectionHeading({
  icon,
  title,
  subtitle,
  children,
}: {
  icon: string;
  title: string;
  subtitle: string;
  children?: ReactNode;
}) {
  return (
    <header className="fp-section-heading">
      <img src={`${assetRoot}/${icon}`} alt="" />
      <div className="fp-section-heading-copy">
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
      {children ? <div className="fp-section-heading-actions">{children}</div> : null}
    </header>
  );
}

function MetricItem({ icon, label, value }: { icon: "calendar" | "expert" | "topic"; label: string; value: string }) {
  return (
    <div className="ie-metric-item">
      <img className="ie-metric-icon" src={`${assetRoot}/metric-${icon}.png`} alt="" />
      <span><small>{label}</small><strong>{value}</strong></span>
    </div>
  );
}

function MetaRow({ short = false }: { short?: boolean }) {
  return (
    <div className="ie-meta-row">
      <span><CalendarDays size={14} />2026-04-15 至 2026-06-30</span>
      <span><MapPin size={14} />{short ? "上海市" : "深圳市南山区科技园"}</span>
    </div>
  );
}

function EventTagRow({ first, second }: { first: string; second: string }) {
  return <div className="ie-tags"><span className="fp-tag is-blue">{first}</span><span className="fp-tag">{second}</span></div>;
}

function EventsSection() {
  return (
    <section id="ie-events" className="ie-section ie-events">
      <SectionHeading icon="section-events.png" title="赛事活动" subtitle="科技赛事｜学术讲座｜专业沙龙｜行业会议">
        <span className="ie-circle-control"><ChevronLeft size={20} /></span>
        <span className="ie-circle-control"><ChevronRight size={20} /></span>
      </SectionHeading>
      <div className="ie-events-grid">
        <article className="fp-card ie-event-feature">
          <img className="ie-feature-image" src={`${assetRoot}/event-ai-competition.png`} alt="AI创新应用大赛" />
          <h3>2026深圳国际AI创新大赛</h3>
          <EventTagRow first="赛事" second="人工智能" />
          <p>面向全球征集人工智能创新应用项目，总奖金池500万元，优秀项目可获得产业落地支持</p>
          <MetaRow />
          <span className="ie-event-action">立即报名</span>
        </article>
        <div className="ie-event-side-list">
          <article className="fp-card ie-event-horizontal">
            <div className="ie-event-thumb is-video">
              <img src={`${assetRoot}/event-ai-practice.png`} alt="AI大模型技术与行业应用实践" />
              <span><Play size={24} fill="currentColor" /></span>
            </div>
            <div className="ie-event-horizontal-copy">
              <h3>2026AI大模型技术与行业应用实践</h3>
              <EventTagRow first="讲座" second="人工智能" />
              <p>面向全球征集人工智能创新应用项目，总奖金池500万元，优秀项目可获得产业落地支持</p>
              <MetaRow />
              <span className="ie-event-action">立即报名</span>
            </div>
          </article>
          <article className="fp-card ie-event-horizontal">
            <div className="ie-event-thumb"><img src={`${assetRoot}/event-digital-salon.png`} alt="数字化转型与企业创新发展沙龙" /></div>
            <div className="ie-event-horizontal-copy">
              <h3>数字化转型与企业创新发展沙龙</h3>
              <EventTagRow first="沙龙" second="数字化转型" />
              <p>面向全球征集人工智能创新应用项目，总奖金池500万元，优秀项目可获得产业落地支持</p>
              <MetaRow short />
              <span className="ie-event-action is-disabled">报名结束</span>
            </div>
          </article>
        </div>
      </div>
      <a className="ie-more-link" href="#ie-debates">查看更多</a>
    </section>
  );
}

function ExpertStrip({ extra }: { extra: string }) {
  return (
    <div className="ie-expert-strip">
      <strong>参与专家</strong>
      <div className="ie-experts">
        {[1, 2, 3].map((item) => (
          <span className="ie-expert" key={item}>
            <img src={`${assetRoot}/expert-avatar.png`} alt="张伟教授" />
            <span><b>张伟</b><em>｜教授</em><small>清华大学</small></span>
          </span>
        ))}
      </div>
      <span className="ie-more-experts"><b>{extra}</b> 位专家</span>
    </div>
  );
}

function DebateSection() {
  return (
    <section id="ie-debates" className="ie-section ie-debates">
      <SectionHeading icon="section-debate.png" title="思辨活动" subtitle="学术思辨交流｜专家观点｜前沿话题讨论">
        <label className="ie-select"><select aria-label="思辨活动类型"><option>全部类型</option></select></label>
      </SectionHeading>
      <div className="ie-debate-list">
        {debateRows.map((row, index) => (
          <article className="fp-card ie-debate-card" key={index}>
            <div className="ie-debate-copy">
              <h3>大预言模型是否会取代传统软件开发？</h3>
              <p>探讨大语言模型等AI技术软件开发范式的影响，分析技术趋势、产业变革与人才发展新机遇</p>
              <div className="ie-tags"><span className="fp-tag is-blue">工学</span><span className="fp-tag">计算机科学</span><span className="fp-tag">人工智能</span></div>
              <div className="ie-debate-meta"><span><CalendarDays size={14} />2026-03-15</span><i /><span><Users size={14} />2,345 人参与</span><i /><span><Eye size={14} />8,967 浏览</span><i /><span><MessageCircle size={14} />456 评论</span></div>
            </div>
            <ExpertStrip extra={row.extra} />
            <div className="ie-debate-state"><span className={row.active ? "is-live" : ""}>{row.status}</span><a href="#ie-hot">查看详情</a></div>
          </article>
        ))}
      </div>
      <a className="ie-more-link" href="#ie-hot">加载更多</a>
    </section>
  );
}

function HotCard() {
  return (
    <article className="fp-card ie-hot-card">
      <header>
        <div>
          <h3>ChatGPT 4.5即将发布，会带来哪些突破性功能？</h3>
          <p>根据最新消息，OpenAI即将发布GPT-4.5版本，据说在推理能力、多模态理解等方面有重大突破...</p>
          <div className="ie-tags"><span className="fp-tag is-blue">工学</span><span className="fp-tag">计算机科学</span><span className="fp-tag">人工智能</span></div>
        </div>
        <div className="ie-hot-meta"><span><Users size={14} />2,345 人参与</span><i /><span><Eye size={14} />8,967 浏览</span><i /><span><MessageCircle size={14} />456 评论</span></div>
      </header>
      <div className="ie-comments-title">精选评论</div>
      <div className="ie-comment-list">
        {[1, 2, 3].map((item) => <div className="ie-comment" key={item}>
          <p>期待推理能力的提升，希望能更好地解决复杂逻辑问题</p>
          <span><img src={`${assetRoot}/expert-avatar.png`} alt="" /><b>技术极客</b><small>｜2分钟前</small></span>
          <em><ThumbsUp size={13} />8,967 点赞</em>
        </div>)}
      </div>
    </article>
  );
}

function HotSection() {
  return (
    <section id="ie-hot" className="ie-section ie-hot">
      <SectionHeading icon="section-hot.png" title="热门活动" subtitle="社区热点话题｜用户讨论｜最新评论">
        <span className="ie-inline-filter">领域&nbsp; <b>全部</b>⌄</span>
        <span className="ie-inline-filter">按热度&nbsp;⌄</span>
        <ArrowDownUp size={17} className="ie-sort-icon" />
        <i className="ie-filter-divider" />
        <label className="ie-select"><select aria-label="热门活动领域"><option>全部</option></select></label>
      </SectionHeading>
      <div className="ie-hot-list">{hotCards.map((item) => <HotCard key={item} />)}</div>
      <a className="ie-more-link" href="#ie-top">加载更多</a>
    </section>
  );
}

export default function InformationExchangePage() {
  return (
    <main className="ie-page">
      <PortalHeader currentPage="information-exchange" />
      <section id="ie-top" className="ie-hero-stage">
        <img className="ie-hero-art" src={`${assetRoot}/hero-background.png`} alt="" />
        <div className="ie-hero-copy">
          <h1>科技信息交流</h1>
          <p>汇聚科技赛事、专家思辨与热门交流活动<br />打造开放共享的科技交流平台。</p>
          <span className="ie-topic-cta">发布话题</span>
        </div>
        <div className="ie-metrics">
          <MetricItem icon="calendar" label="累计活动数量" value="3,462" />
          <MetricItem icon="expert" label="参与专家数量" value="2,000,000" />
          <MetricItem icon="topic" label="交流话题数量" value="64,749,912" />
        </div>
      </section>

      <div className="ie-content">
        <EventsSection />
        <DebateSection />
        <HotSection />
      </div>

      <nav className="ie-side-anchor" aria-label="页面区块定位">
        <a className="is-active" href="#ie-events">赛事活动</a>
        <a href="#ie-debates">思辨活动</a>
        <a href="#ie-hot">热门活动</a>
        <a href="#ie-top">返回顶部</a>
      </nav>
    </main>
  );
}
