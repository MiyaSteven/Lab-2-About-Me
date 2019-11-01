'use strict';

var userName = prompt('What is your name?')
    alert('Welcome ' + userName + '! Enjoy the first page to my website!');
// if (userName === '') {
//     userQuestions();
// }

function userQuestions() {
var score = 0;
var answer1 = confirm('Do you like food?')
    if (answer1 === true) {
        alert('Correct!')
        score += 1;
        // console.log('great, let us eat!')
        } else {
        alert('Incorrect!')
        // console.log('okay, we do not eat')
        };

var answer2 = confirm('Are you hungry to learn?')
    if (answer2 === true) {
        // console.log ('Let us grow together!')
        alert('Correct!')
        score += 1;
        } else {    
        alert('Incorrect!')
        // console.log('Good luck to you!')
        };

var answer3 = confirm('Will you try to complete all the labs?')
    if (answer3 === true) {
        alert('Correct!')
        score += 1;
        // console.log('Great! Keep up the positive momentum!')
        };

var answer4 = confirm('Do you like to reach your goals?')
    if (answer4 === true) {
        alert('Correct!')
        score += 1;
        // console.log('Awesome you are!')
        } else {        
        alert('Incorrect!')
        // console.log('Better start smaller')
        };

var answer5 = confirm('Do you love coding?')
    if (answer5 === true) {
        alert('Correct!')
        score += 1;
        // console.log('Great, we are ready to begin.')
        } else {
        alert('Incorrect!')
        // console.log('It is okay because we love coding')
        };

var question6 = prompt('Pick a number between 1 and 10. You have 4 guesses!') 
var triesLeft = 4;
var randomNumber = Math.ceil(Math.random() * (10 - 1) + 1);

while (triesLeft > 0) {
    var userNum = parseInt(question6, 10)
        if (userNum === randomNumber) {
            if (userNum < randomNumber) {
                question6 = prompt('Too low, ' + triesLeft-- + 'tries remaining!')
            } else if (userNum > randomNumber) {
                question6 = prompt('Too high, ' + triesLeft-- + 'tries remaining!')
            } else if (userNum === randomNumber) {
                alert('Correct!')
                score +=1;
            break;
            }
        }
        console.log('Good job!')
        triesLeft--;
    }
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
            score += 1;
            return true;
        // } else {
            
        // }
        alert('The correct answers were ' + arrayOfCountries)
        return false;
        console.log (arrayOfCountries);
        }
    }
}
};
userQuestions();

alert('Enjoy the rest of my website, ' + userName + '.')
