// ---------------------------------------------------------------------------
// Portfolio data — update names, descriptions, and image imports here
// when real images are ready.
// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------
// Corporate image imports — Dermatome Skin Clinic
// ---------------------------------------------------------------------------
import dermatomeReception from "@/assets/corporate/dermatome/dermatome-reception.jpg";
import dermatomeWaitingArea from "@/assets/corporate/dermatome/dermatome-waiting-area.jpg";
import dermatomeConsultationRoom from "@/assets/corporate/dermatome/dermatome-consultation-room.jpg";
import dermatomeExaminationRoom from "@/assets/corporate/dermatome/dermatome-examination-room.jpg";
import dermatomeExaminationRoom2 from "@/assets/corporate/dermatome/dermatome-examination-room-2.jpg";
import dermatomePlaceholder from "@/assets/corporate/dermatome/dermatome-placeholder.jpg";

// ---------------------------------------------------------------------------
// Render image imports — Bedrooms
// ---------------------------------------------------------------------------
import renderBedroomI    from "@/assets/renders/bedrooms/render-bedroom-i.jpg";
import renderBedroomII   from "@/assets/renders/bedrooms/render-bedroom-ii.jpg";
import renderBedroomIII  from "@/assets/renders/bedrooms/render-bedroom-iii.jpg";
import renderBedroomIV   from "@/assets/renders/bedrooms/render-bedroom-iv.jpg";
import renderBedroomV    from "@/assets/renders/bedrooms/render-bedroom-v.jpg";
import renderBedroomVI   from "@/assets/renders/bedrooms/render-bedroom-vi.jpg";
import renderBedroomVII  from "@/assets/renders/bedrooms/render-bedroom-vii.jpg";
import renderBedroomVIII from "@/assets/renders/bedrooms/render-bedroom-viii.jpg";
import renderBedroomIX   from "@/assets/renders/bedrooms/render-bedroom-ix.jpg";

// ---------------------------------------------------------------------------
// Residential image imports — Lounges / Living Areas
// ---------------------------------------------------------------------------
import loungeHavenI      from "@/assets/residential/lounges/lounge-haven-i.jpg";
import loungeHavenII     from "@/assets/residential/lounges/lounge-haven-ii.jpg";
import loungeGrandeurI   from "@/assets/residential/lounges/lounge-grandeur-i.jpg";
import loungeGrandeurII  from "@/assets/residential/lounges/lounge-grandeur-ii.jpg";
import loungeManorI      from "@/assets/residential/lounges/lounge-manor-i.jpg";
import loungeManorII     from "@/assets/residential/lounges/lounge-manor-ii.jpg";
import loungeLakefrontI  from "@/assets/residential/lounges/lounge-lakefront-i.jpg";
import loungeLakefrontII from "@/assets/residential/lounges/lounge-lakefront-ii.jpg";

// ---------------------------------------------------------------------------
// Residential image imports — Bathrooms
// ---------------------------------------------------------------------------
import bathroomManorI from "@/assets/residential/bathrooms/bathroom-manor-i.jpg";

// ---------------------------------------------------------------------------
// Render image imports — Bathrooms
// ---------------------------------------------------------------------------
import renderBathroomI   from "@/assets/renders/bathrooms/render-bathroom-i.jpg";
import renderBathroomII  from "@/assets/renders/bathrooms/render-bathroom-ii.jpg";
import renderBathroomIII from "@/assets/renders/bathrooms/render-bathroom-iii.jpg";
import renderBathroomIV  from "@/assets/renders/bathrooms/render-bathroom-iv.jpg";

// ---------------------------------------------------------------------------
// Residential image imports — Dressing / Walk-In Closets
// ---------------------------------------------------------------------------
import walkInClosetManorI  from "@/assets/residential/dressing/walk-in-closet-manor-i.jpg";
import walkInClosetManorII from "@/assets/residential/dressing/walk-in-closet-manor-ii.jpg";

