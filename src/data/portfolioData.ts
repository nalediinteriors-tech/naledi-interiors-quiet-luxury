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
  { cat: "lounges",   room: "Lounge",         projectKey: "haven",     tone: "tone-a", scene: "Sectional sofa · curtain glow" },
  { cat: "lounges",   room: "Living Room",     projectKey: "grandeur",  tone: "tone-b", scene: "Leather suite · feature wall" },
  { cat: "lounges",   room: "Sitting Room",    projectKey: "manor",     tone: "tone-c", scene: "Armchairs · arc floor lamp" },
  { cat: "lounges",   room: "Open Lounge",     projectKey: "lakefront", tone: "tone-a", scene: "Tufted seating · plants" },
  { cat: "bedrooms",  room: "Master Bedroom",  projectKey: "lakefront", tone: "tone-b", scene: "Aqua drapes · soft neutrals" },
  { cat: "bedrooms",  room: "Bedroom",         projectKey: "haven",     tone: "tone-c", scene: "Channel headboard · twin lamps" },
  { cat: "bedrooms",  room: "Bedroom Suite",   projectKey: "manor",     tone: "tone-a", scene: "Fluted wall · brass detail" },
  { cat: "kitchens",  room: "Kitchen",         projectKey: "haven",     tone: "tone-b", scene: "Breakfast bar · velvet stools" },
  { cat: "kitchens",  room: "Kitchen",         projectKey: "grandeur",  tone: "tone-c", scene: "Stone counters · warm wood" },
  { cat: "bathrooms", room: "Ensuite",         projectKey: "manor",     tone: "tone-a", scene: "Vanity · backlit mirror" },
  { cat: "bathrooms", room: "Bathroom",        projectKey: "lakefront", tone: "tone-b", scene: "Marble · soft lighting" },
  { cat: "dining",    room: "Dining Room",     projectKey: "grandeur",  tone: "tone-c", scene: "Dark table · sheer curtains" },
  { cat: "dining",    room: "Formal Dining",   projectKey: "manor",     tone: "tone-a", scene: "Carved chairs · gold accents" },
  { cat: "dining",    room: "Dining",          projectKey: "lakefront", tone: "tone-b", scene: "Lantern pendants · serene" },
  { cat: "dressing",  room: "Her Space",       projectKey: "diva",      tone: "tone-c", scene: "Symmetrical wardrobe · ottoman" },
  { cat: "dressing",  room: "Walk-In Closet",  projectKey: "manor",     tone: "tone-a", scene: "Joinery · dressing bench" },
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
      { room: "Reception",        tone: "tone-b", scene: "Front desk · branded wall",       detail: "A first impression built on presence and precision." },
      { room: "Boardroom",        tone: "tone-c", scene: "Long table · pendant run",         detail: "Commanding proportions designed for decisive meetings." },
      { room: "Executive Office", tone: "tone-a", scene: "Desk · lounge corner",             detail: "Private, refined — a space that matches executive clarity." },
      { room: "Breakout Lounge",  tone: "tone-b", scene: "Soft seating · coffee bar",        detail: "Informal collaboration framed in comfort and ease." },
    ],
  },
];
