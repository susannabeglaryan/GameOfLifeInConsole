var Grass = require("./class.xot");
var Xotaker = require("./class.xotaker");
var Gishatich = require("./class.gishatich");
var XotakerGishatich = require("./class.XotakerGishatich");
var rn = require('random-number');
var options = {
    min: 0
    , max: 100
    , integer: true
}

function genMatrix(w, h) {
    var matrix = [];
    for (var y = 0; y < h; y++) {
        matrix[y] = [];
        for (var x = 0; x < w; x++) {
            var r = rn(options);
            if (r < 20) r = 0;
            else if (r < 70) r = 1;
            else if (r < 85) r = 2;
            else if (r < 95) r = 3;
            else if (r < 100) r = 4;
            matrix[y][x] = r;
        }
    }
    return matrix;
}

global.matrix;
var w = 30;
var h = 30;
global.grassArr = [];
global.xotakerArr = [];
global.gishatichArr = [];
global.xotakerGishatichArr = [];


setInterval(function () {
    matrix = genMatrix(w, h);
    for (var y = 0; y < h; y++) {
        for (var x = 0; x < w; x++) {
            if (matrix[y][x] == 1) {
                grassArr.push(new Grass(x * 1, y * 1, 1));
            }
            else if (matrix[y][x] == 2) {
                xotakerArr.push(new Xotaker(x * 1, y * 1, 2));
            }
            else if (matrix[y][x] == 3) {
                gishatichArr.push(new Gishatich(x * 1, y * 1, 3));
            }
            else if (matrix[y][x] == 4) {
                xotakerGishatichArr.push(new XotakerGishatich(x * 1, y * 1, 4));
            }
        }
    }

    for (var y = 0; y < h; y++) {
        for (var x = 0; x < w; x++) {
            if (matrix[y][x] == 0) {
                process.stdout.write(" 0 ");
            }
            else if (matrix[y][x] == 1) {
                process.stdout.write(" 1 ");
            }
            else if (matrix[y][x] == 2) {
                process.stdout.write(" 2 ");
            }
            else if (matrix[y][x] == 3) {
                process.stdout.write(" 3 ");
            }
            else if (matrix[y][x] = 4) {
                process.stdout.write(" 4 ");
            }
        }
        console.log(" ");
    }

    for (var i in grassArr) {
        grassArr[i].bazmanal();
    }

    for (var i in xotakerArr) {
        xotakerArr[i].bazmanal();
        xotakerArr[i].utel();
        xotakerArr[i].mahanal();
    }

    for (var i in gishatichArr) {
        gishatichArr[i].bazmanal();
        gishatichArr[i].utel();
        gishatichArr[i].mahanal();
    }

    for (var i in xotakerGishatichArr) {
        xotakerGishatichArr[i].bazmanal();
        xotakerGishatichArr[i].utelXot();
        xotakerGishatichArr[i].utelXotaker();
        xotakerGishatichArr[i].mahanal();
    }

    console.clear();

}, 100);

