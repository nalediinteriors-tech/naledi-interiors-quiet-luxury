import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import heroImage from "@/assets/hero-interior.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";
import review1 from "@/assets/review-1.jpg";
import review2 from "@/assets/review-2.jpg";
import review3 from "@/assets/review-3.jpg";
import review4 from "@/assets/review-4.jpg";
import review5 from "@/assets/review-5.jpg";

const projects = [
  { image: project1, name: "The Linden Residence", desc: "A sanctuary of layered calm in the heart of the city." },
  { image: project2, name: "Thornwood Kitchen", desc: "Material honesty meets culinary precision." },
  { image: project3, name: "Highfield Living", desc: "Light, proportion, and intention in every detail." },
  { image: project4, name: "The Stone Bath", desc: "A study in texture, warmth, and restraint." },
  { image: project5, name: "Oakmont Study", desc: "Where focus meets refined comfort." },
  { image: project6, name: "The Walden Table", desc: "Gathering reimagined through spatial awareness." },
];

const pillars = [
  { title: "Human-Centered Design", desc: "Spaces shaped by how people actually live, move, and feel — not by trends." },
  { title: "Intentional Materiality", desc: "Every surface, texture, and finish is chosen with purpose and precision." },
  { title: "Refined Execution", desc: "Meticulous attention to detail from concept through completion." },
];

const steps = [
  { num: "01", title: "Discovery & Consultation", desc: "Understanding your vision, lifestyle, and spatial requirements through structured dialogue." },
  { num: "02", title: "Spatial Understanding", desc: "Analyzing the architecture, light, flow, and psychology of your space." },
  { num: "03", title: "Design Development", desc: "Translating insight into material selections, layouts, and detailed design concepts." },
  { num: "04", title: "Execution & Delivery", desc: "Managing every detail from procurement to installation with precision." },
];

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="relative h-[90vh] min-h-[600px] flex items-end">
      <img
        src={heroImage}
        alt="Refined luxury interior living room with natural textures"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-foreground/30" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-16 lg:pb-24 w-full">
        <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl text-primary-foreground leading-tight max-w-2xl mb-6 animate-fade-in">
          Spaces that elevate how you live, think, and feel.
        </h1>
        <p className="text-sm md:text-base text-primary-foreground/80 max-w-lg mb-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Interior design guided by human behavior, intention, and refined execution.
        </p>
        <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <Link
            to="/contact"
            className="inline-block bg-primary text-primary-foreground text-xs tracking-[0.15em] uppercase px-8 py-4 hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
          >
            Book a Consultation
          </Link>
          <a
            href="#work"
            className="inline-block border border-primary-foreground/50 text-primary-foreground text-xs tracking-[0.15em] uppercase px-8 py-4 hover:bg-primary-foreground/10 transition-colors duration-300"
          >
            View Our Work
          </a>
        </div>
      </div>
    </section>

    {/* Philosophy */}
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <p className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground leading-relaxed">
            We don't decorate spaces. We design environments that influence how you live within them.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {pillars.map((p) => (
            <div key={p.title} className="text-center">
              <h3 className="font-serif text-lg mb-3 text-foreground">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Selected Work */}
    <section id="work" className="py-24 lg:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2 className="font-serif text-2xl md:text-3xl mb-16 text-center text-foreground">Selected Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p) => (
            <div key={p.name} className="group cursor-pointer">
              <div className="overflow-hidden mb-4">
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  width={800}
                  height={1000}
                  className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="font-serif text-base text-foreground mb-1">{p.name}</h3>
              <p className="text-xs text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Process */}
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2 className="font-serif text-2xl md:text-3xl mb-16 text-center text-foreground">Our Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((s) => (
            <div key={s.num}>
              <span className="text-xs text-accent tracking-[0.2em] font-sans">{s.num}</span>
              <h3 className="font-serif text-lg mt-2 mb-3 text-foreground">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Reviews Marquee */}
    <section className="py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-16">
        <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-6 text-center">Client Words</p>
        <h2 className="font-serif text-2xl md:text-3xl text-center text-foreground">What our clients say.</h2>
      </div>
      <div className="relative">
        <div className="flex animate-marquee w-max gap-8">
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
            <div key={i} className="flex-shrink-0 w-[380px] bg-secondary p-8">
              <p className="font-serif text-base text-foreground leading-relaxed mb-6 italic">"{r.quote}"</p>
              <div className="flex items-center gap-4">
                <img src={r.img} alt={r.name} loading="lazy" width={48} height={48} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <p className="text-sm text-foreground font-medium">{r.name}</p>
                  <p className="text-xs text-muted-foreground">{r.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="py-24 lg:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-6 text-center">Our Values</p>
        <h2 className="font-serif text-2xl md:text-3xl mb-16 text-center text-foreground">What guides every decision.</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {[
            { title: "Integrity", desc: "Honest material choices, transparent processes, and designs that serve people — not ego." },
            { title: "Precision", desc: "Every proportion, joint, and finish is considered. Nothing is left to chance." },
            { title: "Restraint", desc: "Knowing what to leave out is as important as knowing what to include." },
            { title: "Longevity", desc: "We design for decades, not seasons. Timeless over trendy, always." },
          ].map((v) => (
            <div key={v.title}>
              <div className="w-8 h-px bg-accent mb-5" />
              <h3 className="font-serif text-lg text-foreground mb-3">{v.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Who This Is For */}
    <section className="py-24 lg:py-32">
      <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
        <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-6">Who This Is For</p>
        <p className="font-serif text-2xl md:text-3xl text-foreground leading-relaxed">
          For homeowners and developers who value precision, clarity, and refined living.
        </p>
      </div>
    </section>

    {/* Contact Details + Final CTA */}
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="font-serif text-2xl md:text-3xl text-foreground mb-10">
              Begin your project with clarity and intention.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-primary text-primary-foreground text-xs tracking-[0.15em] uppercase px-10 py-4 hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
            >
              Schedule a Consultation
            </Link>
          </div>
          <div className="space-y-6">
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">Email</p>
              <p className="text-sm text-foreground">hello@nalediinteriors.com</p>
            </div>
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">Phone</p>
              <p className="text-sm text-foreground">+27 12 345 6789</p>
            </div>
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">Studio</p>
              <p className="text-sm text-foreground">44 Jan Smuts Avenue, Rosebank, Johannesburg</p>
            </div>
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">Follow</p>
              <div className="flex gap-4 text-sm">
                <a href="https://instagram.com/nalediinteriors" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-accent transition-colors">Instagram</a>
                <a href="https://facebook.com/nalediinteriors" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-accent transition-colors">Facebook</a>
                <a href="https://pinterest.com/nalediinteriors" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-accent transition-colors">Pinterest</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Index;