// ---------------------------------------------------------------------------
// Residential image imports — Bedrooms
// ---------------------------------------------------------------------------
import bedroomMasterLakefrontI   from "@/assets/residential/bedrooms/bedroom-master-lakefront-i.jpg";
import bedroomMasterLakefrontII  from "@/assets/residential/bedrooms/bedroom-master-lakefront-ii.jpg";
import bedroomMasterLakefrontIII from "@/assets/residential/bedrooms/bedroom-master-lakefront-iii.jpg";
import bedroomHavenI             from "@/assets/residential/bedrooms/bedroom-haven-i.jpg";
import bedroomHavenII            from "@/assets/residential/bedrooms/bedroom-haven-ii.jpg";
import bedroomHavenIII           from "@/assets/residential/bedrooms/bedroom-haven-iii.jpg";
import bedroomSuiteManorI        from "@/assets/residential/bedrooms/bedroom-suite-manor-i.jpg";
import bedroomSuiteManorII       from "@/assets/residential/bedrooms/bedroom-suite-manor-ii.jpg";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------
export type Tone = "tone-a" | "tone-b" | "tone-c";

export interface Project {
  key: string;
  name: string;
  loc: string;
  desc: string;
}

export interface Room {
  cat: string;
  room: string;
  projectKey: string;
  tone: Tone;
  scene: string;
  /** Set to an imported image src once real photos are available */
  image?: string;
}

export interface Render {
  cat: string;
  title: string;
  tone: Tone;
  scene: string;
  image: string;
}

export interface CorporateSpace {
  room: string;
  tone: Tone;
  scene: string;
  /** Brief detail line shown on the card overlay */
  detail: string;
  /** Set to an imported image src once real photos are available */
  image?: string;
}

export interface Company {
  name: string;
  sub: string;
  loc: string;
  intro: string;
  spaces: CorporateSpace[];
}

// ---------------------------------------------------------------------------
// Residential projects
// ---------------------------------------------------------------------------
export const projects: Record<string, Project> = {
  manor: {
    key: "manor",
    name: "Luxe, Modern Manor",
    loc: "Makindye, Uganda",
    desc: "Architecturally rich spaces brought to a quiet register — balancing grandeur with comfort through softness, scale and rhythm, so the rooms feel refined without ever becoming rigid.",
  },
  grandeur: {
    key: "grandeur",
    name: "Softened Grandeur",
    loc: "Bulindo, Uganda",
    desc: "Sophisticated, inviting and timeless. Warmth, texture and glow layer together so the home holds presence while remaining cohesive and calm.",
  },
  lakefront: {
    key: "lakefront",
    name: "Lake Front Tranquility",
    loc: "Serena Heights, Uganda",
    desc: "Inspired by the quiet stillness of Lake Victoria — muted aqua tones, warm neutrals and fluid textures combine into a home that feels composed, airy and deeply restorative.",
  },
  diva: {
    key: "diva",
    name: "Morning Light Diva",
    loc: "Buwate, Uganda",
    desc: "A dressing space shaped through warmth, symmetry and quiet organisation — designed to make the everyday routine feel calmer and more composed.",
  },
  haven: {
    key: "haven",
    name: "Modern Haven",
    loc: "Tlokweng, Botswana",
    desc: "Smaller footprint, stronger experience. A carefully balanced composition designed to make compact living feel intentional, fluid and elevated.",
  },
};

