'use strict'

let hoursPlaceholder = [
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
]

function StoreLocation (storeId, min, max, cookiesPerHour) {
    this.storeId = storeId; 
    this.cookiesPerHour = cookiesPerHour;
    this.min = min;
    this.max = max;

    this.cookiesSoldPerHour = [];
    this.cookiesSoldTotal = 0;

    this.render = function (domReference) {

        var tr = document.createElement('tr');

        var tdName = document.createElement('td');
        tdName.textContent = this.storeId;
        tr.append(tdName);

        for(var cookieIndex = 0; cookieIndex < this.cookiesSoldPerHour.length; cookieIndex++) {
            var td = document.createElement('td');

            td.textContent = this.cookiesSoldPerHour[cookieIndex];
            tr.append(td);
        }
        td = document.createElement('td');
        td.textContent = this.cookiesSoldTotal;
        tr.append(td);

        domReference.append(tr);
    }
    
    this.calculateHourlyTotalCookies = function(){

        let sum = 0;
        
        this.cookiesSoldPerHour = [];

        for (var i = 0; i < hoursPlaceholder.length; i++){
            let x = Math.ceil(this.cookiesPerHour * getRandomCustomers(this.min, this.max));

            sum = sum + x;

            this.cookiesSoldPerHour.push(x);
        };

        this.cookiesSoldTotal = sum;

    }

}




// var addNewLocation = document.getElementById('click-me');

// addNewLocation.addEventListener('click', function(event) {


//     var table = document.getElementById('cookies-data');
//     table.innerHTML = '';
// });

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
        '8:00pm',
        'Total'
    ];

    var tr = document.createElement('tr');

    var locationsEl = document.createElement('th');
    locationsEl.textContent = 'Locations';
    trElement.append(locationsEl);

    for(var hours = 0; hours < hoursPerDay.length; hours++) {
        var th = document.createElement('th');

        thElement.textContent = hoursPerDay[hours];

        tr.append(th);
    };

    var dailyTotalEl = document.createElement('th');
    dailyTotalEl.textContent = 'Daily Total Cookies';
    trElement.append(dailyTotalEl);

    tableRef.append(trElement)


}

var seattleLocation = new StoreLocation('seattle-location', 23, 65, 6.3);
var tokyoLocation = new StoreLocation('tokyo-location', 3, 24, 1.2);
var dubaiLocation = new StoreLocation('dubai-location', 11, 38, 3.7);
var parisLocation = new StoreLocation('paris-location', 20, 38, 2.3);
var limaLocation = new StoreLocation('lima-location', 2, 16, 4.6);

var storeLocations = [seattleLocation, tokyoLocation, dubaiLocation, parisLocation, limaLocation];

var tableRef = document.getElementById('cookies-data');


function calculateHourlyTotal(stores) {

    for(var i = 0; i < stores.length; i++){

        stores[i].calculateHourlyTotalCookies();

    }

};

tableRef.append(tr)
};

function StoreLocation(storeId, cookiesPerHour, dailyLocationTotal) {
    this.storeId = storeId;
    this.cookiesPerHour = cookiesPerHour;
    this.dailyLocationTotal = dailyLocationTotal;

    this.render = function(tableRef) {
        var tr = document.createElement('tr');

// calculateHourlyTotal(storeLocations);

        var tdId = document.createElement('td');
        tdId.textContent = this.storeId;
        tr.append(tdId);

        for(var cookieIndex = 0; cookieIndex < this.cookiesPerHour.length; cookieIndex++) {
            var td = document.createElement('td');

            td.textContent = this.cookiesPerHour[cookieIndex];
            tr.append(td);
        }

function getRandomCustomers(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
} 

function renderStoreLocationData(stores){
    for(var i = 0; i < stores.length; i++){

        stores[i].render(tableRef);
    }

}


        td = document.createElement('td');

        td.textContent = 'total'
        tr.append(td);

        tableRef.append(tr);
    }
};

var seattleLocation = new StoreLocation('seattle-location', [23, 65, 6.3], 'Totals');
var tokyoLocation = new StoreLocation('tokyo-location', [3, 24, 1.2], 'Totals');
var dubaiLocation = new StoreLocation('dubai-location', [11, 38, 3.7], 'Totals');
var parisLocation = new StoreLocation('paris-location', [20, 38, 2.3], 'Totals');
var limaLocation = new StoreLocation('lima-location', [2, 16, 4.6], 'Totals');

var storeLocations = [seattleLocation, tokyoLocation, dubaiLocation, parisLocation, limaLocation];

function calculateHourlyTotal(storeLocations) {
    getRandomCustomers(minimumCustomerPerHour, maximumCustomerPerHour) 
        return Math.floor(Math.random() * (maximumCustomerPerHour - minimumCustomerPerHour + 1)) + minimumCustomerPerHour;
};

var tableRef = document.getElementById('cookie-data');

//STORE HOURS
renderHoursPerDay(tableRef);

function renderWebsite(){

    //Render titles for the website
    renderHoursPerDay(tableRef);

    //Calculate cookies sold per hour for all stores
    calculateHourlyTotal(storeLocations);

    //Render all stores
    renderStoreLocationData(storeLocations);
}



//Generate cookies sold per HOUR for ALL stores array
var potato = function() {
    for(let i = 0; i < hoursPerDay.length; i++) {
        return Math.ceil(getRandomCustomers * calculateHourlyTotal)
    }
}

//Generate cookies sold per DAY for ALL stores
var 

//Render your footer with existing cookies sold per hour array
var spaghett = function(){
    
}





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




renderWebsite();

    currentLocation.render(tableRef);
};

StoreLocation.render(tableRef);

calculateHourlyTotal.render(tableRef);
