import Layout from "@/components/Layout";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Full-Service Interior Design",
    desc: "Comprehensive design from concept to completion. We manage every element — spatial planning, material selection, furniture specification, and installation — to deliver a cohesive, intentional environment.",
  },
  {
    title: "Spatial Planning",
    desc: "Strategic analysis of flow, proportion, and function. We optimize layouts to support how you move through and use your space, informed by behavioral insight and architectural understanding.",
  },
  {
    title: "Furniture & Styling",
    desc: "Curated selection of furniture, lighting, textiles, and objects. Each piece is chosen for its material integrity, proportional harmony, and contribution to the overall spatial narrative.",
  },
  {
    title: "Procurement & Project Coordination",
    desc: "End-to-end management of sourcing, ordering, and delivery. We coordinate with artisans, suppliers, and contractors to ensure seamless execution and quality at every stage.",
  },
];

const Services = () => (
  <Layout>
    <section className="py-24 lg:py-32">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-6">Services</p>
        <h1 className="font-serif text-3xl md:text-5xl text-foreground leading-tight mb-16">
          What we do.
        </h1>

        <div className="space-y-16">
          {services.map((s, i) => (
            <div key={i} className="border-t border-border pt-8">
              <h2 className="font-serif text-xl text-foreground mb-4">{s.title}</h2>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xl">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <p className="font-serif text-xl text-foreground mb-8">Ready to begin?</p>
          <Link
            to="/contact"
            className="inline-block bg-primary text-primary-foreground text-xs tracking-[0.15em] uppercase px-10 py-4 hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
          >
            Book a Consultation
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);

export default Services;
