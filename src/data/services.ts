// Shared by the Services page and the footer's service side panel,
// so both always show the same wording.
export interface Service {
  id: string;
  title: string;
  // "a" or "an" before the title, for "Book a Procurement consultation"
  article: "a" | "an";
  desc: string;
}

export const services: Service[] = [
  {
    id: "interior-design",
    title: "Interior Design",
    article: "an",
    desc: "Our Interior Design Studio offers a highly personalised service, designing beautifully crafted interiors that reflect each client's individual style and aspirations. Working closely with you throughout the design process, we ensure that every detail is considered and tailored to create a home that truly resonates with you. From conceptual design through to the final touches, our dedicated team harmonises comfort, elegance, and functionality. The result is a thoughtfully curated space where luxury and personal style converge.",
  },
  {
    id: "spatial-planning",
    title: "Spatial Planning",
    article: "a",
    desc: "Strategic analysis of flow, proportion, and function lies at the heart of our approach. We optimise layouts to support how you move through and use your space, informed by behavioural insight and architectural understanding. Whether working on a contemporary residence or a traditional home, our focus is on crafting spaces that balance luxurious aesthetics with everyday functionality. We create homes that are timeless and deeply personal, embodying a refined elegance while enhancing the way you live.",
  },
  {
    id: "ffe-design",
    title: "FF&E Design",
    article: "an",
    desc: "Our FF&E Design team expertly blends fabrics, finishes, and furnishings to create bespoke schemes that are meticulously tailored to your project. Every element, from the design of custom furniture to the selection of fine materials, is chosen with care to align with your personal aesthetic. We are committed to delivering harmonious interiors where every detail contributes to the overall sense of sophistication and comfort. The result is a space that feels effortlessly refined yet inviting.",
  },
  {
    id: "procurement",
    title: "Procurement",
    article: "a",
    desc: "Our Procurement Service offers a comprehensive and seamless experience, sourcing the finest materials, furnishings, and accessories from a trusted global network of suppliers. We oversee every stage of the procurement process, ensuring that each element is delivered to the highest standard and perfectly aligned with the design vision. From managing orders to coordinating logistics, our team handles the entire journey with precision, guaranteeing a smooth process from selection through to delivery.",
  },
  {
    id: "delivery-installation",
    title: "Delivery & Installation",
    article: "a",
    desc: "Our Delivery and Installation Service ensures that every piece, from the largest architectural element to the smallest decorative accessory, is installed with care and attention to detail. With meticulous planning and coordination, we ensure that the entire process is smooth and efficient, leaving your home perfectly dressed and ready to enjoy. Our team of experts oversee every aspect of installation, ensuring that each piece is positioned and styled to enhance the overall design, completing the transformation of your space with precision.",
  },
];