// ---------------------------------------------------------------------------
// Residential rooms (filter categories)
// ---------------------------------------------------------------------------
export const rooms: Room[] = [
  // Lounges — 8 real images distributed across 4 projects
  { cat: "lounges", room: "Lounge",          projectKey: "haven",     tone: "tone-a", scene: "Sectional sofa · curtain glow",       image: loungeHavenI },
  { cat: "lounges", room: "Lounge II",       projectKey: "haven",     tone: "tone-b", scene: "Open plan · soft furnishings",        image: loungeHavenII },
  { cat: "lounges", room: "Living Room",     projectKey: "grandeur",  tone: "tone-b", scene: "Leather suite · feature wall",        image: loungeGrandeurI },
  { cat: "lounges", room: "Living Room II",  projectKey: "grandeur",  tone: "tone-c", scene: "Warm tones · layered textiles",       image: loungeGrandeurII },
  { cat: "lounges", room: "Sitting Room",    projectKey: "manor",     tone: "tone-c", scene: "Armchairs · arc floor lamp",          image: loungeManorI },
  { cat: "lounges", room: "Sitting Room II", projectKey: "manor",     tone: "tone-a", scene: "Statement sofa · curated objects",    image: loungeManorII },
  { cat: "lounges", room: "Open Lounge",     projectKey: "lakefront", tone: "tone-a", scene: "Tufted seating · plants",             image: loungeLakefrontI },
  { cat: "lounges", room: "Open Lounge II",  projectKey: "lakefront", tone: "tone-b", scene: "Airy palette · lake-inspired calm",   image: loungeLakefrontII },

  // Bedrooms — 8 real images distributed across 3 projects
  { cat: "bedrooms",  room: "Master Bedroom",    projectKey: "lakefront", tone: "tone-b", scene: "Aqua drapes · soft neutrals",         image: bedroomMasterLakefrontI },
  { cat: "bedrooms",  room: "Master Bedroom II",  projectKey: "lakefront", tone: "tone-c", scene: "Layered textiles · serene palette",    image: bedroomMasterLakefrontII },
  { cat: "bedrooms",  room: "Master Bedroom III", projectKey: "lakefront", tone: "tone-a", scene: "Morning light · calm materiality",     image: bedroomMasterLakefrontIII },
  { cat: "bedrooms",  room: "Bedroom",            projectKey: "haven",     tone: "tone-c", scene: "Channel headboard · twin lamps",       image: bedroomHavenI },
  { cat: "bedrooms",  room: "Bedroom II",         projectKey: "haven",     tone: "tone-a", scene: "Warm tones · considered joinery",      image: bedroomHavenII },
  { cat: "bedrooms",  room: "Bedroom III",        projectKey: "haven",     tone: "tone-b", scene: "Soft drapes · ambient glow",           image: bedroomHavenIII },
  { cat: "bedrooms",  room: "Bedroom Suite",      projectKey: "manor",     tone: "tone-a", scene: "Fluted wall · brass detail",           image: bedroomSuiteManorI },
  { cat: "bedrooms",  room: "Bedroom Suite II",   projectKey: "manor",     tone: "tone-b", scene: "Grand proportions · layered luxury",   image: bedroomSuiteManorII },

  // Kitchens
  { cat: "kitchens",  room: "Kitchen",       projectKey: "haven",     tone: "tone-b", scene: "Breakfast bar · velvet stools" },
  { cat: "kitchens",  room: "Kitchen",       projectKey: "grandeur",  tone: "tone-c", scene: "Stone counters · warm wood" },

  // Bathrooms
  { cat: "bathrooms", room: "Ensuite",  projectKey: "manor",     tone: "tone-a", scene: "Vanity · backlit mirror",  image: bathroomManorI },
  { cat: "bathrooms", room: "Bathroom", projectKey: "lakefront", tone: "tone-b", scene: "Marble · soft lighting" },

  // Dining
  { cat: "dining",    room: "Dining Room",   projectKey: "grandeur",  tone: "tone-c", scene: "Dark table · sheer curtains" },
  { cat: "dining",    room: "Formal Dining", projectKey: "manor",     tone: "tone-a", scene: "Carved chairs · gold accents" },
  { cat: "dining",    room: "Dining",        projectKey: "lakefront", tone: "tone-b", scene: "Lantern pendants · serene" },

  // Dressing
  { cat: "dressing",  room: "Her Space",      projectKey: "diva",  tone: "tone-c", scene: "Symmetrical wardrobe · ottoman" },
  { cat: "dressing",  room: "Walk-In Closet", projectKey: "manor", tone: "tone-a", scene: "Joinery · dressing bench",        image: walkInClosetManorI },
  { cat: "dressing",  room: "Walk-In Closet II", projectKey: "manor", tone: "tone-b", scene: "Brass rail · considered storage", image: walkInClosetManorII },
];

export const resFilters = [
  { id: "all",       label: "All Spaces" },
  { id: "lounges",   label: "Lounges" },
  { id: "bedrooms",  label: "Bedrooms" },
  { id: "kitchens",  label: "Kitchens" },
  { id: "bathrooms", label: "Bathrooms" },
  { id: "dining",    label: "Dining" },
  { id: "dressing",  label: "Dressing" },
];

