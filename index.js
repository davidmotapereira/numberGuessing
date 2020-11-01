

let butt = document.getElementById('butt');
let output = document.getElementById('outputtext');
let number = [Math.floor(Math.random() * 100)]
butt.addEventListener('click', function () {
    let input = document.getElementById('userImput').value;
    if (input == number) {
        output.innerHTML = `Congratulations, you are the best, your number was ${number}`
    } else if (input < number) {
        output.innerHTML = 'You guessed too low :('
    };
    if (input > number) {
        output.innerHTML = 'You guessed too high!!'
    }

});
