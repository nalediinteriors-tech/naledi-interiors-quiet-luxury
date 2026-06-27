import React from "react";
import adobeIcon from "@/assets/logo/naledi-icon.png";

interface NalediLogoProps {
  className?: string;
  iconHeight?: number;
  /** Set true when logo is on a dark background — inverts the icon to white */
  dark?: boolean;
}

const NalediLogo: React.FC<NalediLogoProps> = ({ className = "", iconHeight = 56, dark = false }) => {
  return (
    <div className={`inline-flex flex-row items-center gap-2 ${className}`}>
      {/* Icon mark */}
      <img
        src={adobeIcon}
        alt=""
        aria-hidden="true"
        style={{
          height: iconHeight,
          width: "auto",
          display: "block",
          flexShrink: 0,
          filter: dark ? "invert(1)" : "none",
        }}
      />
      {/* NALEDI stacked above INTERIORS */}
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", lineHeight: 1 }}>
        <span
          className={`font-serif tracking-[0.25em] uppercase ${dark ? "text-white" : "text-foreground"}`}
          style={{ fontSize: iconHeight * 0.38, lineHeight: 1, display: "block" }}
        >
          Naledi
        </span>
        <span
          className="text-terracotta tracking-[0.35em] uppercase"
          style={{ fontSize: iconHeight * 0.22, lineHeight: 1, display: "block", marginTop: "0.15em", fontFamily: "sans-serif" }}
        >
          Interiors
        </span>
      </div>
    </div>
  );
};

export default NalediLogo;
