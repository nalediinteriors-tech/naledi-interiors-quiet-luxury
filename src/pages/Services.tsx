import { useEffect, useRef, useState } from "react";
import Layout from "@/components/Layout";
import { Link, useLocation } from "react-router-dom";
import servicesHero from "@/assets/projects-new/Modern Classic Mansion ii.jpg";
import { services } from "@/data/services";

const steps = [
  { num: "01", title: "Discovery", desc: "Understanding your vision through structured dialogue and observation." },
  { num: "02", title: "Analysis", desc: "Analyzing architecture, light, flow, and the psychology of space." },
  { num: "03", title: "Development", desc: "Translating insight into material selections, layouts, and concepts." },
  { num: "04", title: "Delivery", desc: "Managing procurement to installation with meticulous precision." },
];

const getDetailedDesc = (stepNum: string) => {
  const details: Record<string, string> = {
    "01": "We begin with an in-depth consultation to understand your lifestyle, aesthetic preferences, and functional needs. This phase includes site visits, measurements, and detailed questionnaires to capture every nuance of your vision.",
    "02": "Our team conducts a comprehensive assessment of your space, examining natural light patterns, traffic flow, architectural constraints, and opportunities. We study how you live to create layouts that enhance your daily experience.",
    "03": "Ideas evolve into tangible designs through mood boards, material palettes, 3D visualizations, and detailed drawings. We refine every element—from furniture selections to lighting schemes—until the concept perfectly reflects your aspirations.",
    "04": "We oversee the entire implementation phase, coordinating contractors, managing deliveries, and ensuring every detail meets our exacting standards. The result is a flawlessly executed space ready for you to call home."
  };
  return details[stepNum] || "";
};

// Cards stick at top-24 (6rem) and the stack has space-y-6 (1.5rem) gaps
const STICKY_TOP_REM = 6;
const CARD_GAP_REM = 1.5;

