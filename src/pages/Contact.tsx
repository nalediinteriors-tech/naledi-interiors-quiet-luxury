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
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left: Contact details */}
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-6">Contact</p>
              <h1 className="font-serif text-3xl md:text-5xl text-foreground leading-tight mb-6">
                Start a conversation.
              </h1>
              <p className="text-sm text-muted-foreground mb-12">
                Selected clients will be invited to a consultation.
              </p>

              <div className="space-y-8">
                <div>
                  <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">Email</p>
                  <a href="mailto:hello@nalediinteriors.com" className="text-sm text-foreground hover:text-accent transition-colors">hello@nalediinteriors.com</a>
                </div>
                <div>
                  <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">Phone</p>
                  <a href="tel:+27123456789" className="text-sm text-foreground hover:text-accent transition-colors">+27 12 345 6789</a>
                </div>
                <div>
                  <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">WhatsApp</p>
                  <a href="https://wa.me/27123456789" target="_blank" rel="noopener noreferrer" className="text-sm text-foreground hover:text-accent transition-colors">Message us on WhatsApp</a>
                </div>
                <div>
                  <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">Studio</p>
                  <p className="text-sm text-foreground">44 Jan Smuts Avenue<br />Rosebank, Johannesburg<br />South Africa</p>
                </div>
                <div>
                  <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">Follow</p>
                  <div className="flex gap-4 text-sm">
                    <a href="https://instagram.com/nalediinteriors" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-accent transition-colors">Instagram</a>
                    <a href="https://facebook.com/nalediinteriors" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-accent transition-colors">Facebook</a>
                    <a href="https://pinterest.com/nalediinteriors" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-accent transition-colors">Pinterest</a>
                    <a href="https://linkedin.com/company/nalediinteriors" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-accent transition-colors">LinkedIn</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div>

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
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
