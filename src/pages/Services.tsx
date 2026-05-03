import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import servicesHero from "@/assets/projects-new/Modern Classic Mansion ii.png";

const services = [
  {
    title: "INTERIOR DESIGN",
    desc: "Our Interior Design Studio offers a highly personalised service, designing beautifully crafted interiors that reflect each client's individual style and aspirations. Working closely with you throughout the design process, we ensure that every detail is considered and tailored to create a home that truly resonates with you. From conceptual design through to the final touches, our dedicated team harmonises comfort, elegance, and functionality. The result is a thoughtfully curated space where luxury and personal style converge.",
  },
  {
    title: "SPATIAL PLANNING",
    desc: "Strategic analysis of flow, proportion, and function lies at the heart of our approach. We optimise layouts to support how you move through and use your space, informed by behavioural insight and architectural understanding. Whether working on a contemporary residence or a traditional home, our focus is on crafting spaces that balance luxurious aesthetics with everyday functionality. We create homes that are timeless and deeply personal, embodying a refined elegance while enhancing the way you live.",
  },
  {
    title: "FF&E DESIGN",
    desc: "Our FF&E Design team expertly blends fabrics, finishes, and furnishings to create bespoke schemes that are meticulously tailored to your project. Every element, from the design of custom furniture to the selection of fine materials, is chosen with care to align with your personal aesthetic. We are committed to delivering harmonious interiors where every detail contributes to the overall sense of sophistication and comfort. The result is a space that feels effortlessly refined yet inviting.",
  },
  {
    title: "PROCUREMENT",
    desc: "Our Procurement Service offers a comprehensive and seamless experience, sourcing the finest materials, furnishings, and accessories from a trusted global network of suppliers. We oversee every stage of the procurement process, ensuring that each element is delivered to the highest standard and perfectly aligned with the design vision. From managing orders to coordinating logistics, our team handles the entire journey with precision, guaranteeing a smooth process from selection through to delivery.",
  },
  {
    title: "DELIVERY & INSTALLATION",
    desc: "Our Delivery and Installation Service ensures that every piece, from the largest architectural element to the smallest decorative accessory, is installed with care and attention to detail. With meticulous planning and coordination, we ensure that the entire process is smooth and efficient, leaving your home perfectly dressed and ready to enjoy. Our team of experts oversee every aspect of installation, ensuring that each piece is positioned and styled to enhance the overall design, completing the transformation of your space with precision.",
  },
];

const steps = [
  { num: "01", title: "Discovery", desc: "Understanding your vision through structured dialogue and observation." },
  { num: "02", title: "Analysis", desc: "Analyzing architecture, light, flow, and the psychology of space." },
  { num: "03", title: "Development", desc: "Translating insight into material selections, layouts, and concepts." },
  { num: "04", title: "Delivery", desc: "Managing procurement to installation with meticulous precision." },
];

const Services = () => (
  <Layout>
    {/* Hero Section */}
    <section className="relative h-[60vh] min-h-[400px] flex items-end">
      <img
        src={servicesHero}
        alt="Luxury interior design"
        className="absolute inset-0 w-full h-full object-cover"
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
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 lg:mb-20 gap-6">
          <div>
            <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-4">What We Do</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight max-w-2xl">
              A complete design journey.
            </h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-md lg:text-right">
            From the first sketch to the final detail, every step is intentional.
          </p>
        </div>
      </div>

      {/* Full-width horizontal cards */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-1">
        {services.map((s, i) => (
          <div 
            key={i}
            className="group border-t border-border hover:bg-secondary/30 transition-all duration-500 cursor-pointer"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              {/* Left: Image/Placeholder area */}
              <div className="lg:col-span-4 relative aspect-[16/9] lg:aspect-auto lg:h-48 bg-secondary overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/50 lg:to-secondary/50" />
                <div className="absolute top-4 left-4 lg:top-6 lg:left-6">
                  <span className="font-serif text-4xl lg:text-5xl text-bronze/20 group-hover:text-bronze/40 transition-colors duration-500">
                    0{i + 1}
                  </span>
                </div>
              </div>
              
              {/* Right: Content */}
              <div className="lg:col-span-8 p-6 lg:p-8 lg:pl-12 flex flex-col justify-center">
                <h3 className="font-serif text-xl lg:text-2xl text-foreground mb-3 group-hover:text-bronze transition-colors duration-300">
                  {s.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed max-w-xl mb-4">
                  {s.desc}
                </p>
                <div className="flex items-center gap-3 text-bronze opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="font-sans text-[10px] tracking-[0.2em] uppercase">Explore service</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        ))}
        {/* Bottom border */}
        <div className="border-t border-border" />
      </div>
    </section>

    {/* Process Section */}
    <section className="py-16 lg:py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-2">How We Work</p>
          <h2 className="font-serif text-2xl md:text-3xl text-foreground">Our Process</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div key={s.num} className="border border-border p-8 bg-background">
              <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-bronze">{s.num}</span>
              <h3 className="font-serif text-lg mt-4 mb-3 text-foreground">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-sans font-light">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-16 lg:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <p className="font-serif text-xl text-foreground mb-2">Ready to begin?</p>
        <p className="text-sm text-muted-foreground mb-8">Let's discuss your project.</p>
        <Link
          to="/contact"
          className="inline-block bg-bronze text-white text-[11px] tracking-[0.2em] uppercase px-12 py-5 hover:bg-terracotta transition-colors duration-300 font-sans font-medium"
        >
          Schedule a Consultation
        </Link>
      </div>
    </section>
  </Layout>
);

export default Services;
