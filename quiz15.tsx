const products = [
  { name: "Book", price: 10 },
  { name: "Pen", price: 2 },
  { name: "Backpack", price: 30 }
];

const expensiveProduct = products.find(product => product.price > 5);