// JavaScript code​​​​​​‌​‌‌​​​​‌​​‌​​​​​‌‌​​​‌‌‌ below
// Write your answer here, then test your code.

// Change these boolean values to control whether you see 
// the expected answer and/or hints
const showExpectedResult = true;
const showHints = true;

const taxGST = 5;
const taxPST = 8;

const calculateTotal = (prices) => {



    console.log("Prices", prices)
    // Your code starts here
    const totals = {};
    totals.beforeTax = Number(prices.reduce((a,b) => a + b, 0).toFixed(2));
    console.log("totals.beforeTax",totals.beforeTax)
    console.log("GST percentage", ((totals.beforeTax * taxGST) / 100).toFixed(2))
    console.log("PST percentage", ((totals.beforeTax * taxPST) / 100).toFixed(2))  


    totals.GST = Number(((totals.beforeTax * taxGST) / 100).toFixed(2))
    totals.PST = Number(((totals.beforeTax * taxPST) / 100).toFixed(2))

    console.log("Individual numbers", totals.GST, totals.PST, totals.beforeTax)
    
    let a = totals.beforeTax + totals.GST + totals.PST;
    console.log("Added up", a)

    totals.sum = a;

    // Your code ends here
    
    return totals;
}

const showTotals = (prices) => {

        // Format the price above to USD using the locale, style, and currency.
let UKPound = new Intl.NumberFormat('en-UK', {
    style: 'currency',
    currency: 'GBP',
});

    //totals.sum = UKPound.format(totals.beforeTax + totals.GST + totals.PST);

    const totals = calculateTotal(prices);
    return `
        Before tax: ${UKPound.format(totals.beforeTax)}
        GST: ${UKPound.format(totals.GST)}
        PST: ${UKPound.format(totals.PST)}
        -----------------
        Sum total: ${UKPound.format(totals.sum)}
    `
}

// This is how your code will be called.
// Your answer should be the largest value in the numbers array.
// You can edit this code to try different testing cases.
// Nested array of random prices
const pricesArr = [

    [2.99, 3.99, 4.99, 22.99, 66.99],
    [2.94, 3.99, 4.99, 6.99, 88.99],
    [2.00, 1.99, 0.99, 5.19, 6.89],
    [2.96, 6.99, 4.09, 8.98, 12.99],
    [2.99, 3.99, 4.59, 5.96, 5.12]
  ];
  
  // Pick random array of prices
  const randomPrices = Math.floor(Math.random() * pricesArr.length);
  
  const result = showTotals(pricesArr[randomPrices]);

  console.log(result)