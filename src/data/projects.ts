export type ProjectSummary = {
  id: number;
  title: string;
  category: string;
  location: string;
  area: string;
  year: string;
  image: string;
  description: string;
  tags: string[];
};

export const projects: ProjectSummary[] = [
  {
    id: 1,
    title: "Ayurvedic Medical College, Baramati",
    category: "Auditorium Acoustics",
    location: "Baramati, Maharashtra",
    area: "350-seater auditorium",
    year: "2024",
    image: "/projects/01/01-ACB-01.jpg",
    description:
      "350-seater Ayurvedic Medical College auditorium finished with Anutone Slat Surco Lite, Stretch Hush, Rosetta carpet, and Polywool acoustic treatments.",
    tags: ["Auditorium", "Acoustic", "Carpet"],
  },
  {
    id: 2,
    title: "Southern Star Auditorium, Camp",
    category: "Auditorium Acoustics",
    location: "Pune, Maharashtra",
    area: "600-seater auditorium",
    year: "2024",
    image: "/projects/02/02-01.jpg",
    description:
      "600-seater Southern Star Auditorium with Anutone Slat Surco Lite, Hush Panel, Matt Ebony, Ebony, Sisoli Serene, and Astral Lay-in metal ceiling finishes.",
    tags: ["Auditorium", "Acoustic", "Metal Ceiling"],
  },
  {
    id: 3,
    title: "KIMS-UAIMS Hospital, Sangli",
    category: "Acoustic Ceilings",
    location: "Sangli, Maharashtra",
    area: "Acoustic baffle ceiling",
    year: "2024",
    image: "/projects/03/03-01.jpg",
    description:
      "Custom 30mm PET acoustic baffle ceiling for KIMS-UAIMS Hospital, Sangli, delivering controlled reverberation in clinical spaces.",
    tags: ["Healthcare", "Acoustic Ceiling", "Baffles"],
  },
  {
    id: 4,
    title: "Corporate Headquarters Renovation",
    category: "Full Service",
    location: "Pune, Maharashtra",
    area: "60,000 sq ft",
    year: "2023",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    description:
      "Complete renovation including HVAC upgrade, acoustic panels, and insulation for a premium corporate headquarters.",
    tags: ["Commercial", "Renovation", "Full Service"],
  },
  {
    id: 5,
    title: "Hospital HVAC & Acoustic Solutions",
    category: "Healthcare",
    location: "Kolhapur, Maharashtra",
    area: "80,000 sq ft",
    year: "2023",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80",
    description:
      "Specialized HVAC and acoustic systems for healthcare facility with stringent air quality and noise control requirements.",
    tags: ["Healthcare", "HVAC", "Acoustic"],
  },
  {
    id: 6,
    title: "Luxury Residential Complex",
    category: "Residential",
    location: "Pune, Maharashtra",
    area: "120,000 sq ft",
    year: "2022",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
    description:
      "Premium HVAC and insulation services for high-end residential towers with individual climate control systems.",
    tags: ["Residential", "HVAC", "Insulation"],
  },
  {
    id: 7,
    title: "Data Center Cooling Solution",
    category: "Specialized HVAC",
    location: "Pune, Maharashtra",
    area: "30,000 sq ft",
    year: "2024",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    description:
      "High-precision cooling systems for mission-critical data center with redundant HVAC infrastructure.",
    tags: ["Data Center", "HVAC", "Cooling"],
  },
  {
    id: 8,
    title: "Recording Studio Acoustic Design",
    category: "Acoustic Engineering",
    location: "Sangli, Maharashtra",
    area: "5,000 sq ft",
    year: "2023",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&q=80",
    description:
      "Professional acoustic treatment for recording studios with isolation rooms and control rooms.",
    tags: ["Entertainment", "Acoustic", "Specialized"],
  },
  {
    id: 9,
    title: "Shopping Mall Climate Control",
    category: "Commercial HVAC",
    location: "Pune, Maharashtra",
    area: "200,000 sq ft",
    year: "2022",
    image: "https://images.unsplash.com/photo-1519642918688-7e43b19245d8?w=800&q=80",
    description:
      "Large-scale HVAC and ventilation system for multi-level shopping complex with variable occupancy zones.",
    tags: ["Retail", "HVAC", "Large Scale"],
  },
];
