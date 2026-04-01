numFiboNum = 0;

function* fibonacciNumber(maxRange, endTime = Date.now() + 5000){
    let counter = 0;
    let firstTerm = 0n;
    let secondTerm = 1n;
    while(Date.now() <= endTime || counter < maxRange){
        yield firstTerm;
        let result = firstTerm + secondTerm;
        firstTerm = secondTerm;
        secondTerm = result;  
        counter += 1;
        numFiboNum += 1;
    }
}

// Не дуже рандомно
function* randomNumber(minRange = -10000, maxRange = 10000){
    while(true){
        yield Math.trunc(Math.random() * (maxRange - minRange) + minRange);
    }
}

module.exports = {
    fibonacciNumber,
    randomNumber,
    numFiboNum
};