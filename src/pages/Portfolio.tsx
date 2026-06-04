import { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";
import Layout from "@/components/Layout";
import portfolioHero from "@/assets/projects-new/Fb banner Hero Main i.png";
import {
  projects,
  rooms,
  resFilters,
  companies,
  renders,
  renderFilters,
  type Room,
  type Render,
  type CorporateSpace,
  type Company,
  type Tone,
} from "@/data/portfolioData";

// ---------------------------------------------------------------------------
// Tonal placeholder background colours
// ---------------------------------------------------------------------------
const toneClass: Record<Tone, string> = {
  "tone-a": "bg-[#EFE8DC]",
  "tone-b": "bg-[#E7DECE]",
  "tone-c": "bg-[#EDE3D2]",
};

const tonePattern = {
  backgroundImage:
    "repeating-linear-gradient(135deg, rgba(166,124,82,0.10) 0, rgba(166,124,82,0.10) 1px, transparent 1px, transparent 11px)",
};

// Cycles through tones for filler cells
const fillerTones: Tone[] = ["tone-a", "tone-b", "tone-c"];

// How many filler cells are needed to complete the last row of `cols`
function fillerCount(itemCount: number, cols: number): number {
  const rem = itemCount % cols;
  return rem === 0 ? 0 : cols - rem;
}

// ---------------------------------------------------------------------------
// Scroll-reveal hook
// ---------------------------------------------------------------------------
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setVisible(true); observer.unobserve(el); }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return { ref, visible };
}

