function updateRandomNumber() {
    
    const randomNumber1 = Math.floor(Math.random() * 10); 
    document.getElementById("randomNumberFirstBox").value = randomNumber1;
    const randomNumber2 = Math.floor(Math.random() * 10); 
    document.getElementById("randomNumberSecondBox").value = randomNumber2;
}

setInterval(updateRandomNumber, 4000);



checkButton.addEventListener('click', function() {
    const firstNumber = parseInt(document.getElementById("randomNumberFirstBox").value);
    console.log(firstNumber);
    const secondNumber = parseInt(document.getElementById("randomNumberSecondBox").value);
    console.log(secondNumber)
    const userInput = parseInt(document.getElementById("userInputValue").value);
    console.log(userInput)

    if (userInput === firstNumber + secondNumber) {
        document.getElementById("gameResult").textContent = 'Success!. You Got Right';
    } else {
        document.getElementById("gameResult").textContent = 'Better Luck Next Time!';
    }
});

restartButton.addEventListener('click', function() {
    document.getElementById("randomNumberFirstBox").value= " ";
    document.getElementById("randomNumberSecondBox").value = " ";
    document.getElementById("userInputValue").value = " ";
    document.getElementById("gameResult").textContent = " ";



    
});






