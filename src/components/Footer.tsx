import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Instagram, Facebook, Linkedin } from "lucide-react";
import ServicePanel from "@/components/ServicePanel";
import { services } from "@/data/services";

const Footer = () => {
  const [openService, setOpenService] = useState<string | null>(null);
  const onServicesPage = useLocation().pathname === "/services";

  return (
  <footer className="bg-primary text-primary-foreground">
    <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
      {/* Logo and tagline removed; footer rebalanced to 4 columns with Services + CTA. */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        <div>
          <h4 className="text-xs tracking-[0.2em] uppercase mb-4">Navigation</h4>
          <div className="space-y-3">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About" },
              { to: "/services", label: "Services" },
              { to: "/contact", label: "Contact" },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="block text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-xs tracking-[0.2em] uppercase mb-4">Contact</h4>
          <div className="space-y-3 text-sm text-primary-foreground/60">
            <a href="mailto:ni@nalediinteriors.com" className="block hover:text-primary-foreground transition-colors">ni@nalediinteriors.com</a>
            <a href="https://wa.me/26773293302" target="_blank" rel="noopener noreferrer" className="block hover:text-primary-foreground transition-colors">
              +267 73293302
            </a>
          </div>
        </div>
        <div>
          <h4 className="text-xs tracking-[0.2em] uppercase mb-4">Studio</h4>
          <p className="text-sm text-primary-foreground/60 leading-relaxed">
            Gaborone, Botswana
          </p>
        </div>
        <div>
          <h4 className="text-xs tracking-[0.2em] uppercase mb-4 text-right">Services</h4>
          <div className="space-y-3 text-sm text-primary-foreground/60 text-right">
            {/* On /services each name jumps to its card; elsewhere it opens the side panel */}
            {services.map((s) =>
              onServicesPage ? (
                <Link
                  key={s.id}
                  to={`/services#${s.id}`}
                  className="block hover:text-primary-foreground transition-colors focus:outline-none focus-visible:text-primary-foreground focus-visible:underline"
                >
                  {s.title}
                </Link>
              ) : (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setOpenService(s.id)}
                  className="block ml-auto hover:text-primary-foreground transition-colors focus:outline-none focus-visible:text-primary-foreground focus-visible:underline"
                >
                  {s.title}
                </button>
              ),
            )}
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-primary-foreground/40">
          © {new Date().getFullYear()} Naledi Interiors. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a href="https://instagram.com/nalediinteriors" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/50 hover:text-primary-foreground transition-colors" aria-label="Instagram">
            <Instagram size={18} />
          </a>
          <a href="https://www.linkedin.com/company/naledi-interiors/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/50 hover:text-primary-foreground transition-colors" aria-label="LinkedIn">
            <Linkedin size={18} />
          </a>
          <a href="https://www.facebook.com/nalediinteriorsUganda" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/50 hover:text-primary-foreground transition-colors" aria-label="Facebook">
            <Facebook size={18} />
          </a>
        </div>
      </div>
    </div>
    <ServicePanel serviceId={openService} onSelect={setOpenService} />
  </footer>
  );
};

export default Footer;