function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      } ${className}`}
    >
      {children}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Lightbox state types
// ---------------------------------------------------------------------------
type LightboxItem =
  | { kind: "residential"; room: Room }
  | { kind: "corporate"; space: CorporateSpace; company: Company }
  | { kind: "render"; render: Render };

// ---------------------------------------------------------------------------
// Shared "image coming soon" face — matches the warm linen placeholder design
// ---------------------------------------------------------------------------
function ComingSoonFace() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3"
      style={{ backgroundColor: "#EDE8DF" }}>
      {/* Plus icon */}
      <div className="relative w-5 h-5 opacity-40">
        <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-px bg-[#9C8C7A]" />
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-[#9C8C7A]" />
      </div>
      <p className="font-sans text-[9px] tracking-[0.28em] uppercase text-[#9C8C7A]/70">
        Image coming soon
      </p>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Tonal placeholder (used inside cards when no real image is set)
// ---------------------------------------------------------------------------
function CardPlaceholder() {
  return <ComingSoonFace />;
}

// ---------------------------------------------------------------------------
// GridFiller — fills empty cells at the end of an incomplete last row
// ---------------------------------------------------------------------------
function GridFiller() {
  return (
    <div className="bg-background flex flex-col">
      {/* Image area — same aspect ratio as real cards */}
      <div className="relative aspect-[4/5] w-full">
        <ComingSoonFace />
      </div>
      {/* Meta bar — same height/padding as real cards, kept blank */}
      <div className="px-5 py-5 border-t border-border flex items-center">
        <div className="w-24 h-2 bg-border/40 rounded-sm" />
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Residential card
// ---------------------------------------------------------------------------
function ResCard({ room: r, index, onClick }: { room: Room; index: number; onClick: () => void }) {
  const project = projects[r.projectKey];
  return (
    <Reveal>
      <button
        onClick={onClick}
        className="group w-full bg-background text-left flex flex-col cursor-pointer border-none"
      >
        {/* Image */}
        <div className="relative overflow-hidden aspect-[4/5] w-full">
          {r.image ? (
            <img
              src={r.image}
              alt={r.room}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          ) : (
            <CardPlaceholder />
          )}
          {/* Card index */}
          <span className="absolute top-4 left-4 font-serif text-[13px] text-white/70 z-10 drop-shadow">
            {String(index + 1).padStart(2, "0")}
          </span>
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-foreground/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-400 z-10">
            <span className="border border-white/60 text-white text-[10px] tracking-[0.3em] uppercase px-6 py-3">
              View Project
            </span>
          </div>
        </div>
        {/* Meta bar */}
        <div className="px-5 py-5 flex items-start justify-between gap-3 border-t border-border">
          <div>
            <p className="font-sans text-[10px] tracking-[0.24em] uppercase text-terracotta mb-2">{r.room}</p>
            <h3 className="font-serif text-lg leading-tight">{project.name}</h3>
          </div>
          <span className="font-sans text-[10px] tracking-[0.18em] uppercase text-muted-foreground whitespace-nowrap pt-1">
            {project.loc.split(",")[0]}
          </span>
        </div>
      </button>
    </Reveal>
  );
}

// ---------------------------------------------------------------------------
// Corporate card — richer overlay with detail line
// ---------------------------------------------------------------------------
function CorpCard({
  space,
  company,
  index,
  onClick,
}: {
  space: CorporateSpace;
  company: Company;
  index: number;
  onClick: () => void;
}) {
  return (
    <Reveal>
      <button
        onClick={onClick}
        className="group w-full bg-background text-left flex flex-col cursor-pointer border-none"
      >
        {/* Image */}
        <div className="relative overflow-hidden aspect-[4/5] w-full">
          {space.image ? (
            <img
              src={space.image}
              alt={space.room}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          ) : (
            <CardPlaceholder />
          )}
          {/* Card index */}
          <span className="absolute top-4 left-4 font-serif text-[13px] text-white/70 z-20 drop-shadow">
            {String(index + 1).padStart(2, "0")}
          </span>
          {/* Overlays only shown when a real image is present */}
          {space.image && (
            <>
              {/* Bottom gradient */}
              <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-black/60 to-transparent z-10 pointer-events-none" />
              {/* Scene label */}
              <div className="absolute bottom-0 left-0 right-0 z-20 px-5 py-4 pointer-events-none">
                <p className="font-sans text-[9px] tracking-[0.28em] uppercase text-white/60 leading-tight">
                  {space.scene}
                </p>
              </div>
              {/* Hover overlay with detail text */}
              <div className="absolute inset-0 bg-foreground/75 flex flex-col items-start justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-400 z-30">
                <p className="font-sans text-[9px] tracking-[0.28em] uppercase text-terracotta mb-3">
                  {space.room}
                </p>
                <p className="font-serif text-white text-base leading-snug mb-4 max-w-[28ch]">
                  {space.detail}
                </p>
                <span className="border border-white/50 text-white text-[9px] tracking-[0.3em] uppercase px-5 py-2.5">
                  View Space
                </span>
              </div>
            </>
          )}
        </div>
        {/* Meta bar */}
        <div className="px-5 py-5 flex items-start justify-between gap-3 border-t border-border">
          <div>
            <p className="font-sans text-[10px] tracking-[0.24em] uppercase text-terracotta mb-2">{space.room}</p>
            <h3 className="font-serif text-lg leading-tight">{company.name}</h3>
          </div>
          <span className="font-sans text-[10px] tracking-[0.18em] uppercase text-muted-foreground whitespace-nowrap pt-1">
            {company.loc.split(",")[0]}
          </span>
        </div>
      </button>
    </Reveal>
  );
}

// ---------------------------------------------------------------------------
// Render card
// ---------------------------------------------------------------------------
function RenderCard({ render: r, index, onClick }: { render: Render; index: number; onClick: () => void }) {
  return (
    <Reveal>
      <button
        onClick={onClick}
        className="group w-full bg-background text-left flex flex-col cursor-pointer border-none"
      >
        <div className="relative overflow-hidden aspect-[4/5] w-full">
          <img
            src={r.image}
            alt={r.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          {/* Bottom gradient */}
          <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-black/55 to-transparent z-10 pointer-events-none" />
          {/* Index */}
          <span className="absolute top-4 left-4 font-serif text-[13px] text-white/70 z-20 drop-shadow">
            {String(index + 1).padStart(2, "0")}
          </span>
          {/* Scene label */}
          <div className="absolute bottom-0 left-0 right-0 z-20 px-5 py-4 pointer-events-none">
            <p className="font-sans text-[9px] tracking-[0.28em] uppercase text-white/60 leading-tight">
              {r.scene}
            </p>
          </div>
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-foreground/65 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-400 z-30">
            <span className="border border-white/60 text-white text-[10px] tracking-[0.3em] uppercase px-6 py-3">
              View Render
            </span>
          </div>
        </div>
        {/* Meta bar */}
        <div className="px-5 py-5 flex items-start justify-between gap-3 border-t border-border">
          <div>
            <p className="font-sans text-[10px] tracking-[0.24em] uppercase text-terracotta mb-2">{r.cat}</p>
            <h3 className="font-serif text-lg leading-tight">{r.title}</h3>
          </div>
          <span className="font-sans text-[10px] tracking-[0.18em] uppercase text-muted-foreground whitespace-nowrap pt-1">
            Render
          </span>
        </div>
      </button>
    </Reveal>
  );
}

// ---------------------------------------------------------------------------
// Lightbox
// ---------------------------------------------------------------------------
function Lightbox({
  item,
  onClose,
  onNavigate,
}: {
  item: LightboxItem;
  onClose: () => void;
  onNavigate: (item: LightboxItem) => void;
}) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  let title = "";
  let loc = "";
  let desc = "";
  let roomLabel = "";
  let detail = "";
  let tone: Tone = "tone-a";
  let imgSrc: string | undefined;
  // Each sibling carries its full LightboxItem so clicking it navigates correctly
  let siblings: { room: string; tone: Tone; image?: string; item: LightboxItem }[] = [];

  if (item.kind === "residential") {
    const r = item.room;
    const p = projects[r.projectKey];
    title = p.name;
    loc = p.loc;
    desc = p.desc;
    roomLabel = r.room;
    tone = r.tone;
    imgSrc = r.image;
    siblings = rooms
      .filter((s) => s.projectKey === r.projectKey && s.room !== r.room)
      .slice(0, 5)
      .map((s) => ({ room: s.room, tone: s.tone, image: s.image, item: { kind: "residential" as const, room: s } }));
  } else if (item.kind === "corporate") {
    const { space, company } = item;
    title = company.name;
    loc = company.loc;
    desc = company.intro;
    roomLabel = space.room;
    detail = space.detail;
    tone = space.tone;
    imgSrc = space.image;
    siblings = company.spaces
      .filter((s) => s.room !== space.room)
      .slice(0, 5)
      .map((s) => ({ room: s.room, tone: s.tone, image: s.image, item: { kind: "corporate" as const, space: s, company } }));
  } else {
    const r = item.render;
    title = r.title;
    loc = "Visualisation";
    desc = r.scene;
    roomLabel = r.cat;
    tone = r.tone;
    imgSrc = r.image;
    siblings = renders
      .filter((s) => s.title !== r.title)
      .slice(0, 5)
      .map((s) => ({ room: s.title, tone: s.tone, image: s.image, item: { kind: "render" as const, render: s } }));
  }

  return (
    <div
      className="fixed inset-0 z-[100] bg-foreground/70 backdrop-blur-sm flex items-center justify-center p-2 md:p-4"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="bg-background w-full max-w-6xl max-h-[95vh] overflow-y-auto grid grid-cols-1 md:grid-cols-2 animate-fade-in">
        {/* Image panel */}
        <div
          className={`relative min-h-[280px] md:min-h-0 md:aspect-auto ${toneClass[tone]}`}
          style={tonePattern}
        >
          {imgSrc && (
            <img src={imgSrc} alt={roomLabel} className="absolute inset-0 w-full h-full object-cover" />
          )}
          {imgSrc && (
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
          )}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 bg-background/90 hover:bg-background w-9 h-9 flex items-center justify-center transition-colors"
            aria-label="Close"
          >
            <X size={16} />
          </button>
        </div>

        {/* Detail panel */}
        <div className="p-10 md:p-16 flex flex-col justify-center">
          <p className="font-sans text-[11px] tracking-[0.26em] uppercase text-terracotta">{roomLabel}</p>
          <h2 className="font-serif text-4xl leading-tight mt-5 mb-3">{title}</h2>
          <p className="font-serif italic text-bronze text-lg">{loc}</p>
          <div className="w-12 h-px bg-bronze my-7" />
          <p className="text-muted-foreground text-base leading-relaxed">{desc}</p>
          {detail && (
            <p className="mt-5 text-foreground text-[15px] leading-relaxed border-l-2 border-bronze pl-4">
              {detail}
            </p>
          )}
          {siblings.length > 0 && (
            <div className="mt-10">
              <p className="font-sans text-[11px] tracking-[0.24em] uppercase text-muted-foreground mb-5">
                More from this project
              </p>
              <div className="flex gap-3 flex-wrap">
                {siblings.map((s) => (
                  <button
                    key={s.room}
                    onClick={() => onNavigate(s.item)}
                    className={`w-[96px] h-[78px] ${toneClass[s.tone]} border border-transparent hover:border-bronze focus:border-bronze transition-colors cursor-pointer relative overflow-hidden`}
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(135deg, rgba(166,124,82,0.12) 0, rgba(166,124,82,0.12) 1px, transparent 1px, transparent 9px)",
                    }}
                    aria-label={`View ${s.room}`}
                  >
                    {s.image && (
                      <img src={s.image} alt={s.room} className="absolute inset-0 w-full h-full object-cover" />
                    )}
                    {/* Dark gradient so the label is always readable over photos */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
                    <span className="absolute bottom-0 left-0 right-0 font-mono text-[8px] text-white/90 uppercase p-1 leading-tight drop-shadow z-10">
                      {s.room}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Main Portfolio page
// ---------------------------------------------------------------------------
const Portfolio = () => {
  const [activeTab, setActiveTab] = useState<"residential" | "corporate" | "renders">("residential");
  const [activeFilter, setActiveFilter] = useState("all");
  const [activeRenderFilter, setActiveRenderFilter] = useState("all");
  const [lightboxItem, setLightboxItem] = useState<LightboxItem | null>(null);

  // Imaged items first, placeholder items last within each grid
  const sortImagesFirst = <T extends { image?: string }>(arr: T[]): T[] =>
    [...arr.filter((i) => i.image), ...arr.filter((i) => !i.image)];

  const filteredRooms = sortImagesFirst(
    activeFilter === "all" ? rooms : rooms.filter((r) => r.cat === activeFilter)
  );
  const filteredRenders = sortImagesFirst(
    activeRenderFilter === "all" ? renders : renders.filter((r) => r.cat === activeRenderFilter)
  );

  const openLightbox = useCallback((item: LightboxItem) => setLightboxItem(item), []);
  const closeLightbox = useCallback(() => setLightboxItem(null), []);

  // Number of filler cells needed — computed at 3-col breakpoint (lg)
  const resFillCount = fillerCount(filteredRooms.length, 3);
  const renderFillCount = fillerCount(filteredRenders.length, 3);

  return (
    <Layout>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative h-[60vh] min-h-[400px] flex items-end">
        <img
          src={portfolioHero}
          alt="Naledi Interiors portfolio"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/30" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-12 w-full">
          <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-white/70 mb-4">Portfolio</p>
          <h1 className="font-serif text-3xl md:text-5xl text-white leading-tight">
            Selected work, gathered by the spaces we shape.
          </h1>
        </div>
      </section>

      {/* ── Sticky tab bar ───────────────────────────────────────────────── */}
      <div className="sticky top-20 z-40 bg-background border-t border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex">
            {(["residential", "corporate", "renders"] as const).map((tab, i) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative font-serif text-2xl md:text-[26px] py-5 mr-12 md:mr-16 transition-colors duration-300 tracking-wide
                  ${activeTab === tab ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}
              >
                <span className="font-sans text-[11px] tracking-[0.2em] text-terracotta align-top mr-2">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                <span
                  className={`absolute left-0 bottom-[-1px] h-[2px] bg-terracotta transition-all duration-300 ${
                    activeTab === tab ? "w-full" : "w-0"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Content ──────────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* RESIDENTIAL */}
        {activeTab === "residential" && (
          <section className="pb-8">
            {/* Filter chips */}
            <div className="flex flex-wrap gap-2.5 pt-9 pb-2">
              {resFilters.map((f) => (
                <button
                  key={f.id}
                  onClick={() => setActiveFilter(f.id)}
                  className={`font-sans text-[11px] tracking-[0.16em] uppercase px-5 py-3 border transition-all duration-300
                    ${activeFilter === f.id
                      ? "bg-foreground border-foreground text-background"
                      : "bg-transparent border-border text-muted-foreground hover:border-bronze hover:text-foreground"
                    }`}
                >
                  {f.label}
                </button>
              ))}
            </div>

            <p className="font-sans text-[11px] tracking-[0.16em] uppercase text-muted-foreground pt-6">
              {filteredRooms.length} {filteredRooms.length === 1 ? "space" : "spaces"}
            </p>

            {/* Grid — 1px gaps use background colour; filler cells complete the last row */}
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-7"
              style={{ gap: "1px", background: "hsl(var(--border))" }}
            >
              {filteredRooms.map((r, i) => (
                <div key={`${r.projectKey}-${r.room}-${i}`} className="bg-background">
                  <ResCard room={r} index={i} onClick={() => openLightbox({ kind: "residential", room: r })} />
                </div>
              ))}
              {/* Filler cells to complete the last row */}
              {Array.from({ length: resFillCount }).map((_, i) => (
                <GridFiller key={`res-filler-${i}`} />
              ))}
            </div>
          </section>
        )}

        {/* CORPORATE */}
        {activeTab === "corporate" && (
          <section className="pb-8">
            {companies.map((company, ci) => {
              const corpFillCount = fillerCount(company.spaces.length, 3);
              return (
                <div key={company.name} className="pt-14">
                  {/* Company header */}
                  <Reveal>
                    <div className="flex items-end justify-between gap-4 border-b border-border pb-5">
                      <div className="flex items-baseline gap-4">
                        <span className="font-serif text-[15px] text-terracotta">
                          {String(ci + 1).padStart(2, "0")}
                        </span>
                        <div>
                          <h2 className="font-serif text-3xl md:text-4xl">{company.name}</h2>
                          <p className="font-serif italic text-bronze text-base mt-1">{company.sub}</p>
                        </div>
                      </div>
                      <span className="font-sans text-[10px] tracking-[0.22em] uppercase text-muted-foreground hidden sm:block">
                        {company.loc}
                      </span>
                    </div>
                  </Reveal>

                  <Reveal className="mt-5 mb-2">
                    <p className="text-muted-foreground text-[15px] leading-relaxed max-w-[60ch]">
                      {company.intro}
                    </p>
                  </Reveal>

                  {/* Spaces grid — filler cells complete the last row */}
                  <div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6"
                    style={{ gap: "1px", background: "hsl(var(--border))" }}
                  >
                    {sortImagesFirst(company.spaces).map((space, si) => (
                      <div key={space.room} className="bg-background">
                        <CorpCard
                          space={space}
                          company={company}
                          index={si}
                          onClick={() => openLightbox({ kind: "corporate", space, company })}
                        />
                      </div>
                    ))}
                    {/* Filler cells to complete the last row */}
                    {Array.from({ length: corpFillCount }).map((_, i) => (
                      <GridFiller key={`corp-${ci}-filler-${i}`} />
                    ))}
                  </div>
                </div>
              );
            })}
          </section>
        )}

        {/* RENDERS */}
        {activeTab === "renders" && (
          <section className="pb-8">
            {/* Filter chips */}
            <div className="flex flex-wrap gap-2.5 pt-9 pb-2">
              {renderFilters.map((f) => (
                <button
                  key={f.id}
                  onClick={() => setActiveRenderFilter(f.id)}
                  className={`font-sans text-[11px] tracking-[0.16em] uppercase px-5 py-3 border transition-all duration-300
                    ${activeRenderFilter === f.id
                      ? "bg-foreground border-foreground text-background"
                      : "bg-transparent border-border text-muted-foreground hover:border-bronze hover:text-foreground"
                    }`}
                >
                  {f.label}
                </button>
              ))}
            </div>

            <p className="font-sans text-[11px] tracking-[0.16em] uppercase text-muted-foreground pt-6">
              {filteredRenders.length} {filteredRenders.length === 1 ? "render" : "renders"}
            </p>

            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-7"
              style={{ gap: "1px", background: "hsl(var(--border))" }}
            >
              {filteredRenders.map((r, i) => (
                <div key={`${r.cat}-${r.title}-${i}`} className="bg-background">
                  <RenderCard
                    render={r}
                    index={i}
                    onClick={() => openLightbox({ kind: "render", render: r })}
                  />
                </div>
              ))}
              {Array.from({ length: renderFillCount }).map((_, i) => (
                <GridFiller key={`render-filler-${i}`} />
              ))}
            </div>
          </section>
        )}
      </div>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="bg-secondary mt-20 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <Reveal>
            <div className="border border-border p-14 md:p-20 text-center">
              <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
                Start Your Project
              </p>
              <h2 className="font-serif text-3xl md:text-5xl leading-tight max-w-[18ch] mx-auto mt-4 mb-5">
                Begin your space with clarity and intention.
              </h2>
              <p className="text-muted-foreground max-w-[44ch] mx-auto mb-8 leading-relaxed">
                Whether a single room or a full commercial fit-out, every Naledi project starts with a
                conversation. Let's discuss your vision.
              </p>
              <Link
                to="/contact"
                className="inline-block bg-terracotta hover:bg-bronze text-background font-sans text-[11px] tracking-[0.2em] uppercase font-medium px-12 py-5 transition-colors duration-300"
              >
                Schedule a Consultation
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Lightbox ─────────────────────────────────────────────────────── */}
      {lightboxItem && <Lightbox item={lightboxItem} onClose={closeLightbox} onNavigate={openLightbox} />}
    </Layout>
  );
};

export default Portfolio;
