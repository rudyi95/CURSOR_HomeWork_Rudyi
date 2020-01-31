const Nokia = 15.678, Samsung = 90.2345, Apple = 123.965;
let maxPrice, minPrice, summOfPrices, summOfPricesFloor, summOfPricesFix, summOfPricesBool, a, remainder, remainderA, 
clientPay = 500, averagePrice, randomDiscount = Math.random(), someGood = 0, priceWithDiscount, lostProfit;

// 1)
maxPrice = Math.max(Nokia,Samsung,Apple);

// 2)
minPrice = Math.min(Nokia,Samsung,Apple);

// 3)
summOfPrices = Nokia + Samsung + Apple;

// 4)
summOfPricesFloor = Math.floor(Nokia) + Math.floor(Samsung) + Math.floor(Apple);

// 5)
summOfPricesFix = Math.ceil(summOfPrices/100)*100;

// 6)
summOfPricesBool = summOfPricesFloor;
if(summOfPricesBool % 2 == 0) {
    a = "Even";
} else {
    a = "Odd";
}

// 7)
if(summOfPrices <= clientPay){
    remainder = clientPay - summOfPrices;
    remainderA = "Remainder is: " + remainder;
}else{
    remainder = 1*(summOfPrices - clientPay);
    remainderA = "You have to give " + remainder + " more";
}

// 8)
averagePrice = (summOfPrices/3).toFixed(2);

// 9)
someGood = prompt("Write price of your good!", someGood);
priceWithDiscount = someGood - randomDiscount;
lostProfit = someGood / 2 - randomDiscount;

console.log(`
Max price is: ${maxPrice} , 
Min price is: ${minPrice} , 
Summ of prices: ${summOfPrices}, 
Summ of prices to floor: ${summOfPricesFloor},
Summ of prices fixed: ${summOfPricesFix},
Summ of prices is: ${a},
${remainderA},
Average price: ${averagePrice},
Lost profit: ${lostProfit}
`);