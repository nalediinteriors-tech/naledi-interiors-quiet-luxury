import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import heroImage from "@/assets/projects-new/Fb banner Hero Main i.png";
import philosophyBg from "@/assets/projects-new/004 Tlokweng Modern Haven ii.png";
import project1 from "@/assets/projects-new/004 Tlokweng Modern Haven.png";
import project2 from "@/assets/projects-new/004 lougne.png";
import project3 from "@/assets/projects-new/Modern Classic Mansion (1).jpg";
import project4 from "@/assets/projects-new/Makindye Walk in closet i.jpg";
import project5 from "@/assets/projects-new/bedroom.png";
import project6 from "@/assets/projects-new/Makindye speakeasy (1).jpg";
import review1 from "@/assets/review-1.jpg";
import review2 from "@/assets/review-2.jpg";
import review3 from "@/assets/review-3.jpg";
import review4 from "@/assets/review-4.jpg";
import review5 from "@/assets/review-5.jpg";

const projects = [
  { image: project1, name: "Tlokweng Modern Haven", location: "Gaborone", desc: "A contemporary sanctuary blending modern aesthetics with local heritage." },
  { image: project2, name: "The Lounge Residence", location: "Gaborone", desc: "Sophisticated living spaces designed for elevated everyday moments." },
  { image: project3, name: "Modern Classic Mansion", location: "Botswana", desc: "Timeless elegance meets contemporary luxury in grand proportions." },
  { image: project4, name: "Makindye Walk-In Closet", location: "Uganda", desc: "Bespoke storage solutions crafted with meticulous attention to detail." },
  { image: project5, name: "The Bedroom Suite", location: "Gaborone", desc: "A master retreat designed for rest, reflection, and refined comfort." },
  { image: project6, name: "Makindye Speakeasy", location: "Uganda", desc: "An intimate entertainment space with mood and character." },
];

const pillars = [
  { title: "Human-Centered Design", desc: "Spaces shaped by how people actually live, move, and feel — not by trends." },
  { title: "Intentional Materiality", desc: "Every surface, texture, and finish is chosen with purpose and precision." },
  { title: "Refined Execution", desc: "Meticulous attention to detail from concept through completion." },
];

const values = [
  { num: "01", title: "Integrity", desc: "Honest material choices, transparent processes, and designs that serve people — not ego. This is the foundation upon which every decision rests." },
  { num: "02", title: "Precision", desc: "Every proportion, joint, and finish is considered. Nothing is left to chance." },
  { num: "03", title: "Restraint", desc: "Knowing what to leave out is as important as knowing what to include." },
  { num: "04", title: "Longevity", desc: "We design for decades, not seasons. Timeless over trendy, always." },
];

