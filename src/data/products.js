export const products = [
  {
    id: 1,
    name: "Industrial Motor 5HP",
    category: "Motors",
    description: "High-efficiency three-phase induction motor for industrial applications",
    image: "https://images.unsplash.com/photo-1581092918484-8313e1b2e0b7?w=800&q=80",
    specifications: ["5HP Power", "3-Phase", "1440 RPM", "IP55 Protection"],
    featured: true
  },
  {
    id: 2,
    name: "Circuit Breaker MCB",
    category: "Protection",
    description: "Miniature circuit breaker for overcurrent protection",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80",
    specifications: ["16A Rating", "C-Curve", "10kA Breaking", "Single Pole"],
    featured: true
  },
  {
    id: 3,
    name: "Distribution Panel",
    category: "Panels",
    description: "Heavy-duty electrical distribution panel for industrial use",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&q=80",
    specifications: ["12-Way", "IP65 Rated", "Metal Enclosure", "Din Rail"],
    featured: true
  },
  {
    id: 4,
    name: "Transformer 10KVA",
    category: "Transformers",
    description: "Step-down transformer for voltage conversion",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80",
    specifications: ["10KVA", "415V/230V", "Oil Cooled", "Copper Winding"],
    featured: false
  },
  {
    id: 5,
    name: "Cable Tray System",
    category: "Accessories",
    description: "Galvanized cable management system",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80",
    specifications: ["300mm Width", "HDG Finish", "3mm Thickness", "Modular"],
    featured: false
  },
  {
    id: 6,
    name: "Contactors 32A",
    category: "Controls",
    description: "Electromagnetic contactor for motor control",
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=800&q=80",
    specifications: ["32A Current", "3-Pole", "AC3 Duty", "Auxiliary Contacts"],
    featured: true
  }
];

export const categories = Array.from(new Set(products.map(p => p.category)));
