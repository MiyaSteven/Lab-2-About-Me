'use strict';

var userName = prompt('What is your name?')
    alert('Welcome ' + userName + '! Enjoy the first page to my website!');

var answer1 = confirm('Do you like food?')
    if (answer1 === true) {
        alert('Correct!')
        // console.log('great, let us eat!')
        } else {
        alert('Incorrect!')
        // console.log('okay, we do not eat')
        };

var answer2 = confirm('Are you hungry to learn?')
    if (answer2 === true) {
        // console.log ('Let us grow together!')
        alert('Correct!')
        } else {    
        alert('Incorrect!')
        // console.log('Good luck to you!')
        };

var answer3 = confirm('Will you try to complete all the labs?')
    if (answer3 === true) {
        alert('Correct!')
        // console.log('Great! Keep up the positive momentum!')
        };

var answer4 = confirm('Do you like to reach your goals?')
    if (answer4 === true) {
        alert('Correct!')
        // console.log('Awesome you are!')
        } else {        
        alert('Incorrect!')
        // console.log('Better start smaller')
        };

var answer5 = confirm('Do you love coding?')
    if (answer5 === true) {
        alert('Correct!')
        // console.log('Great, we are ready to begin.')
        } else {
        alert('Incorrect!')
        // console.log('It is okay because we love coding')
        };

var question6 = prompt('Pick a number between 1 and 4. You have 4 guesses!') 
//how to add numeric input
var answer6 = 4;
    for (var i=0; i < 4; i++)
//how to combine answer6 and i together to give 4 guesses
        //  console.log(i);
    if (answer6 === 4) {
        alert('Correct!')
        //  console.log('Awesome! Moving forward!')
    } else { 
        while (answer6  !== 4)
        alert('too low')
        //  console.log(loop until 3 incorrect guesses)
    };
//add correct answer after guesses exhausted + show answer

function arrayCountries(countryToFind) {
var questionSeven = prompt('What countries do you think my favorite foods are from? You have 6 guesses.');

var arrayOfCountries = ['USA', 'Japan', 'China', 'Italy', 'France', 'Korea', 'Greece', 'Thailand'];

var guesses = 4;
var country = '';
while(guesses > 0) {
    country = prompt('guess a country');
    guessesLeft--;
}
    for (var i = 0; i < arrayOfCountries.length; i++) {
        // console.log('the current index for the array of countries ' + i)
        if(arrayOfCountries[i] === countryToFind) {
            alert('Correct!')
            return true;
        // } else {
            
        // }
        alert('The correct answers were ' + arrayOfCountries)
        return false;
        }
};
//how to sum up correct answers

alert('Enjoy the rest of my website, ' + userName + '.')

console.log (arrayOfCountries);

var correctAnswers = [];
