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
        '8:00pm',
        'Total'
    ];

    var tr = document.createElement('tr');

    for(var hours = 0; hours < hoursPerDay.length; hours++) {
        var th = document.createElement('th');

        th.textContent = hoursPerDay[hours];

        tr.append(th);
    };
    tableRef.append(tr)
};

function StoreLocation(storeId, cookiesPerHour, dailyLocationTotal) {
    this.storeId = storeId;
    this.cookiesPerHour = cookiesPerHour;
    this.dailyLocationTotal = dailyLocationTotal;

    this.render = function(tableRef) {
        var tr = document.createElement('tr');

        var tdId = document.createElement('td');
        tdId.textContent = this.storeId;
        tr.append(tdId);

        for(var cookieIndex = 0; cookieIndex < this.cookiesPerHour.length; cookieIndex++) {
            var td = document.createElement('td');

            td.textContent = this.cookiesPerHour[cookieIndex];
            tr.append(td);
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

//LOCATIONS
for(var locationIndex = 0; locationIndex < storeLocations.length; locationIndex++) {
    var currentLocation = storeLocations[locationIndex];

    currentLocation.render(tableRef);
};

StoreLocation.render(tableRef);

calculateHourlyTotal.render(tableRef);