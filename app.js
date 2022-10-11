const initialPrice = document.getElementById("initial-price");
const stocksQuantity = document.getElementById("stocks-quantity");
const currentPrice = document.getElementById("current-price");
const submitButton = document.getElementById("submit");
const outputBox = document.getElementById("output-box");


submitButton.addEventListener("click", submitHandler);

/*function validate(initialPrice, stocksQuantity, currentPrice){
    if(initialPrice.value === 0 && stocksQuantity === 0 && currentPrice === 0){
        alert("Please fill out all the details properly😒");
    } else {
        
    }
}*/

function submitHandler(){
    let ip = Number(initialPrice.value);
    let qty = Number(stocksQuantity.value);
    let curr = Number(currentPrice.value);

    calculateProfitAndLoss(ip, qty, curr);
}

function calculateProfitAndLoss(initial, quantity, current){
    if(initial > current){
        const loss = (initial - current) * quantity;
        const lossPercentage = (loss/initial) * 100;
       showOutput(`😖 Your loss is ${loss} and loss percentage is ${lossPercentage}%`);
    } else if(current > initial){
        const profit = (current - initial) * quantity;
        const profitPercentage = (profit/initial) * 100;
       showOutput(`Hey! 😍 Your Profit is ${profit} and profit percentage is ${profitPercentage}%`);
    } else{
       showOutput(`No pain no gain and no gain no pain`);
    }
}

function showOutput(message){
    outputBox.innerHTML = message;
}


