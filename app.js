'use strict';

var userName = prompt('What is your name?')
    alert('Welcome ' + userName + '! Enjoy the first page to my Life!');

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
    if (answer4 === true){
        alert('Correct!')
        // console.log('Awesome you are!')
        } else {        
        alert('Incorrect!')
        // console.log('Better start smaller')
        };

var answer5 = confirm('Do you love yourself?')
    if (answer5 === true){
        alert('Correct!')
        // console.log('Great, we are ready to begin...')
        } else {
        alert('Incorrect!')
        // console.log('It is okay because we love you')
        };

alert('Enjoy the rest of my novel, ' + userName + '.');
