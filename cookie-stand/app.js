'use strict'

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm',];
var tableRef = document.getElementById('cookie-sheet');

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

function StoreLocations(id, minimumHourlyCustomer, maxHourlyCustomer, averageCookiesPerCustomer) {
this.id = id;
this.hourlyCookiesPurchasedArray = [];
this.minHourlyCustomer = minimumHourlyCustomer;
this.maxHourlyCustomer = maximumHourlyCustomer;
this.avgCookiesPurchased = averageCookiesPurchased;

this.getRandomCustomersPerHour = function () {
    return getRandomNumber(this.minimumHourlyCustomer, this.maximumHourlyCustomer);
};
this.getAverageCookiesPurchased = function () {
    return Math.round(this.getRandomCustomersPerHour() * this.averageCookiesPurchased);
};
this.render = function() {
    for(var i = 0; i < storeHours.length; i++) {
        this.hourlyCookiesPurchasedArray.push(averageCookiesPurchased);
    }
} 
};

//find reference in the DOM
//create elements we need to append to the DOM
//set their contents
//add your elements to your DOM reference
//aka add your elements to the DOM

var SeattleLocation = {

}
var TokyoLocation = {

}
var DubaiLocation = {

}
var ParisLocation = {

}
var LimaLocation = {

}