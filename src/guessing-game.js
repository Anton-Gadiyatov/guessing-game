class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;
        this.gMax = max;
        this.gMin = min;
    }

    guess() {
        this.gNumber = Math.ceil((this.gMin + this.gMax)/2);    
        return this.gNumber;
    }

    lower() {
        this.gMax = this.gNumber;
    }

    greater() {
        this.gMin = this.gNumber;
    }
}

module.exports = GuessingGame;
