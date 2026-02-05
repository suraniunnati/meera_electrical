
export const products = [
 {
  id: 1,
  name: "Jaw Crusher (500 × 750)",
  category: "Crushing Machines",
  description: "Heavy-duty jaw crusher designed for primary crushing of stone, rock, and ore in mining, quarrying, and construction applications.",
  image: "automatic-slitting-rewinding-machine-industrial.jpg",
  specifications: [
    "Feed Opening: 500 × 750 mm",
    "Max Feeding Size: 425 mm",
    "Output Size: 50–100 mm",
    "Capacity: 40–130 TPH",
    "Power: 55 kW",
    "Weight: 9 Ton"
  ],
  featured: true
},
 {
  id: 2,
  name: "Vibrating Screen Machine (2YK1848)",
  category: "Screening Machines",
  description: "High-performance vibrating screen machine designed for efficient screening and separation of materials in mining, quarrying, and aggregate processing plants.",
  image: "vibrating-screen-machine-2yk1848.jpg",
  specifications: [
    "Model: 2YK1848",
    "Screen Layers: 2",
    "Sieve Mesh Size: 3–100 mm",
    "Screen Size: 1800 × 4800 mm",
    "Max Feeding Size: 400 mm",
    "Capacity: 56–330 TPH",
    "Power: 18.5 kW"
  ],
  featured: false
},
 {
  id: 3,
  name: "Briquetting Machine",
  category: "Briquetting Machines",
  description: "High-capacity briquetting machine designed for compressing powder and fine materials into solid briquettes for fuel, metallurgy, and industrial applications.",
  image: "briquetting-machine-industrial.jpg",
  specifications: [
    "Capacity: 18–20 TPH",
    "Pressing Roll Diameter: 750 mm",
    "Pressing Roll Width: 400 mm",
    "Speed Reducer: ZQ750 / ZQ850",
    "Main Shaft Speed: 10–13 r/min",
    "Motor Power: 37–55 kW (4 Pole)",
    "Machine Size: 2260 × 2640 × 1750 mm"
  ],
  featured: false
}
,
  {
  id: 4,
  name: "Mobile Crushing Plant",
  category: "Mobile Crushing Machines",
  description: "Flexible and efficient mobile crushing plant designed for on-site crushing of stone, rock, and construction waste, offering easy transportation and quick setup.",
  image: "mobile-crushing-plant-industrial.jpg",
  specifications: [
    "Type: Mobile Crushing Plant",
    "Mobility: Wheel / Track Mounted",
    "Application: Stone, Rock & Construction Waste",
    "Operation: On-site Crushing",
    "Features: Easy Transportation & Quick Installation",
    "Usage: Mining, Quarrying & Construction"
  ],
  featured: true
}
,
  {
  id: 5,
  name: "8 Color Inline Printing Machine",
  category: "Printing Machines",
  description: "High-speed 8 color inline printing machine designed for precise and continuous printing on paper materials, delivering excellent color registration, stable performance, and high production efficiency.",
  image: "8-color-inline-printing-machine.jpg",
  specifications: [
    "Printing Colors: 8 Color",
    "Max Machine Speed: 150 m/min",
    "Max Paper Width: 450 mm",
    "Max Printing Width: 440 mm",
    "Print Length: 191–635 mm",
    "Plate Thickness: 1.14 mm",
    "Tape Thickness: 0.38 mm",
    "Max Unwinding Diameter: 1000 mm (Customizable)",
    "Max Rewinding Diameter: 1000 mm (Customizable)",
    "Overprint Precision: ±0.2 mm",
    "Voltage: 380V, 3 Phase, 50Hz, 4 Wire",
    "Overall Dimensions: 10.0 × 1.8 × 1.3 m (L×W×H)",
    "Weight: Approx. 9500 kg"
  ],
  featured: true
}
,
 {
  id: 6,
  name: "Automatic Die Cutting Machine",
  category: "Cutting Machines",
  description: "High-precision automatic die cutting machine designed for accurate and high-speed cutting of labels, paper, and packaging materials with stable performance and easy operation.",
  image: "automatic-die-cutting-machine.jpg",
  specifications: [
    "Cutting Speed: 10–300 times/min",
    "Max Unwinding Diameter: 650 mm",
    "Max Web Width: 440 mm",
    "Max Die-Cut Length: 440 mm",
    "Position Accuracy: ±0.1 mm",
    "Total Power: 3.0 kW",
    "Power Voltage: 380V, 3 Phase",
    "Overall Dimensions: 3000 × 1400 × 1450 mm",
    "Weight: Approx. 2500 kg"
  ],
  featured: false
}
,
  {
  id: 7,
  name: "Slitting and Rewinding Machine",
  category: "Slitting Machines",
  description: "Compact and efficient slitting and rewinding machine designed for precise cutting of paper, film, and flexible materials with stable operation and high accuracy.",
  image: "slitting-rewinding-machine-industrial.jpg",
  specifications: [
    "Cutting Speed: 5–120 m/min",
    "Max Web Width: 450 mm",
    "Max Unwinding Diameter: 500 mm",
    "Max Rewinding Diameter: 500 mm",
    "Minimum Slitting Width: 20 mm",
    "Slitting Precision: ±0.5 mm",
    "Main Motor Power: 1.5 kW",
    "Overall Dimensions: 1150 × 1120 × 1350 mm",
    "Weight: Approx. 540 kg"
  ],
  featured: false
}
,
  {
  id: 8,
  name: "Crawler Mobile Crushing Station",
  category: "Mobile Crushing Machines",
  description: "High-efficiency crawler mobile crushing station designed for on-site crushing operations. Equipped with a self-propelled crawler system, it delivers excellent mobility, strong power output, and stable performance across complex terrains.",
  image: "crawler-mobile-crushing-station.jpg",
  specifications: [
    "Feeder Bucket Capacity: 3 m³",
    "Max Feeding Size: 600 mm",
    "Engine Power: 365–420 kW",
    "Crushing Ratio: Large crushing ratio with high productivity",
    "Finished Product: Uniform and consistent particle size",
    "Mobility: Self-driven crawler system for complex terrain"
  ],
  advantages: [
    "Reduces material handling requirements",
    "Improves coordination with auxiliary equipment",
    "Optimized structure for demanding crushing applications",
    "Stable operation with high throughput"
  ],
  featured: true
}

];

export const categories = Array.from(new Set(products.map(p => p.category)));
