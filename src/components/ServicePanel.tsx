import { useEffect, useRef, useState } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Link } from "react-router-dom";
import { X } from "lucide-react";
import { Sheet, SheetDescription, SheetOverlay, SheetPortal, SheetTitle } from "@/components/ui/sheet";
import { services } from "@/data/services";

interface ServicePanelProps {
  serviceId: string | null;
  onSelect: (id: string | null) => void;
}

// Side panel opened from the footer's service list: one service at a time,
// with a consultation call to action and the other services one click away.
const ServicePanel = ({ serviceId, onSelect }: ServicePanelProps) => {
  // Keep showing the last service while the panel slides out after closing
  const [shownId, setShownId] = useState(serviceId);
  if (serviceId && serviceId !== shownId) setShownId(serviceId);
  const index = services.findIndex((s) => s.id === shownId);
  const service = services[index];

  // Switching service from the "Other services" list starts the panel at the top,
  // with focus on the new title (the clicked button leaves the list)
  const contentRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const switched = useRef(false);
  useEffect(() => {
    contentRef.current?.scrollTo(0, 0);
    if (switched.current) titleRef.current?.focus();
    switched.current = false;
  }, [serviceId]);

  return (
    <Sheet open={!!serviceId} onOpenChange={(open) => !open && onSelect(null)}>
      <SheetPortal>
        <SheetOverlay className="bg-charcoal/40" />
        <DialogPrimitive.Content ref={contentRef} className="fixed inset-y-0 right-0 z-50 h-full w-full sm:max-w-md bg-background border-l border-border shadow-2xl overflow-y-auto data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right data-[state=closed]:duration-300 data-[state=open]:duration-500 focus:outline-none">
          {service && (
            <div className="flex min-h-full flex-col">
              {/* Number + bronze rule, echoing the service cards on /services */}
              <div className="relative bg-secondary/40 px-8 pt-16 pb-10 border-b border-border">
                <span className="font-serif text-8xl leading-none text-bronze/30 select-none" aria-hidden="true">
                  0{index + 1}
                </span>
                <p className="mt-6 font-sans text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
                  Service {index + 1} of {services.length}
                </p>
                <SheetTitle ref={titleRef} tabIndex={-1} className="mt-3 focus:outline-none font-serif text-3xl font-normal leading-tight text-foreground">
                  {service.title}
                </SheetTitle>
                <div className="absolute bottom-0 left-0 h-px w-24 bg-bronze" />
              </div>

              <div className="flex-1 px-8 py-8">
                <SheetDescription className="text-base leading-relaxed text-muted-foreground">
                  {service.desc}
                </SheetDescription>

                <Link
                  to="/contact"
                  onClick={() => onSelect(null)}
                  className="mt-10 block bg-bronze px-6 py-4 text-center font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-white transition-colors duration-300 hover:bg-terracotta focus:outline-none focus-visible:ring-2 focus-visible:ring-bronze focus-visible:ring-offset-2"
                >
                  Book {service.article} {service.title} consultation
                </Link>
              </div>

              <nav aria-label="Other services" className="border-t border-border px-8 py-8">
                <p className="mb-4 font-sans text-[10px] tracking-[0.3em] uppercase text-muted-foreground">Other services</p>
                <ul className="space-y-1">
                  {services.map((s, i) =>
                    s.id === service.id ? null : (
                      <li key={s.id}>
                        <button
                          type="button"
                          onClick={() => {
                            switched.current = true;
                            onSelect(s.id);
                          }}
                          className="group flex w-full items-baseline gap-4 py-2 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-bronze"
                        >
                          <span className="w-6 font-serif text-sm text-bronze/50">0{i + 1}</span>
                          <span className="font-serif text-lg text-foreground transition-colors group-hover:text-bronze">{s.title}</span>
                        </button>
                      </li>
                    ),
                  )}
                </ul>
              </nav>
            </div>
          )}
          <DialogPrimitive.Close className="absolute right-6 top-6 p-1 text-muted-foreground transition-colors hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-bronze">
            <X className="h-5 w-5" />
            <span className="sr-only">Close</span>
          </DialogPrimitive.Close>
        </DialogPrimitive.Content>
      </SheetPortal>
    </Sheet>
  );
};

export default ServicePanel;
