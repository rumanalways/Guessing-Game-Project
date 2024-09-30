// initialized value
let totalAttempts = 5;
let attempts = 0;
let totalWons = 0;
let totalLosts = 0;

// Finding Element
const form = document.querySelector('form');
const cardBody = document.querySelector('.card_body');
const lostWonMessage = document.createElement("p");
const guessingNumber = form.querySelector('#guessingNumber');
const checkButton = form.querySelector('#check');
const resultText = cardBody.querySelector('.resultText');
const remainingAttempts = cardBody.querySelector('.remainingAttempts');


form.addEventListener("submit", function(event){
    event.preventDefault();

    attempts++;
    if(attempts == 5 ){
        guessingNumber.disabled = true;
        checkButton.disabled = true;
    } if(attempts < 6 ){
       let guessNumber = Number(guessingNumber.value);
        checkResult(guessNumber);
        remainingAttempts.innerHTML = `Remaining Attempts: ${totalAttempts - attempts}`;
    }
    guessingNumber.value = "";
    
});

function checkResult(guessingNumber){
    const randomNamber = getRandomNumber(5);
    
    if(guessingNumber==randomNamber){
                resultText.innerHTML= `You have Won.`;
                totalWons++;
    }else{
        resultText.innerHTML= `You have lost. Ramdom Number was ${randomNamber}`;
        totalLosts++;
    }
    lostWonMessage.innerHTML = `Total Won: ${totalWons}, Total Lost: ${totalLosts}`;
    lostWonMessage.classList.add("larg-text");
    cardBody.appendChild(lostWonMessage);
    
}

function getRandomNumber (limit){
    return Math.floor(Math.random()*limit)+1;
}