// ---------------------------------------------------------------------------
// Corporate clients
// ---------------------------------------------------------------------------
export const companies: Company[] = [
  {
    name: "Dermatome Skin Clinic",
    sub: "Aesthetic & dermatology practice",
    loc: "Gaborone, Botswana",
    intro: "A clinical environment designed to instil calm before the first appointment begins. Soft materiality, considered lighting and deliberate spatial flow ensure every patient feels at ease — from arrival through to treatment.",
    spaces: [
      {
        room: "Reception",
        tone: "tone-a",
        scene: "Front desk · branded presence",
        detail: "The first point of contact — composed to project quiet confidence and warmth.",
        image: dermatomeReception,
      },
      {
        room: "Waiting Area",
        tone: "tone-b",
        scene: "Lounge seating · soft textiles · ambient light",
        detail: "Designed to reduce pre-appointment anxiety through material softness and measured calm.",
        image: dermatomeWaitingArea,
      },
      {
        room: "Consultation Room",
        tone: "tone-c",
        scene: "Clinical desk · neutral palette · considered proportions",
        detail: "A space that balances clinical clarity with the warmth needed for open conversation.",
        image: dermatomeConsultationRoom,
      },
      {
        room: "Examination Room",
        tone: "tone-a",
        scene: "Procedure lighting · clean lines · hygienic materiality",
        detail: "Precision and cleanliness without sterility — function dressed in refined restraint.",
        image: dermatomeExaminationRoom,
      },
      {
        room: "Examination Room II",
        tone: "tone-b",
        scene: "Treatment zone · cabinetry · backlit niche",
        detail: "A secondary treatment space maintaining the same standard of composed, clinical elegance.",
        image: dermatomeExaminationRoom2,
      },
      {
        room: "Skin Bar",
        tone: "tone-c",
        scene: "Product display · soft lighting · branded retail",
        detail: "A curated retail touchpoint — where clinical expertise meets considered product presentation.",
        image: dermatomePlaceholder,
      },
    ],
  },
  {
    name: "Apex",
    sub: "Corporate office",
    loc: "Gaborone, Botswana",
    intro: "A corporate environment composed for focus, collaboration and presence — reception through to executive suite.",
    spaces: [
      { room: "Reception",        tone: "tone-b", scene: "Front desk · branded wall",    detail: "A first impression built on presence and precision." },
      { room: "Boardroom",        tone: "tone-c", scene: "Long table · pendant run",      detail: "Commanding proportions designed for decisive meetings." },
      { room: "Executive Office", tone: "tone-a", scene: "Desk · lounge corner",          detail: "Private, refined — a space that matches executive clarity." },
      { room: "Breakout Lounge",  tone: "tone-b", scene: "Soft seating · coffee bar",     detail: "Informal collaboration framed in comfort and ease." },
    ],
  },
];

// ---------------------------------------------------------------------------
// Renders — visualisations by room category
// ---------------------------------------------------------------------------
export const renderFilters = [
  { id: "all",       label: "All" },
  { id: "bedrooms",  label: "Bedrooms" },
  { id: "bathrooms", label: "Bathrooms" },
];

export const renders: Render[] = [
  { cat: "bedrooms", title: "Bedroom Render I",    tone: "tone-a", scene: "Soft palette · layered textiles",       image: renderBedroomI },
  { cat: "bedrooms", title: "Bedroom Render II",   tone: "tone-b", scene: "Warm tones · considered proportions",   image: renderBedroomII },
  { cat: "bedrooms", title: "Bedroom Render III",  tone: "tone-c", scene: "Calm neutrals · ambient glow",          image: renderBedroomIII },
  { cat: "bedrooms", title: "Bedroom Render IV",   tone: "tone-a", scene: "Feature wall · morning light",          image: renderBedroomIV },
  { cat: "bedrooms", title: "Bedroom Render V",    tone: "tone-b", scene: "Sculptural headboard · soft drapes",    image: renderBedroomV },
  { cat: "bedrooms", title: "Bedroom Render VI",   tone: "tone-c", scene: "Brass accents · linen tones",           image: renderBedroomVI },
  { cat: "bedrooms", title: "Bedroom Render VII",  tone: "tone-a", scene: "Joinery · restrained luxury",           image: renderBedroomVII },
  { cat: "bedrooms", title: "Bedroom Render VIII", tone: "tone-b", scene: "Fluted panels · warm lighting",         image: renderBedroomVIII },
  { cat: "bedrooms", title: "Bedroom Render IX",   tone: "tone-c", scene: "Serene composition · layered depth",    image: renderBedroomIX },

  // Bathrooms
  { cat: "bathrooms", title: "Bathroom Render I",   tone: "tone-a", scene: "Marble surfaces · clean lines",         image: renderBathroomI },
  { cat: "bathrooms", title: "Bathroom Render II",  tone: "tone-b", scene: "Soft lighting · considered fixtures",   image: renderBathroomII },
  { cat: "bathrooms", title: "Bathroom Render III", tone: "tone-c", scene: "Warm stone · backlit niche",            image: renderBathroomIII },
  { cat: "bathrooms", title: "Bathroom Render IV",  tone: "tone-a", scene: "Freestanding bath · calm palette",      image: renderBathroomIV },
];
