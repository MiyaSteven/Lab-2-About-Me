'use strict'

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

    for(var hours = 0; hours < hoursPerDay.length; hours++) {
        var thElement = document.createElement('th');

        th.textContent = hoursPerDay[hours];

        trElement.append(thElement);
    };
    tableRef.append(trElement)
        // var thElement = document.createElement('td');
        // tdElement.textContent = 'Total Cookies';
        // trElement.append(tdElement);
}

function StoreLocation (storeId, minimumHourlyCustomer, maximumHourlyCustomer, averageCookiesPerCustomer) {
        this.storeId = storeId; 
        this.cookiesPerHour = [this.minimumHourlyCustomer, this.maximumHourlyCustomer, this.averageCookiesPerCustomer];
        this.minHourlyCustomer = minimumHourlyCustomer;
        this.maxHourlyCustomer = maximumHourlyCustomer;
        this.avgCookiesPerCustomer = averageCookiesPerCustomer;

        this.getRandomCustomersPerHour = function () {
            return getRandomNumber(this.minimumHourlyCustomer, this.maximumHourlyCustomer);
        };
        this.getAverageCookiesPurchased = function () {
            return Math.round(this.getRandomCustomersPerHour() * this.averageCookiesPerCustomer);
        };
        this.render = function (tableRef) {
            var sum = 0;
            var trElement = document.createElement('tr');

            var tdElement = document.createElement('td');
            tdElement.textContent = this.storeId;
            trElement.append(tdElement);

            for(var cookieIndex = 0; cookieIndex < this.cookiesPerHour.length; cookieIndex++) {
                tdElement = document.createElement('td');
                var avgCookies = this.getAverageCookiesPurchased();
                sum += avgCookies;
                this.cookiesPerHour push(avgCookies);
                td.textContent = this.cookiesPerHour[cookieIndex];
                trElement.append(td);
            }

            td = document.createElement('td');
            td.textContent = 'total';
            trElement.append(td);

            tableRef.append(trElement);
    } 
};

var seattleLocation = new StoreLocation('seattle-location', 23, 65, 6.3);
var tokyoLocation = new StoreLocation('tokyo-location', 3, 24, 1.2)
var dubaiLocation = new StoreLocation('dubai-location', 11, 38, 3.7)
var parisLocation = new StoreLocation('paris-location', 20, 38, 2.3)
var limaLocation = new StoreLocation('lima-location', 2, 16, 4.6)


function calculateHourlyTotal(StoreLocations) {
    getRandomCustomers(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
}

storeLocation.render();

//find reference in the DOM
//create elements we need to append to the DOM
//set their contents
//add your elements to your DOM reference
//aka add your elements to the DOM


function renderHoursPerDay(tableRef) {
    var trElement = document.createElement('tr');

    var tdName = document.createElement('td');
    tdName.textConteent = this.name;
    trElement.append(tdName);

    for(var cookieIndex = 0; cookieIndex < this.cookiesPerHour.length; cookieIndex++) {
        var td = new StoreLocation; 
    }
    tableRef.append(trElement);
}

var tableRef = document.getElementById('cookies-data');

//HOURS
renderHoursPerDay(tableRef);

//LOCATIONS
for(var locationIndex = 0; locationIndex < storeLocations.length; locationIndex++) {
    var currentLocation = storeLocations[locationIndex];

    currentLocation.render(tableRef);
}

function tableFooter () {
    var trElement = document.createElement('tr');
    var tdElement = document.createElement('td');
    tdElement.textContent = 'Totals';
    trElement.append(tdElement);
}