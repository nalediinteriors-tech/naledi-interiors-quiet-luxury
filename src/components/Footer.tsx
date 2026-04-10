import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h3 className="font-serif text-lg tracking-wider mb-4">NALEDI INTERIORS</h3>
          <p className="text-sm text-primary-foreground/60 leading-relaxed max-w-xs">
            Interior design guided by human behavior, intention, and refined execution.
          </p>
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
          <p className="text-sm text-primary-foreground/60 leading-relaxed">
            hello@nalediinteriors.com
          </p>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 mt-12 pt-8">
        <p className="text-xs text-primary-foreground/40">
          © {new Date().getFullYear()} Naledi Interiors. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
