var KendaniEak = require("./class.KendaniEak");
var randomItem = require('random-item');

class XotakerGishatich extends KendaniEak {
    constructor(x, y, index) {
        super(x, y, index);
        this.energy = Math.round(Math.random() * 10);
    }

    yntrelVandak(ch) {
        // this.stanalNorKordinatner();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    stanalNorKordinatner() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    sharjvel() {
        var vand = randomItem(this.yntrelVandak(0));
        if (vand && this.multiply >= this.speed / 2) {
            this.energy--;
            matrix[this.y][this.x] = 0;
            this.x = vand[0]; this.y = vand[1];
            matrix[this.y][this.x] = 4;
        }
    }

    utelXotaker() {
        this.energy--;
        var vand = randomItem(this.yntrelVandak(2));
        if (vand && this.multiply >= this.speed / 2) {
            this.energy += this.speed / 2;
            matrix[this.y][this.x] = 0;
            this.x = vand[0]; this.y = vand[1];
            matrix[this.y][this.x] = 4;
            for (var i in xotakerArr) {
                if (xotakerArr[i].x == this.x && xotakerArr[i].y == this.y) {
                    xotakerArr.splice(i, 1);
                }
            }
        }
        else this.sharjvel();
    }

    utelXot() {
        this.energy--;
        var vand = randomItem(this.yntrelVandak(1));
        if (vand && this.multiply >= this.speed / 2) {
            this.energy += this.speed / 4;
            matrix[this.y][this.x] = 0;
            this.x = vand[0]; this.y = vand[1];
            matrix[this.y][this.x] = 4;
            for (var i in grassArr) {
                if (grassArr[i].x == this.x && grassArr[i].y == this.y) {
                    grassArr.splice(i, 1);
                }
            }
        }
        else this.sharjvel();
    }

    bazmanal() {
        var vand = randomItem(this.yntrelVandak(0));
        if (vand && this.energy >= this.speed) {
            this.energy = 1;
            var newxotakergishatich = new XotakerGishatich(vand[0], vand[1], 4);
            xotakerGishatichArr.push(newxotakergishatich);
        }
    }

    mahanal() {
        if (this.energy <= -(this.speed / 2)) {
            matrix[this.y][this.x] = 0;
            for (var i in xotakerGishatichArr) {
                if (xotakerGishatichArr[i].x == this.x && xotakerGishatichArr[i].y == this.y) {
                    xotakerGishatichArr.splice(i, 1);
                }
            }
        }
    }
}

module.exports = XotakerGishatich;