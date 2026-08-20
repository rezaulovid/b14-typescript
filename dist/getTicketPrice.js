"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getTickerPrice = (age) => {
    if (age < 5) {
        return 0;
    }
    else if (age >= 5 && age <= 12) {
        return 100;
    }
    else if (age >= 13 && age <= 59) {
        return 200;
    }
    return 120;
};
console.log(getTickerPrice(3));
//# sourceMappingURL=getTicketPrice.js.map