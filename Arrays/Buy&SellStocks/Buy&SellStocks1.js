const maxProfit = (arr) => {
    let profit = -Infinity, lowest = arr[0];
    for(let i=0;i<arr.length;i++){
        lowest = Math.min(lowest, arr[i]);
        profit = Math.max(profit, arr[i] - lowest);
    }

    return profit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
