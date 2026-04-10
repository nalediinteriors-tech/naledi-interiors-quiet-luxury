import { Link } from "react-router-dom";
import { Instagram, Facebook } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        <div>
          <h3 className="font-serif text-lg tracking-wider mb-4">NALEDI INTERIORS</h3>
          <p className="text-sm text-primary-foreground/60 leading-relaxed max-w-xs mb-6">
            Interior design guided by human behavior, intention, and refined execution.
          </p>
          <div className="flex items-center gap-4">
            <a href="https://instagram.com/nalediinteriors" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/50 hover:text-primary-foreground transition-colors" aria-label="Instagram">
              <Instagram size={18} />
            </a>
            <a href="https://facebook.com/nalediinteriors" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/50 hover:text-primary-foreground transition-colors" aria-label="Facebook">
              <Facebook size={18} />
            </a>
            <a href="https://pinterest.com/nalediinteriors" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/50 hover:text-primary-foreground transition-colors" aria-label="Pinterest">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 12a4 4 0 1 1 8 0c0 4-2 6-2 6"/><path d="M9.5 17.5 8 22"/><circle cx="12" cy="12" r="10"/></svg>
            </a>
            <a href="https://www.linkedin.com/company/nalediinteriors" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/50 hover:text-primary-foreground transition-colors" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
          </div>
        </div>
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
            <p>hello@nalediinteriors.com</p>
            <p>+27 12 345 6789</p>
            <a href="https://wa.me/27123456789" target="_blank" rel="noopener noreferrer" className="block hover:text-primary-foreground transition-colors">
              WhatsApp
            </a>
          </div>
        </div>
        <div>
          <h4 className="text-xs tracking-[0.2em] uppercase mb-4">Studio</h4>
          <p className="text-sm text-primary-foreground/60 leading-relaxed">
            44 Jan Smuts Avenue<br />
            Rosebank, Johannesburg<br />
            South Africa
          </p>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-primary-foreground/40">
          © {new Date().getFullYear()} Naledi Interiors. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <a href="https://instagram.com/nalediinteriors" target="_blank" rel="noopener noreferrer" className="text-xs text-primary-foreground/40 hover:text-primary-foreground/60 transition-colors">
            Instagram
          </a>
          <a href="https://facebook.com/nalediinteriors" target="_blank" rel="noopener noreferrer" className="text-xs text-primary-foreground/40 hover:text-primary-foreground/60 transition-colors">
            Facebook
          </a>
          <a href="https://pinterest.com/nalediinteriors" target="_blank" rel="noopener noreferrer" className="text-xs text-primary-foreground/40 hover:text-primary-foreground/60 transition-colors">
            Pinterest
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
