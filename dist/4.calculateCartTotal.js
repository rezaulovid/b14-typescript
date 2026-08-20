"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calculateCartTotal = (products) => {
    const total = products.reduce((sum, item) => sum + item.price, 0);
    return total;
};
const products = [
    { name: "Keyboard", price: 1500 },
    { name: "Mouse", price: 800 },
    { name: "USB Cable", price: 300 }
];
// another example:
const products2 = [
    { name: "Book", price: 500 },
    { name: "Pen", price: 50 },
    { name: "Bag", price: 1200 }
];
// another example:
const products3 = [
    { name: "Book", price: 5000 },
    { name: "Pen", price: 500 },
    { name: "Bag", price: 12000 }
];
console.log(calculateCartTotal(products3));
//# sourceMappingURL=4.calculateCartTotal.js.map