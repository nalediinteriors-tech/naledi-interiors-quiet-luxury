import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { MessageCircle } from "lucide-react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/contact", label: "Contact" },
];

const Navigation = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-4">
          {/* Heritage Seal - Circular badge with NI monogram */}
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Outer circle */}
            <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="1.5" className="text-foreground"/>
            {/* Inner circle */}
            <circle cx="24" cy="24" r="17" stroke="currentColor" strokeWidth="0.5" className="text-foreground/30"/>
            {/* NI Monogram */}
            <text x="24" y="29" textAnchor="middle" fontFamily="serif" fontSize="18" fontWeight="400" letterSpacing="3" fill="currentColor" className="text-foreground">NI</text>
          </svg>
          <div className="flex flex-col">
            <span className="font-serif text-lg tracking-[0.25em] uppercase text-foreground">Naledi</span>
            <span className="font-sans text-[10px] tracking-[0.35em] uppercase text-muted-foreground mt-1">Interiors</span>
          </div>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm tracking-[0.2em] uppercase transition-colors duration-300 ${
                location.pathname === link.to
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://wa.me/26773293302"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm tracking-[0.2em] uppercase text-terracotta hover:text-bronze transition-colors duration-300"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle size={16} />
            <span className="hidden lg:inline">WhatsApp</span>
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-foreground"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background border-t border-border px-6 py-8 space-y-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className="block text-sm tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://wa.me/26773293302"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
            className="flex items-center gap-2 text-sm tracking-[0.2em] uppercase text-terracotta hover:text-bronze transition-colors"
          >
            <MessageCircle size={16} />
            WhatsApp
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
