import { useState } from "react";
import Layout from "@/components/Layout";
import contactHero from "@/assets/projects-new/Fb banner supporting iii.jpg";
import { ChevronDown } from "lucide-react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is your design process?",
      answer: "Our process begins with an initial consultation to understand your vision, lifestyle, and budget. We then develop concept boards, detailed drawings, and material selections. Once approved, we manage procurement, oversee installation, and conduct final styling. Throughout, we maintain clear communication and regular updates."
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on scope and complexity. A single room refresh may take 4-8 weeks, while full home renovations typically range from 3-6 months. Commercial projects depend on scale, but we always provide a detailed timeline during our initial consultation and keep you informed of progress throughout."
    },
    {
      question: "Do you work with specific budgets?",
      answer: "Absolutely. We work with a range of budgets and believe beautiful design should be accessible. During our initial consultation, we discuss your investment parameters and create solutions that maximize value while respecting your financial boundaries. Transparency about costs is fundamental to our approach."
    },
    {
      question: "Can you work with my existing furniture and pieces?",
      answer: "Yes, we love incorporating meaningful pieces into our designs. Whether it's a family heirloom, a favorite artwork, or quality furniture you wish to retain, we thoughtfully integrate existing elements with new selections to create cohesive, personalized spaces that tell your story."
    },
    {
      question: "Do you handle procurement and installation?",
      answer: "Yes, we provide comprehensive project management. This includes sourcing furniture, materials, and finishes from our network of trusted suppliers and artisans. We coordinate delivery, oversee installation, and conduct final styling to ensure every detail meets our exacting standards."
    },
    {
      question: "What areas do you serve?",
      answer: "We are based in Gaborone, Botswana, and primarily serve clients throughout the country. For select commercial projects or residential estates, we also consider commissions in neighboring regions. Virtual consultations are available for initial discussions with international clients."
    },
    {
      question: "How do you charge for your services?",
      answer: "We offer flexible fee structures including flat project fees, hourly consultations, and percentage-based pricing for larger projects. The approach depends on project scope and complexity. We provide a detailed proposal with transparent pricing after understanding your specific needs during the initial consultation."
    },
    {
      question: "Do you collaborate with architects and contractors?",
      answer: "Collaboration is essential to successful projects. We regularly work alongside architects, builders, and specialist contractors to ensure cohesive execution. Our experience coordinating with various professionals ensures smooth workflows and aligned outcomes that honor both design vision and technical requirements."
    },
    {
      question: "Can I see examples of your previous work?",
      answer: "Our portfolio showcases a selection of completed residential and commercial projects across our website. For confidentiality reasons, some client homes are not displayed publicly. During our consultation, we can share additional relevant case studies that align with your project type and style interests."
    },
    {
      question: "What makes Naledi Interiors different?",
      answer: "We combine international design sensibilities with deep appreciation for local context and craftsmanship. Our approach balances aesthetic excellence with functional living, creating spaces that are both beautiful and genuinely livable. We prioritize sustainable practices, support local artisans, and bring meticulous attention to every detail—from concept to completion."
    }
  ];

  return (
    <div className="mb-16">
      <div className="text-center mb-10">
        <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-terracotta mb-4">Common Questions</p>
        <h3 className="font-serif text-2xl text-foreground">Before You Reach Out</h3>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-border bg-background"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between p-5 text-left hover:bg-secondary/30 transition-colors"
            >
              <span className="font-serif text-base text-foreground pr-4">{faq.question}</span>
              <ChevronDown
                size={18}
                className={`text-terracotta flex-shrink-0 transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? "max-h-96" : "max-h-0"
              }`}
            >
              <p className="px-5 pb-5 text-muted-foreground text-sm leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    timeline: "",
    propertyType: "",
    currentStatus: "",
    projectLocation: "",
    projectDescription: "",
    referralSource: "",
    preferredContact: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // placeholder
    alert("Thank you. We will be in touch.");
  };

  const inputClass =
    "w-full bg-transparent border-b border-border py-3 text-base text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent transition-colors";
  const selectClass =
    "w-full bg-transparent border-b border-border py-3 text-base text-foreground focus:outline-none focus:border-accent transition-colors appearance-none";

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-end">
        <img
          src={contactHero}
          alt="Elegant interior space"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/30" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-12 w-full">
          <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-white/70 mb-4">Contact</p>
          <h1 className="font-serif text-3xl md:text-5xl text-white leading-tight">
            Start a conversation.
          </h1>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-secondary">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          {/* Centered Header */}
          <div className="text-center mb-12">
            <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-4">Contact</p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground leading-tight mb-4">
              Start a conversation
            </h2>
            <p className="text-muted-foreground">
              We would love to hear from you.
            </p>
          </div>

          {/* Single bordered card */}
          <div className="bg-background border border-border p-8 lg:p-12 shadow-sm">
            {/* Contact details row */}
            <div className="flex flex-wrap justify-center gap-8 mb-10 pb-10 border-b border-border">
              <a href="mailto:ni@naledi.com" className="text-foreground hover:text-bronze transition-colors text-base">ni@naledi.com</a>
              <a href="https://wa.me/26773293302" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-bronze transition-colors text-base">+267 73293302</a>
              <span className="text-muted-foreground text-base">Gaborone, Botswana</span>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-sans text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-transparent border border-border px-4 py-3 text-base text-foreground focus:outline-none focus:border-bronze transition-colors"
                  />
                </div>
                <div>
                  <label className="block font-sans text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-transparent border border-border px-4 py-3 text-base text-foreground focus:outline-none focus:border-bronze transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block font-sans text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-transparent border border-border px-4 py-3 text-base text-foreground focus:outline-none focus:border-bronze transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block font-sans text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">Project Type</label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full bg-transparent border border-border px-4 py-3 text-base text-foreground focus:outline-none focus:border-bronze transition-colors appearance-none"
                  >
                    <option value="" disabled>Select</option>
                    <option value="residential">Residential</option>
                    <option value="commercial">Commercial</option>
                    <option value="hospitality">Hospitality</option>
                  </select>
                </div>
                <div>
                  <label className="block font-sans text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">Budget</label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full bg-transparent border border-border px-4 py-3 text-base text-foreground focus:outline-none focus:border-bronze transition-colors appearance-none"
                  >
                    <option value="" disabled>Select</option>
                    <option value="50-100k">$50k – $100k</option>
                    <option value="100-250k">$100k – $250k</option>
                    <option value="250-500k">$250k – $500k</option>
                    <option value="500k+">$500k+</option>
                  </select>
                </div>
                <div>
                  <label className="block font-sans text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">Timeline</label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full bg-transparent border border-border px-4 py-3 text-base text-foreground focus:outline-none focus:border-bronze transition-colors appearance-none"
                  >
                    <option value="" disabled>Select</option>
                    <option value="3-6">3 – 6 months</option>
                    <option value="6-12">6 – 12 months</option>
                    <option value="12+">12+ months</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-sans text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">Property Type</label>
                  <select
                    name="propertyType"
                    value={formData.propertyType}
                    onChange={handleChange}
                    className="w-full bg-transparent border border-border px-4 py-3 text-base text-foreground focus:outline-none focus:border-bronze transition-colors appearance-none"
                  >
                    <option value="" disabled>Select</option>
                    <option value="house">House</option>
                    <option value="apartment">Apartment</option>
                    <option value="office">Office</option>
                    <option value="retail">Retail Space</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block font-sans text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">Current Status</label>
                  <select
                    name="currentStatus"
                    value={formData.currentStatus}
                    onChange={handleChange}
                    className="w-full bg-transparent border border-border px-4 py-3 text-base text-foreground focus:outline-none focus:border-bronze transition-colors appearance-none"
                  >
                    <option value="" disabled>Select</option>
                    <option value="new-build">New Build</option>
                    <option value="renovation">Renovation</option>
                    <option value="furnishing">Furnishing Only</option>
                    <option value="planning">Still Planning</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-sans text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">Project Location / Address</label>
                <input
                  type="text"
                  name="projectLocation"
                  placeholder="Where is the project located?"
                  value={formData.projectLocation}
                  onChange={handleChange}
                  className="w-full bg-transparent border border-border px-4 py-3 text-base text-foreground focus:outline-none focus:border-bronze transition-colors"
                />
              </div>

              <div>
                <label className="block font-sans text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">Tell Us About Your Project</label>
                <textarea
                  name="projectDescription"
                  placeholder="Describe your vision, requirements, or any specific details..."
                  rows={4}
                  value={formData.projectDescription}
                  onChange={handleChange}
                  className="w-full bg-transparent border border-border px-4 py-3 text-base text-foreground focus:outline-none focus:border-bronze transition-colors resize-none"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-sans text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">How Did You Hear About Us?</label>
                  <select
                    name="referralSource"
                    value={formData.referralSource}
                    onChange={handleChange}
                    className="w-full bg-transparent border border-border px-4 py-3 text-base text-foreground focus:outline-none focus:border-bronze transition-colors appearance-none"
                  >
                    <option value="" disabled>Select</option>
                    <option value="instagram">Instagram</option>
                    <option value="facebook">Facebook</option>
                    <option value="linkedin">LinkedIn</option>
                    <option value="google">Google Search</option>
                    <option value="referral">Referral / Word of Mouth</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block font-sans text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">Preferred Contact Method</label>
                  <select
                    name="preferredContact"
                    value={formData.preferredContact}
                    onChange={handleChange}
                    className="w-full bg-transparent border border-border px-4 py-3 text-base text-foreground focus:outline-none focus:border-bronze transition-colors appearance-none"
                  >
                    <option value="" disabled>Select</option>
                    <option value="email">Email</option>
                    <option value="phone">Phone Call</option>
                    <option value="whatsapp">WhatsApp</option>
                  </select>
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-foreground text-background text-xs tracking-[0.2em] uppercase px-10 py-5 hover:bg-bronze hover:text-white transition-colors duration-300 font-sans font-medium"
                >
                  Submit Inquiry
                </button>
              </div>
            </form>
          </div>

          {/* Social links */}
          <div className="flex justify-center gap-8 mt-10">
            <a href="https://instagram.com/nalediinteriors" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors text-xs tracking-[0.2em] uppercase">Instagram</a>
            <a href="https://www.linkedin.com/company/nalediinteriors" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors text-xs tracking-[0.2em] uppercase">LinkedIn</a>
            <a href="https://facebook.com/nalediinteriors" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors text-xs tracking-[0.2em] uppercase">Facebook</a>
          </div>

          {/* FAQ Section - Below Form */}
          <div className="mt-20 pt-16 border-t border-border">
            <FAQSection />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
