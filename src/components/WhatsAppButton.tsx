import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

const WhatsAppButton = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const phoneNumber = "26773293302";
  const defaultMessage = "Hello, I'm interested in learning more about Naledi Interiors.";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {chatOpen && (
        <div className="bg-background border border-border shadow-lg w-[320px] animate-fade-in">
          <div className="bg-primary px-5 py-4 flex items-center justify-between">
            <div>
              <p className="text-primary-foreground text-sm font-medium">Naledi Interiors</p>
              <p className="text-primary-foreground/60 text-xs">Typically replies within an hour</p>
            </div>
            <button onClick={() => setChatOpen(false)} className="text-primary-foreground/60 hover:text-primary-foreground">
              <X size={16} />
            </button>
          </div>
          <div className="p-5">
            <div className="bg-secondary p-4 mb-4">
              <p className="text-sm text-foreground leading-relaxed">
                Welcome to Naledi Interiors. How can we assist you with your project?
              </p>
            </div>
            <a
              href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-[#25D366] text-primary-foreground text-xs tracking-[0.1em] uppercase px-6 py-3 hover:opacity-90 transition-opacity"
            >
              Start Chat on WhatsApp
            </a>
          </div>
        </div>
      )}
      <button
        onClick={() => setChatOpen(!chatOpen)}
        className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:opacity-90 transition-opacity"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={24} className="text-primary-foreground" />
      </button>
    </div>
  );
};

export default WhatsAppButton;
