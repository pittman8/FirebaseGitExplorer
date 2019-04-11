class Calculator {
    constructor() {
        this.operanda = 2;
        this.operandb = 12;
    }
    add() {
        return this.operanda + this.operandb;
    }

    subtract() {
        return this.operanda - this.operandb;
    }
}

Calculator.prototype.multiply = function() {
    return this.operanda * this.operandb;
};

exports.Calculator = Calculator;
