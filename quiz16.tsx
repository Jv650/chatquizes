const items = [
  { name: "Laptop", tags: ["tech", "work"] },
  { name: "Shoes", tags: ["fashion", "sport"] },
  { name: "Headphones", tags: ["tech", "audio"] },
  { name: "Jacket", tags: ["fashion", "winter"] }
];

// Filter the items to keep only those whose tags array includes "tech"
const techItemArray = items.filter(item => item.tags.includes("tech"));

const newTechItemArray = techItemArray.map(item => item.name + " tech");
