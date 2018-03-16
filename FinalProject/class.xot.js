var KendaniEak = require('./class.KendaniEak');
var randomItem = require('random-item');

class Grass extends KendaniEak {

    bazmanal() {
        this.multiply++;
        this.direction = randomItem(this.yntrelVandak(0));
        if (this.multiply >= 8 && this.direction) {
            var newGrass = new Grass(this.direction[0], this.direction[1], this.index);
            newGrass.parentX = this.x;
            newGrass.parentY = this.y;
            grassArr.push(newGrass);
            matrix[this.direction[1]][this.direction[0]] = this.index;
            this.multiply = 0;
        }
    }
}

module.exports = Grass;
