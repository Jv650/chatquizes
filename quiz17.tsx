const products = [
  { name: "apple juice", category: "drink" },
  { name: "banana smoothie", category: "drink" },
  { name: "apple pie", category: "food" },
  { name: "berry tea", category: "drink" }
];

/**
 * Filter products whose name starts with "apple"
 * Map them into strings formatted like:
    "APPLE JUICE - drink"
    "APPLE PIE - food"
 */

const appleProducts = products.filter(product => product.name.startsWith("apple"));
const formattedApples= appleProducts.map(product => `${product.name.toUpperCase()} - ${product.category}`);