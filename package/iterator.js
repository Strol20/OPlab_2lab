function iteratorWithTime(iterable, time){
    
    let list = [];
    let sum = 0n;
    const finishTime = Date.now() + (time*1000);

    while(Date.now() < finishTime){
        curent = iterable.next();
        console.log(curent.value);
        sum += BigInt(curent.value);
        list.push(curent.value)
    }
    return{
        sum: sum,
        averageNum: sum / BigInt(list.length),
        list: list.length
    }
}

module.exports = {
    iteratorWithTime,
};