const Index = () => {
  const [activeValue, setActiveValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveValue((prev) => (prev + 1) % values.length);
    }, 10000); // 10 seconds
    return () => clearInterval(interval);
  }, []);

  return (
  <Layout>
    {/* CONCEPT 1: Hero - Full-bleed with minimal overlay, architectural framing */}
    <section className="relative h-[60vh] min-h-[400px] flex items-end">
      <img
        src={heroImage}
        alt="Refined luxury interior living room with natural textures"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-charcoal/20" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-16 lg:pb-24 w-full">
        <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-white/70 mb-4 animate-fade-in">
          Refined spaces. Elevated living.
        </p>
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white leading-[1.1] max-w-3xl mb-8 animate-fade-in">
          Spaces that elevate how you live, think, and feel.
        </h1>
        <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <Link
            to="/contact"
            className="inline-block bg-bronze text-white text-[11px] tracking-[0.2em] uppercase px-10 py-4 hover:bg-terracotta transition-colors duration-300 font-sans font-medium"
          >
            Book a Consultation
          </Link>
          <a
            href="#work"
            className="inline-block border border-white/40 text-white text-[11px] tracking-[0.2em] uppercase px-10 py-4 hover:bg-white/10 transition-colors duration-300 font-sans font-medium"
          >
            View Our Work
          </a>
        </div>
      </div>
      {/* Diagonal accent from logo motif - Concept 2 */}
      <div className="absolute top-0 right-0 w-32 h-full overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-20 right-0 w-1 h-40 bg-terracotta transform -rotate-12 origin-top" />
        <div className="absolute top-32 right-8 w-0.5 h-24 bg-bronze transform -rotate-12 origin-top" />
      </div>
    </section>

    {/* CONCEPT 1: Philosophy - Ultra-minimal gallery statement */}
    <section className="py-12 lg:py-16 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Gallery Grid - Image + Quote */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 items-center">
          {/* Left: Large Image */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[4/5] overflow-hidden">
              <img 
                src={philosophyBg} 
                alt="Interior detail" 
                className="w-full h-full object-cover"
              />
              {/* Subtle bronze corner accent */}
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-bronze/10" />
            </div>
          </div>
          
          {/* Right: Floating Typography */}
          <div className="lg:col-span-5 lg:-ml-20 relative z-10">
            <div className="bg-background p-8 lg:p-12 lg:shadow-2xl">
              <p className="font-sans text-[9px] tracking-[0.4em] uppercase text-muted-foreground mb-8">Our Philosophy</p>
              
              <p className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-[1.2] mb-8">
                Every space tells a story.
              </p>
              
              <p className="font-serif text-xl text-muted-foreground leading-relaxed mb-10">
                We believe the homes we inhabit shape the lives we lead. Through thoughtful design, we craft environments that breathe with intention — where light, proportion, and material converge to elevate your everyday experience.
              </p>
              
              {/* Minimal pillars as simple list */}
              <div className="space-y-6 pt-8 border-t border-border">
                {pillars.map((p) => (
                  <div key={p.title} className="flex items-start gap-4">
                    <div className="w-1.5 h-1.5 bg-bronze mt-2 flex-shrink-0" />
                    <div>
                      <h4 className="font-serif text-base text-foreground mb-1">{p.title}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* CONCEPT 1: Selected Work - 2-column masonry with thin charcoal borders */}
    <section id="work" className="py-16 lg:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-end justify-between mb-16 border-b border-border pb-8">
          <div>
            <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-2">Portfolio</p>
            <h2 className="font-serif text-2xl md:text-3xl text-foreground">Selected Work</h2>
          </div>
          <Link to="/services" className="font-sans text-[11px] tracking-[0.2em] uppercase text-muted-foreground hover:text-bronze transition-colors hidden md:block">
            View All Projects
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
          {projects.map((p) => (
            <div key={p.name} className="group cursor-pointer bg-background">
              <div className="overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  width={800}
                  height={1000}
                  className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-8 border-t border-border">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-serif text-base text-foreground mb-1">{p.name}</h3>
                    <p className="text-xs text-muted-foreground font-sans font-light">{p.desc}</p>
                  </div>
                  <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-bronze">{p.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>


    {/* CONCEPT 1: Reviews Marquee - Editorial cards with borders */}
    <section className="py-16 lg:py-20 overflow-hidden bg-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-16">
        <div className="flex items-end justify-between border-b border-border pb-8">
          <div>
            <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-2">Testimonials</p>
            <h2 className="font-serif text-2xl md:text-3xl text-foreground">Client Words</h2>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="flex animate-marquee w-max gap-px bg-border">
          {[
            { img: review1, name: "Amara Osei", role: "Homeowner, Johannesburg", quote: "Naledi didn't just design our home — they understood how we wanted to feel in it. Every room has intention." },
            { img: review2, name: "David Hartley", role: "Property Developer", quote: "The level of precision and spatial awareness is unmatched. Our buyers notice the difference immediately." },
            { img: review3, name: "Priya Naidoo", role: "Homeowner, Cape Town", quote: "Working with Naledi felt like a conversation, not a transaction. The result is a space that truly reflects us." },
            { img: review4, name: "Sipho Mthembu", role: "Architect & Collaborator", quote: "Their understanding of material and proportion elevates every project. A rare level of discipline in this industry." },
            { img: review5, name: "Catherine Voss", role: "Homeowner, Pretoria", quote: "Restrained, thoughtful, and deeply personal. Our home feels like it was always meant to be this way." },
            { img: review1, name: "Amara Osei", role: "Homeowner, Johannesburg", quote: "Naledi didn't just design our home — they understood how we wanted to feel in it. Every room has intention." },
            { img: review2, name: "David Hartley", role: "Property Developer", quote: "The level of precision and spatial awareness is unmatched. Our buyers notice the difference immediately." },
            { img: review3, name: "Priya Naidoo", role: "Homeowner, Cape Town", quote: "Working with Naledi felt like a conversation, not a transaction. The result is a space that truly reflects us." },
            { img: review4, name: "Sipho Mthembu", role: "Architect & Collaborator", quote: "Their understanding of material and proportion elevates every project. A rare level of discipline in this industry." },
            { img: review5, name: "Catherine Voss", role: "Homeowner, Pretoria", quote: "Restrained, thoughtful, and deeply personal. Our home feels like it was always meant to be this way." },
          ].map((r, i) => (
            <div key={i} className="flex-shrink-0 w-[380px] bg-background p-10">
              <div className="w-8 h-px bg-bronze mb-6" />
              <p className="font-serif text-base text-foreground leading-relaxed mb-6 italic">"{r.quote}"</p>
              <div className="flex items-center gap-4">
                <img src={r.img} alt={r.name} loading="lazy" width={48} height={48} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <p className="text-sm text-foreground font-sans font-medium">{r.name}</p>
                  <p className="text-xs text-muted-foreground font-sans font-light">{r.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CONCEPT 1: Values - Split-screen with image and accordion */}
    <section className="py-16 lg:py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="mb-12 lg:mb-16">
          <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-4">Our Values</p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground">What guides us</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Image */}
          <div className="relative aspect-[4/5] lg:sticky lg:top-32">
            <img 
              src={project2} 
              alt="Interior detail" 
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-charcoal/80 to-transparent p-8">
              <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-white/60 mb-2">Our Values</p>
              <p className="font-serif text-2xl text-white">What guides us</p>
            </div>
          </div>
          
          {/* Right: Value cards - consistent height */}
          <div className="space-y-4">
            {values.map((v, i) => (
              <div 
                key={v.title}
                onClick={() => setActiveValue(i)}
                className={`border-l-2 p-6 cursor-pointer transition-all duration-500 ${
                  i === activeValue 
                    ? 'border-bronze bg-secondary' 
                    : 'border-border hover:border-bronze/30'
                }`}
              >
                <div className="flex items-start gap-4">
                  <span className={`font-serif text-2xl transition-colors duration-300 ${
                    i === activeValue ? 'text-bronze' : 'text-bronze/30'
                  }`}>{v.num}</span>
                  <div className="flex-1">
                    <h3 className={`font-serif text-xl transition-colors duration-300 mb-3 ${
                      i === activeValue ? 'text-foreground' : 'text-muted-foreground'
                    }`}>{v.title}</h3>
                    <div className="w-12 h-px bg-bronze mb-3" />
                    <p className="text-muted-foreground leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* CONCEPT 1: Who This Is For - Editorial statement with border */}
    <section className="py-16 lg:py-20 bg-background">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
        <div className="border-y border-border py-12">
          <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-6">Who This Is For</p>
          <p className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground leading-relaxed">
            For homeowners and developers who value precision, clarity, and refined living.
          </p>
        </div>
      </div>
    </section>

    {/* CONCEPT 1: Contact - Large outlined card only */}
    <section className="py-16 lg:py-20 bg-secondary">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        {/* Large bordered card */}
        <div className="border border-border p-12 lg:p-20 text-center">
          <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-6">Start Your Project</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 leading-tight max-w-2xl mx-auto">
            Begin your project with clarity and intention.
          </h2>
          <p className="text-muted-foreground mb-10 max-w-lg mx-auto">
            Ready to transform your space? Let's discuss your vision and create something extraordinary together.
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

export default Index;
