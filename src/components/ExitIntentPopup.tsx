import { useState, useEffect } from "react";
import { X, Instagram, Linkedin, Facebook, Mail, MessageCircle } from "lucide-react";

const ExitIntentPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Check if already shown in this session
    if (sessionStorage.getItem("exitIntentShown")) {
      return;
    }

    let mouseY = 0;
    let mouseX = 0;
    
    const handleMouseMove = (e: MouseEvent) => {
      mouseY = e.clientY;
      mouseX = e.clientX;
      
      // Trigger when mouse moves to top 20px of screen (intent to leave)
      // and hasn't been shown yet
      if (mouseY < 20 && !hasShown && mouseX > 0 && mouseX < window.innerWidth) {
        setIsVisible(true);
        setHasShown(true);
        sessionStorage.setItem("exitIntentShown", "true");
      }
    };

    // Also handle beforeunload for tab close
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (!hasShown) {
        // Modern browsers limit what we can do here, but we can set a flag
        sessionStorage.setItem("exitIntentTriggered", "true");
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [hasShown]);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-foreground/40 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="relative bg-background max-w-md w-full border border-border p-8 lg:p-10 shadow-2xl">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Close popup"
        >
          <X size={20} />
        </button>

        {/* Content */}
        <div className="text-center">
          <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-terracotta mb-4">
            Before You Go
          </p>
          
          <h3 className="font-serif text-2xl lg:text-3xl text-foreground mb-4 leading-tight">
            Stay Connected with Naledi
          </h3>
          
          <p className="text-muted-foreground text-sm mb-8 leading-relaxed">
            Follow our journey and be the first to see our latest interior design projects, behind-the-scenes stories, and exclusive inspiration.
          </p>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-8">
            <a
              href="https://instagram.com/naledinteriors"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 text-muted-foreground hover:text-terracotta transition-colors group"
            >
              <div className="w-12 h-12 border border-border flex items-center justify-center group-hover:border-terracotta transition-colors">
                <Instagram size={20} />
              </div>
              <span className="text-[10px] tracking-wider uppercase">Instagram</span>
            </a>
            
            <a
              href="https://linkedin.com/company/naledi-interiors"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 text-muted-foreground hover:text-terracotta transition-colors group"
            >
              <div className="w-12 h-12 border border-border flex items-center justify-center group-hover:border-terracotta transition-colors">
                <Linkedin size={20} />
              </div>
              <span className="text-[10px] tracking-wider uppercase">LinkedIn</span>
            </a>
            
            <a
              href="https://facebook.com/naledinteriors"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 text-muted-foreground hover:text-terracotta transition-colors group"
            >
              <div className="w-12 h-12 border border-border flex items-center justify-center group-hover:border-terracotta transition-colors">
                <Facebook size={20} />
              </div>
              <span className="text-[10px] tracking-wider uppercase">Facebook</span>
            </a>
            
            <a
              href="https://wa.me/26778172746"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 text-muted-foreground hover:text-terracotta transition-colors group"
            >
              <div className="w-12 h-12 border border-border flex items-center justify-center group-hover:border-terracotta transition-colors">
                <MessageCircle size={20} />
              </div>
              <span className="text-[10px] tracking-wider uppercase">WhatsApp</span>
            </a>
          </div>

          {/* Email option */}
          <a
            href="mailto:ni@naledi.com"
            className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-foreground hover:text-terracotta transition-colors border-b border-border hover:border-terracotta pb-1"
          >
            <Mail size={14} />
            Or send us an email
          </a>

          {/* No thanks */}
          <button
            onClick={handleClose}
            className="block mx-auto mt-6 text-[10px] tracking-wider uppercase text-muted-foreground hover:text-foreground transition-colors"
          >
            No thanks, I&apos;ll explore later
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExitIntentPopup;