const Services = () => {
  const { hash, key } = useLocation();
  const stackRef = useRef<HTMLDivElement>(null);
  const [highlighted, setHighlighted] = useState<string | null>(null);

  // /services#procurement scrolls to that card and glows it briefly. The cards
  // are sticky, so their on-screen position can't be used: the target is worked
  // out from the stack's top plus the height of every card above it, once the
  // web fonts have loaded (on a fresh page load they change the card heights).
  useEffect(() => {
    const id = hash.slice(1);
    const index = services.findIndex((s) => s.id === id);
    if (index < 0) return;

    let cancelled = false;
    let timer: ReturnType<typeof setTimeout>;
    document.fonts.ready.then(() => {
      const stack = stackRef.current;
      if (cancelled || !stack) return;

      const rem = parseFloat(getComputedStyle(document.documentElement).fontSize);
      const cards = Array.from(stack.children) as HTMLElement[];
      const above = cards.slice(0, index).reduce((sum, card) => sum + card.offsetHeight + CARD_GAP_REM * rem, 0);
      const top = stack.getBoundingClientRect().top + window.scrollY + above - STICKY_TOP_REM * rem;
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      window.scrollTo({ top, behavior: reduceMotion ? "auto" : "smooth" });

      setHighlighted(id);
      timer = setTimeout(() => setHighlighted(null), 1800);
    });
    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [hash, key]);

  return (
  <Layout>
    {/* Hero Section */}
    <section className="relative h-[60vh] min-h-[400px] flex items-end">
      <img
        src={servicesHero}
        alt="Luxury interior design"
        className="absolute inset-0 w-full h-full object-cover"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-charcoal/30" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-12 w-full">
        <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-white/70 mb-4">Our Services</p>
        <h1 className="font-serif text-3xl md:text-5xl text-white leading-tight">
          Creating beautiful, comfortable and timeless interiors is our passion.
        </h1>
      </div>
    </section>

    <section className="py-16 lg:py-20 bg-background">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-24">
          <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-4">What We Do</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight max-w-3xl mx-auto">
            From vision to reality, step by step.
          </h2>
        </div>

        {/* Stacked cards - spiced up */}
        <div ref={stackRef} className="relative space-y-6">
          {services.map((s, i) => (
            <div 
              key={s.id} 
              id={s.id}
              className={`group sticky top-24 bg-background/95 backdrop-blur-sm border hover:shadow-2xl hover:shadow-bronze/10 hover:-translate-y-2 transition-all duration-700 cursor-pointer overflow-hidden ${
                highlighted === s.id ? "border-bronze shadow-[0_0_48px_hsl(var(--bronze)/0.35)]" : "border-border shadow-lg"
              }`}
              style={{ zIndex: i + 1 }}
            >
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-bronze/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              {/* Animated border line */}
              <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-bronze via-bronze/50 to-transparent group-hover:w-full transition-all duration-700 ease-out" />
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 relative">
                {/* Left: Large number with parallax effect */}
                <div className="lg:col-span-3 bg-secondary/20 p-8 lg:p-12 flex items-center justify-center border-r border-border group-hover:bg-secondary/40 transition-colors duration-500">
                  <span 
                    className="font-serif text-6xl lg:text-8xl text-bronze/10 group-hover:text-bronze/30 transition-all duration-500 group-hover:scale-110"
                  >
                    0{i + 1}
                  </span>
                </div>
                
                {/* Right: Content */}
                <div className="lg:col-span-9 p-8 lg:p-12 flex flex-col justify-center relative">
                  {/* Bronze accent dot */}
                  <div className="absolute top-8 right-8 w-2 h-2 rounded-full bg-bronze/0 group-hover:bg-bronze transition-all duration-500" />
                  
                  <h3 className="font-serif text-2xl lg:text-3xl uppercase text-foreground mb-4 group-hover:text-bronze transition-colors duration-300">
                    {s.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed max-w-2xl text-base lg:text-lg">
                    {s.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Process Section - 3D Flip Cards */}
    <section className="py-16 lg:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-4">How We Work</p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground">Our Process</h2>
          <p className="text-muted-foreground mt-4 max-w-md mx-auto text-sm">Hover over each card to discover more</p>
        </div>
        
        {/* Flip Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" style={{ perspective: '1000px' }}>
          {steps.map((s, i) => (
            <div 
              key={s.num}
              className="group relative h-80 cursor-pointer"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Inner container that flips on hover of the still outer card, so the flip can't cancel itself */}
              <div
                className="relative w-full h-full transition-transform duration-700 [transform:rotateY(0deg)] group-hover:[transform:rotateY(180deg)]"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Front Face */}
                <div 
                  className="absolute inset-0 backface-hidden bg-secondary border border-border p-8 flex flex-col justify-between"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <div>
                    <span className="font-serif text-6xl text-bronze/20 block mb-4">
                      {s.num}
                    </span>
                    <h3 className="font-serif text-xl text-foreground mb-3">
                      {s.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-bronze">
                    <span className="font-sans text-[10px] tracking-[0.2em] uppercase">Learn more</span>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
                
                {/* Back Face */}
                <div 
                  className="absolute inset-0 backface-hidden bg-bronze p-8 flex flex-col justify-center text-white"
                  style={{ 
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)'
                  }}
                >
                  <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-white/70 mb-4">
                    Step {s.num}
                  </span>
                  <h3 className="font-serif text-xl mb-4">
                    {s.title}
                  </h3>
                  <p className="text-sm text-white/80 leading-relaxed mb-6">
                    {getDetailedDesc(s.num)}
                  </p>
                  <div className="flex items-center gap-2 text-white/60 text-xs">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    <span>Hover to flip back</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA - Full-bleed with Floating Card */}
    <section className="relative py-24 lg:py-32">
      {/* Background Image */}
      <img
        src={servicesHero}
        alt="Interior design"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-charcoal/60" />
      
      {/* Floating Card */}
      <div className="relative z-10 max-w-2xl mx-auto px-6 lg:px-12">
        <div className="bg-background p-10 lg:p-16 text-center shadow-2xl">
          <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-6">Start Your Journey</p>
          <h2 className="font-serif text-2xl lg:text-4xl text-foreground leading-tight mb-6">
            Let's create your extraordinary space.
          </h2>
          <p className="text-muted-foreground mb-10 max-w-md mx-auto leading-relaxed">
            Every project begins with a conversation. Share your vision with us and we'll help bring it to life.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-bronze text-white text-[11px] tracking-[0.2em] uppercase px-14 py-5 hover:bg-terracotta transition-colors duration-300 font-sans font-medium"
          >
            Schedule a Consultation
          </Link>
        </div>
      </div>
    </section>
  </Layout>
  );
};

export default Services;
