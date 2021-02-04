console.log('...connected');

let number = Math.floor( Math.random() * 20) + 1;

//Prompt user to guess a random number between 1 and 20 up to 5 times.

for(let i = 4; i >= 0; i--){
    let guess = prompt("Give me a number between 1 and 20.");
    if (parseInt(guess) == number) {
        alert(`You guessed the number!`);
        break;
    } else if (i == 0) {
        alert("Sorry, you didn't guess it.")
    } else {
        alert(`You have ${i} tries left to guess the number`);
    }

}

//Generate random number.

//If guess is equal to random number, stop loop.

//If guess is not equal to random number, continue up to 5 times.
