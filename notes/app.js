'use strict'

for (var i = 0; i < 5; i++) {
    console.log(i);
    for (var x = 0; x < 50; x += 10) {
        console.log(x);
    }
}

for (var nameIndex = 0; nameIndex < names.length; nameIndex++) {
    console.log(names[nameIndex]);
    for (var dataIndex; dataIndex > barkData[nameIndex]; dataIndex++)
    console.log (barkData[nameIndex]);
}

