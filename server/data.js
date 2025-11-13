// Sample JSON Data for Universities

const universities = [
  {
    id: 1,
    name: "Global Tech University",
    overview: "Global Tech University is recognized for excellence in engineering, technology, and management education.",
    courses: [
      { name: "B.Tech CSE", duration: "4 Years" },
      { name: "B.Tech Mechanical", duration: "4 Years" },
      { name: "MBA", duration: "2 Years" }
    ],
    fees: { min: 120000, max: 250000 },
    placements: { average: "₹8 LPA", highest: "₹32 LPA" },
    facilities: ["WiFi Campus", "Library", "Sports Complex", "Hostel", "Labs"]
  },
  {
    id: 2,
    name: "Skyline International University",
    overview: "Skyline International University offers globally benchmarked programs in design and management.",
    courses: [
      { name: "BBA", duration: "3 Years" },
      { name: "MBA", duration: "2 Years" },
      { name: "B.Des", duration: "4 Years" }
    ],
    fees: { min: 100000, max: 180000 },
    placements: { average: "₹6 LPA", highest: "₹18 LPA" },
    facilities: ["Design Labs", "Library", "Cafeteria", "Hostel", "Gym"]
  },
  {
    id: 3,
    name: "Everest Engineering College",
    overview: "A pioneer in engineering education focused on innovation, sustainability, and research excellence.",
    courses: [
      { name: "B.Tech Civil", duration: "4 Years" },
      { name: "B.Tech Electrical", duration: "4 Years" },
      { name: "M.Tech Structural", duration: "2 Years" }
    ],
    fees: { min: 95000, max: 200000 },
    placements: { average: "₹5 LPA", highest: "₹15 LPA" },
    facilities: ["WiFi", "Library", "Workshop", "Labs", "Transport"]
  },
  {
    id: 4,
    name: "Riverside Business School",
    overview: "Riverside offers cutting-edge business programs that prepare students for the global corporate world.",
    courses: [
      { name: "BBA", duration: "3 Years" },
      { name: "MBA Finance", duration: "2 Years" },
      { name: "MBA Marketing", duration: "2 Years" }
    ],
    fees: { min: 150000, max: 280000 },
    placements: { average: "₹9 LPA", highest: "₹27 LPA" },
    facilities: ["Auditorium", "WiFi", "Library", "Hostel", "Gym"]
  },
  {
    id: 5,
    name: "Greenfield Agricultural University",
    overview: "Dedicated to sustainable agriculture research and technology-enabled farming education.",
    courses: [
      { name: "B.Sc Agriculture", duration: "4 Years" },
      { name: "M.Sc Agriculture", duration: "2 Years" },
      { name: "Agri-Business Management", duration: "2 Years" }
    ],
    fees: { min: 80000, max: 160000 },
    placements: { average: "₹4.5 LPA", highest: "₹14 LPA" },
    facilities: ["Farm Labs", "Greenhouses", "Library", "Hostel", "WiFi"]
  },
];

// Generate more dummy universities dynamically (up to 60)
for (let i = 6; i <= 60; i++) {
  universities.push({
    id: i,
    name: `University of Innovation ${i}`,
    overview: `University of Innovation ${i} focuses on modern education blending theory with practical skills across various domains.`,
    courses: [
      { name: "B.Tech CSE", duration: "4 Years" },
      { name: "BBA", duration: "3 Years" },
      { name: "MBA", duration: "2 Years" }
    ],
    fees: {
      min: 90000 + i * 500,
      max: 150000 + i * 1000
    },
    placements: {
      average: `₹${(4 + i * 0.1).toFixed(1)} LPA`,
      highest: `₹${(10 + i * 0.5).toFixed(1)} LPA`
    },
    facilities: [
      "WiFi Campus",
      "Library",
      "Hostel",
      "Labs",
      i % 2 === 0 ? "Sports Complex" : "Cafeteria"
    ]
  });
}

export default universities;
