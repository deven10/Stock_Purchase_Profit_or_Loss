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

    checkProfitOrLoss(ip, qty, curr);
}

function checkProfitOrLoss(initial, quantity, current){
    let x = current - initial;
    console.log("profit or loss is =>", x);
    let y = x / initial;
    let percentage = y * 100;
    console.log(percentage, "<= percentage");

    if(initial < 0 || current < 0 || quantity < 0){
        showOutput(`" Please Enter Valid Inputs, Inputs cannot be Empty or Negative "`);
    }

    else if(x > 0){  // If you have made profit run this 
        const profit = (current - initial) * quantity;
        const fixedProfit = Math.round(profit);
        const profitPercentage = Math.round(percentage);
        console.log("yaya profit");
       showOutput(`" Hey! 😍 Your Profit is ${fixedProfit} and profit percentage is ${profitPercentage}% "`);
    } 

    else if(x < 0) { // If you have made profit run this
        const loss = (initial - current) * quantity;
        const fixedLoss = Math.round(loss);
        const fixedLossPercentage = Math.round(percentage);
        console.log("loss sorry");
       showOutput(`" 😖 Your loss is ${fixedLoss} and loss percentage is ${fixedLossPercentage}% "`);
    }

    else{
        showOutput(`" No pain no gain and no gain no pain "`);
     }

}

// function calculateProfitAndLoss(initial, quantity, current){

//     if(initial < 0 || current < 0 || quantity < 0){
//         showOutput(`" Please Enter Valid Inputs, Inputs cannot be Empty or Negative "`);

//     } else if(initial > current){

//         const loss = (initial - current) * quantity;
//         const fixedLoss = Math.round(loss);
//         const lossPercentage = (loss/initial) * 100;
//         const fixedLossPercentage = Math.round(lossPercentage);
//        showOutput(`" 😖 Your loss is ${fixedLoss} and loss percentage is ${fixedLossPercentage}% "`);

//     } else if(current > initial){

//         const profit = (current - initial) * quantity;
//         const fixedProfit = Math.round(profit);
//         const profitPercentage = (profit/initial) * 100;
//         const fixedProfitPercentage = Math.round(profitPercentage);
//        showOutput(`" Hey! 😍 Your Profit is ${fixedProfit} and profit percentage is ${fixedProfitPercentage}% "`);

//     } else{

//        showOutput(`" No pain no gain and no gain no pain "`);

//     }
// }

function showOutput(message){
    outputBox.innerText = message;
}


