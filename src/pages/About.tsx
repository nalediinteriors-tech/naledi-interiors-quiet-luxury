import Layout from "@/components/Layout";
import aboutHero from "@/assets/projects-new/Fb banner supporting ii.png";

const About = () => (
  <Layout>
    {/* Hero Section */}
    <section className="relative h-[60vh] min-h-[400px] flex items-end">
      <img
        src={aboutHero}
        alt="Elegant interior design"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-charcoal/30" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-12 w-full">
        <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-white/70 mb-4">About</p>
        <h1 className="font-serif text-3xl md:text-5xl text-white leading-tight">
          Design rooted in how people live.
        </h1>
      </div>
    </section>

    {/* CONCEPT 1: Our Story - Split-screen editorial with portrait */}
    <section className="py-16 lg:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-12 lg:mb-16">
          <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-4">Our Story</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight max-w-2xl">
            Creating spaces that shape behavior.
          </h2>
        </div>

        {/* Split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left: Large portrait image placeholder */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[3/4] bg-secondary">
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-muted-foreground">Founder Portrait</p>
              </div>
              {/* Bronze accent line */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-bronze" />
            </div>
            <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-muted-foreground mt-4">Naledi Mokoena, Founder</p>
          </div>

          {/* Right: Editorial text blocks */}
          <div className="lg:col-span-7 space-y-10">
            <div className="border-l-2 border-bronze pl-6">
              <h3 className="font-serif text-lg text-foreground mb-3">Founder & Creative Director</h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                Naledi Interiors was founded on the principle that space shapes behavior. Our creative director brings a disciplined approach to residential and commercial interiors — one informed by environmental psychology, material science, and a deep respect for how physical environments influence cognitive and emotional well-being.
              </p>
            </div>

            <div className="border-l-2 border-border pl-6">
              <h3 className="font-serif text-lg text-foreground mb-3">Philosophy</h3>
              <p className="text-base text-muted-foreground leading-relaxed mb-4">
                We believe design should be invisible in its effort and unmistakable in its effect. Every project begins with understanding — not of aesthetics, but of the people who will inhabit the space.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                Our work draws from environmental psychology and intentional living principles. We study light, proportion, material, and movement to create spaces that support clarity of thought and purposeful daily rituals.
              </p>
            </div>

            <div className="bg-secondary p-6">
              <h3 className="font-serif text-lg text-foreground mb-3">The Studio</h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                Naledi Interiors is a boutique firm by design. We take on a limited number of projects each year to ensure the depth of attention every client and space deserves.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Team */}
    <section className="py-24 lg:py-32 bg-secondary">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-6">The Team</p>
        <h2 className="font-serif text-2xl md:text-3xl text-foreground leading-tight mb-16">
          A focused collective of specialists.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { name: "Naledi Mokoena", role: "Founder & Creative Director", desc: "Spatial strategy, environmental psychology, and design vision." },
            { name: "Thabo Khumalo", role: "Senior Interior Designer", desc: "Material specification, spatial planning, and client liaison." },
            { name: "Lerato Ndaba", role: "Project Coordinator", desc: "Procurement management, timeline oversight, and execution." },
          ].map((member) => (
            <div key={member.name}>
              <div className="w-full aspect-[3/4] bg-border/50 mb-5" />
              <h3 className="font-serif text-base text-foreground">{member.name}</h3>
              <p className="text-xs tracking-[0.1em] uppercase text-accent mt-1 mb-3">{member.role}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{member.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
