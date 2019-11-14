'use strict'

function StoreLocation (storeId, cookiesPerHour, totalCookiesPerLocation) {
    this.storeId = storeId; 
    this.cookiesPerHour = cookiesPerHour;
    this.totalCookiesPerLocation = totalCookiesPerLocation;

    this.render = function (domReference) {

        var tr = document.createElement('tr');

        var tdName = document.createElement('td');
        tdName.textContent = this.storeId;
        tr.append(tdName);

        for(var cookieIndex = 0; cookieIndex < this.cookiesPerHour.length; cookieIndex++) {
            var td = document.createElement('td');

            td.textContent = this.cookiesPerHour[cookieIndex];
            tr.append(td);
        }
        td = document.createElement('td');
        td.textContent = 'total';
        tr.append(td);

        domReference.append(tr);
    } 
}

var addNewLocation = document.getElementById('click-me');

addNewLocation.addEventListener('click', function(event) {


var table = document.getElementById('cookies-data');
table.innerHTML = '';
});

function renderHoursPerDay(tableRef) {




    var hoursPerDay = [
        '6:00am', 
        '7:00am', 
        '8:00am', 
        '9:00am', 
        '10:00am', 
        '11:00am', 
        '12:00pm', 
        '1:00pm', 
        '2:00pm', 
        '3:00pm', 
        '4:00pm', 
        '5:00pm', 
        '6:00pm', 
        '7:00pm',
        '8:00pm'
    ];

    var trElement = document.createElement('tr');

    var locationsEl = document.createElement('th');
    locationsEl.textContent = 'Locations';
    trElement.append(locationsEl);

    for(var hours = 0; hours < hoursPerDay.length; hours++) {
        var thElement = document.createElement('th');

        thElement.textContent = hoursPerDay[hours];

        trElement.append(thElement);
    };

    var dailyTotalEl = document.createElement('th');
    dailyTotalEl.textContent = 'Daily Total Cookies';
    trElement.append(dailyTotalEl);

    tableRef.append(trElement)


}

var seattleLocation = new StoreLocation('seattle-location', [23, 65, 6.3], 'Daily Total Cookies');
var tokyoLocation = new StoreLocation('tokyo-location', [3, 24, 1.2], 'Daily Total Cookies');
var dubaiLocation = new StoreLocation('dubai-location', [11, 38, 3.7], 'Daily Total Cookies');
var parisLocation = new StoreLocation('paris-location', [20, 38, 2.3], 'Daily Total Cookies');
var limaLocation = new StoreLocation('lima-location', [2, 16, 4.6], 'Daily Total Cookies');

var storeLocations = [seattleLocation, tokyoLocation, dubaiLocation, parisLocation, limaLocation];





var tableRef = document.getElementById('cookies-data');

renderHoursPerDay(tableRef);
// function calculateHourlyTotal(StoreLocations) {
//     getRandomCustomers(min, max) 
//         return Math.floor(Math.random() * (max - min + 1)) + min;
// };

// storeLocation.render();

// //find reference in the DOM
// //create elements we need to append to the DOM
// //set their contents
// //add your elements to your DOM reference
// //aka add your elements to the DOM


// function renderHoursPerDay(tableRef) {
//     var trElement = document.createElement('tr');

//     var tdName = document.createElement('td');
//     tdName.textConteent = this.name;
//     trElement.append(tdName);

// //lecture 9:41AM Make sure you're calling the arrays in the right order.

//     for(var cookieIndex = 0; cookieIndex < this.cookiesPerHour.length; cookieIndex++) {
//         var td = new StoreLocation; 
//     }
//     tableRef.append(trElement);
// }


// //HOURS
// renderHoursPerDay(tableRef);

// //LOCATIONS
// for(var locationIndex = 0; locationIndex < storeLocations.length; locationIndex++) {
//     var total = 0;
//     for(var cookies = 0; bark < locationIndex) {
//     var currentLocation = storeLocations[locationIndex];

//     currentLocation.render(tableRef);
//     }
// }

// function tableFooter () {
//     var trElement = document.createElement('tr');
//     var tdElement = document.createElement('td');
//     tdElement.textContent = 'Totals';
//     trElement.append(tdElement);
// }