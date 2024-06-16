function flipCoin() {

    let coinFlip = (Math.random()>=0.5)? 1 : 0

    result(coinFlip)
}


function result(coinFlip){
    if (coinFlip === 0){
        alert("Its Heads!")
    }
    else if (coinFlip ===1){
        alert("Its Tails!")
    }
    else{
        alert("Error, invalid number")
    }
}