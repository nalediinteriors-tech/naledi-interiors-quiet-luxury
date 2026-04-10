import Layout from "@/components/Layout";

const About = () => (
  <Layout>
    <section className="py-24 lg:py-32">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-6">About</p>
        <h1 className="font-serif text-3xl md:text-5xl text-foreground leading-tight mb-16">
          Design rooted in how people live.
        </h1>

        <div className="space-y-12 max-w-2xl">
          <div>
            <h2 className="font-serif text-xl text-foreground mb-4">Founder & Creative Director</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Naledi Interiors was founded on the principle that space shapes behavior. Our creative director brings a disciplined approach to residential and commercial interiors — one informed by environmental psychology, material science, and a deep respect for how physical environments influence cognitive and emotional well-being.
            </p>
          </div>

          <div className="border-t border-border pt-12">
            <h2 className="font-serif text-xl text-foreground mb-4">Philosophy</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              We believe design should be invisible in its effort and unmistakable in its effect. Every project begins with understanding — not of aesthetics, but of the people who will inhabit the space and the life they intend to live within it.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Our work draws from environmental psychology and intentional living principles. We study light, proportion, material, and movement to create spaces that support clarity of thought, calm, and purposeful daily rituals.
            </p>
          </div>

          <div className="border-t border-border pt-12">
            <h2 className="font-serif text-xl text-foreground mb-4">The Studio</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Naledi Interiors is a boutique firm by design. We take on a limited number of projects each year to ensure the depth of attention every client and space deserves. Our approach is collaborative, structured, and detail-driven — from initial consultation through final installation.
            </p>
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
