var fs = require('fs');
var arrP = [];

console.log('# INIT REPLATE SCRIPT');

function renameFile(file) {
    var newstr = file.replace(/^[_\d\w]*[\d{4}?]_/gim, '');

    return new Promise(function(resolve, reject) {
        fs.rename('./toconvert/' + file, './converted/' + newstr, function(err) {
            if(err) {
                reject(err)
            }

            resolve(newstr);
        });
    });
};

fs.readdir('./toconvert/', function(error, data) {
    if (error) {
        return error;
    }

    for(var i = 0; i < data.length; i++) {
        arrP.push(renameFile(data[i]));
    }

    Promise.all(arrP).then(function(d) {
        console.log('# FILE DONE: ', d);
    });
});