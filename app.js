// 'use strict';

// var userName = prompt('What is your name?')
// alert('Welcome ' + userName + '! Enjoy the first page to my website!');

// var answer1 = confirm('Do you like food?')
// if (answer1 === true) {
//     alert('Correct!')
//     // console.log('great, let us eat!')
// } else {
//     alert('Incorrect!')
//     // console.log('okay, we do not eat')
// };

// var answer2 = confirm('Are you hungry to learn?')
// if (answer2 === true) {
//     // console.log ('Let us grow together!')
//     alert('Correct!')
// } else {
//     alert('Incorrect!')
//     // console.log('Good luck to you!')
// };

// var answer3 = confirm('Will you try to complete all the labs?')
// if (answer3 === true) {
//     alert('Correct!')
//     // console.log('Great! Keep up the positive momentum!')
// };

// var answer4 = confirm('Do you like to reach your goals?')
// if (answer4 === true) {
//     alert('Correct!')
//     // console.log('Awesome you are!')
// } else {
//     alert('Incorrect!')
//     // console.log('Better start smaller')
// };

// var answer5 = confirm('Do you love coding?')
// if (answer5 === true) {
//     alert('Correct!')
//     // console.log('Great, we are ready to begin.')
// } else {
//     alert('Incorrect!')
//     // console.log('It is okay because we love coding')
// };








function numberTest() {
    var question6 = prompt('Pick a number between 1 and 4. You have 4 guesses!')


    //how to add numeric input
    var answer6 = 4;
    var guessesLeft = 4;

    while (guessesLeft > 0) {
        var userNum = parseInt(question6, 10);
        console.log('userNum =' + userNum)

        if (userNum === answer6) {
            alert('Correct');
            console.log('success')
            return 'success'
        } else {
            question6 = prompt('nope, try again!')
            console.log('fail' + userNum)
        }




        guessesLeft--;
    }
}
numberTest();






//add correct answer after guesses exhausted + show answer

// function arrayCountries(countryToFind) {
// var questionSeven = prompt('What countries do you think my favorite foods are from? You have 6 guesses.');

// var arrayOfCountries = ['USA', 'Japan', 'China', 'Italy', 'France', 'Korea', 'Greece', 'Thailand'];

// var guesses = 4;
// var country = '';
// while(guesses > 0) {
//     country = prompt('guess a country');
//     guessesLeft--;
// }
//     for (var i = 0; i < arrayOfCountries.length; i++) {
//         // console.log('the current index for the array of countries ' + i)
//         if(arrayOfCountries[i] === countryToFind) {
//             alert('Correct!')
//             return true;
//         // } else {

//         // }
//         alert('The correct answers were ' + arrayOfCountries)
//         return false;
//         }
// };
//how to sum up correct answers

alert('Enjoy the rest of my website, ' + userName + '.')

// console.log(arrayOfCountries);

var correctAnswers = [];
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
        }

var answer2 = confirm('Are you hungry to learn?')
    if (answer2 === true) {
        // console.log ('Let us grow together!')
        alert('Correct!')
        score += 1;
        } else {    
        alert('Incorrect!')
        // console.log('Good luck to you!')
        }

var answer3 = confirm('Will you try to complete all the labs?')
    if (answer3 === true) {
        alert('Correct!')
        score += 1;
        // console.log('Great! Keep up the positive momentum!')
        }

var answer4 = confirm('Do you like to reach your goals?')
    if (answer4 === true) {
        alert('Correct!')
        score += 1;
        // console.log('Awesome you are!')
        } else {        
        alert('Incorrect!')
        // console.log('Better start smaller')
        }

var answer5 = confirm('Do you love coding?')
    if (answer5 === true) {
        alert('Correct!')
        score += 1;
        // console.log('Great, we are ready to begin.')
        } else {
        alert('Incorrect!')
        // console.log('It is okay because we love coding')
        }
};   

function getRandomNumber {
var randomNumber = Math.ceil(Math.random() * (10 - 1 + 1)) + 1;


do {
    var question6 = prompt('Pick a number between 1 and 10. (4 tries)') 
    console.log('The guesses number is NAN?' , isNan(Number(question6)));
    console.log(randomNumber)
}

var triesLeft = 4;
        if (parseInt(question6, 10) > randomNumber) {
            triesLeft--;
            else if(userNum < randomNumber) {
                question6 = prompt('Too low, ' + triesLeft-- + 'tries remaining!')
            } else if(userNum > randomNumber) {
                question6 = prompt('Too high, ' + triesLeft-- + 'tries remaining!')
            } else if(userNum === randomNumber) {
                alert('Correct!')
                score +=1;
            }  else {
                alert('Please try again')
            }
        }
        console.log('Good job!')
};    
function arrayCountries(countryToFind) {
var questionSeven = prompt('What countries do you think my favorite foods are from? You have 6 guesses.');

var arrayOfCountries = ['USA', 'Japan', 'China', 'Italy', 'France', 'Korea', 'Greece', 'Thailand'];

var guesses = 4;
var country = '';
while(guesses > 0) {
    country = prompt('guess a country');
    guessesLeft--;
}
    for(var i = 0; i < arrayOfCountries.length; i++) {
        // console.log('the current index for the array of countries ' + i)
        if(arrayOfCountries[i] === countryToFind) {
            alert('Correct!')
            score += 1;
            return true;
        alert('The correct answers were ' + arrayOfCountries)
        return false;
        console.log (arrayOfCountries);
        }
    }
};

userQuestions();

alert('Enjoy the rest of my website, ' + userName + '.')

