const best = (prices) => {
    let largestProfit = 0; 
    

    for (i = 0; i < prices.length - 1; i++) {
        for (let j = i +1; j < prices.length; j++){
            const currentProfit = prices[j] - prices[i]
            if(currentProfit > largestProfit)
             console.log({
                 largestProfit,
                 currentProfit
             }) 
            largestProfit = currentProfit 
        }
    }
   console.log('The Largest profit is', largestProfit)
}




best([1, 2, 3, 4, 5])
// 4 - buy at $1, sell at $5

best([2, 3, 10, 6, 4, 8, 1])
// 8 - buy at $2, sell at $10

best([7, 9, 5, 6, 3, 2])
// 2 - buy at $7, sell at $9

best([0, 100])
// 100 - buy at $0, sell at $100