const items = [
  { name: 'Bike', price: 100 },
  { name: 'TV', price: 200 },
  { name: 'Album', price: 10 },
  { name: 'Book', price: 5 },
  { name: 'Phone', price: 500 },
  { name: 'Computer', price: 1000 },
];

// 1. Cheap one
const cheap = items.filter(item => item.price <100)
console.log("Cheap: ", cheap);
console.log("---------------------------------");
// 2. expensive
const expensive = items.filter(item => item.price > 100)
console.log("expensive: ", expensive);
console.log("---------------------------------");
// 3. full price
const fullPrice = items.reduce((a, b) => ({ price: a.price + b.price}))
console.log("Sum: ",fullPrice);
console.log("---------------------------------");
// 4. full price without those under 10
const totalPrice = items.filter(item => item.price >10).reduce((a, b) => ({ price: a.price + b.price}))
console.log("Sum: ",totalPrice);
console.log("---------------------------------");
