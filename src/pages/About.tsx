import { useState } from "react";
import Layout from "@/components/Layout";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import aboutHero from "@/assets/projects-new/Fb banner supporting ii.jpg";
import liseImg from "@/assets/team/lise.jpg";
import daphneyImg from "@/assets/team/daphney.jpg";
import abijahImg from "@/assets/team/abijah.jpg";
import tshireImg from "@/assets/team/tshire-founder.jpg";
import basetsanaImg from "@/assets/team/basetsana.jpg";

const team = [
  { name: "Lise Kedikilwe", role: "Operations and Talent Care", desc: "Strengthening internal systems, nurturing top talent, and elevating daily performance — the engine behind seamless operations.", image: liseImg },
  { name: "Daphney Sandile Elias", role: "Client Care and Administration", desc: "Where exceptional client journeys begin — building trust from the very first hello.", image: daphneyImg },
  { name: "Abijah Diphofu", role: "Finance and Accounts", desc: "Sourcing and maximizing the best value through precise financial oversight and strategic vendor relationships.", image: abijahImg },
  { name: "Basetsana Rantao", role: "Apprentice Interior Designer", desc: "Contributing fresh perspectives while mastering the principles of refined, client-centered interiors.", image: basetsanaImg },
];

const About = () => {
  const [selected, setSelected] = useState<(typeof team)[number] | null>(null);

  return (
  <Layout>
    {/* Hero Section */}
    <section className="relative h-[60vh] min-h-[400px] flex items-end">
      <img
        src={aboutHero}
        alt="Elegant interior design"
        className="absolute inset-0 w-full h-full object-cover"
        fetchPriority="high"
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
            <div className="relative aspect-[2/3] bg-secondary">
              <img
                src={tshireImg}
                alt="Tshireletso Atwine, Founder"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
              {/* Bronze accent line */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-bronze" />
            </div>
            <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-muted-foreground mt-4">Tshireletso Atwine, Founder</p>
          </div>

          {/* Right: Editorial text blocks */}
          <div className="lg:col-span-7 space-y-10">
            <div className="border-l-2 border-bronze pl-6">
              <h3 className="font-serif text-lg text-foreground mb-3">Tshireletso Atwine — Founder & Creative Director</h3>
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
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-6">The Team</p>
        <h2 className="font-serif text-2xl md:text-3xl text-foreground leading-tight mb-16">
          A focused collective of specialists.
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {team.map((member) => (
            <button
              key={member.name}
              type="button"
              onClick={() => setSelected(member)}
              className="text-left group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-bronze"
            >
              <div className="overflow-hidden mb-5">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={`${member.name}, ${member.role}`}
                    loading="lazy"
                    className="w-full aspect-[3/4] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full aspect-[3/4] bg-background flex flex-col items-center justify-center gap-3">
                    {/* Plus icon */}
                    <div className="relative w-5 h-5 opacity-40">
                      <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-px bg-[#9C8C7A]" />
                      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-[#9C8C7A]" />
                    </div>
                    <p className="font-sans text-[9px] tracking-[0.28em] uppercase text-muted-foreground">Image coming soon</p>
                  </div>
                )}
              </div>
              <h3 className="font-serif text-base text-foreground group-hover:text-bronze transition-colors">{member.name}</h3>
              <p className="text-xs tracking-[0.1em] uppercase text-accent mt-1 mb-3">{member.role}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{member.desc}</p>
            </button>
          ))}
        </div>
      </div>
    </section>

    {/* Team member detail modal */}
    <Dialog open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
      <DialogContent className="max-w-2xl p-0 overflow-hidden gap-0">
        {selected && (
          <div className="grid grid-cols-1 sm:grid-cols-5">
            <div className="sm:col-span-2">
              {selected.image ? (
                <img
                  src={selected.image}
                  alt={`${selected.name}, ${selected.role}`}
                  className="w-full h-full object-cover aspect-[714/1280]"
                />
              ) : (
                <div className="w-full h-full aspect-[714/1280] bg-background flex flex-col items-center justify-center gap-3">
                  <div className="relative w-5 h-5 opacity-40">
                    <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-px bg-[#9C8C7A]" />
                    <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-[#9C8C7A]" />
                  </div>
                  <p className="font-sans text-[9px] tracking-[0.28em] uppercase text-muted-foreground">Image coming soon</p>
                </div>
              )}
            </div>
            <div className="sm:col-span-3 p-8 flex flex-col justify-center">
              <DialogTitle className="font-serif text-2xl text-foreground leading-tight mb-1">
                {selected.name}
              </DialogTitle>
              <p className="text-xs tracking-[0.15em] uppercase text-accent mb-4">{selected.role}</p>
              <DialogDescription className="text-base text-muted-foreground leading-relaxed">
                {selected.desc}
              </DialogDescription>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  </Layout>
  );
};

export default About;
