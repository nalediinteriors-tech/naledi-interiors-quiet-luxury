import { useState } from "react";
import Layout from "@/components/Layout";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    timeline: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // placeholder
    alert("Thank you. We will be in touch.");
  };

  const inputClass =
    "w-full bg-transparent border-b border-border py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent transition-colors";
  const selectClass =
    "w-full bg-transparent border-b border-border py-3 text-sm text-foreground focus:outline-none focus:border-accent transition-colors appearance-none";

  return (
    <Layout>
      <section className="py-24 lg:py-32">
        <div className="max-w-2xl mx-auto px-6 lg:px-12">
          <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-6">Contact</p>
          <h1 className="font-serif text-3xl md:text-5xl text-foreground leading-tight mb-6">
            Start a conversation.
          </h1>
          <p className="text-sm text-muted-foreground mb-16">
            Selected clients will be invited to a consultation.
          </p>

          <form onSubmit={handleSubmit} className="space-y-8">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              value={formData.name}
              onChange={handleChange}
              className={inputClass}
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              value={formData.email}
              onChange={handleChange}
              className={inputClass}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className={inputClass}
            />
            <select
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              className={selectClass}
            >
              <option value="" disabled>Project Type</option>
              <option value="residential">Residential</option>
              <option value="commercial">Commercial</option>
              <option value="hospitality">Hospitality</option>
              <option value="other">Other</option>
            </select>
            <select
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className={selectClass}
            >
              <option value="" disabled>Budget Range</option>
              <option value="50-100k">$50,000 – $100,000</option>
              <option value="100-250k">$100,000 – $250,000</option>
              <option value="250-500k">$250,000 – $500,000</option>
              <option value="500k+">$500,000+</option>
            </select>
            <select
              name="timeline"
              value={formData.timeline}
              onChange={handleChange}
              className={selectClass}
            >
              <option value="" disabled>Timeline</option>
              <option value="3-6">3 – 6 months</option>
              <option value="6-12">6 – 12 months</option>
              <option value="12+">12+ months</option>
              <option value="flexible">Flexible</option>
            </select>

            <div className="pt-4">
              <button
                type="submit"
                className="bg-primary text-primary-foreground text-xs tracking-[0.15em] uppercase px-10 py-4 hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
              >
                Submit Inquiry
              </button>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
