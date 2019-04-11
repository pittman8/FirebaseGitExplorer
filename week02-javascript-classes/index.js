const utils = require('./utilities');
const State = require('./State');
const Calculator = require('./Calculator');

const myState = new State.State();
utils.divider('State');
utils.display(myState.stateName);
utils.display(myState.capital);
utils.display(myState.fullName());

const calculator = new Calculator.Calculator();
utils.divider('Calculator');
utils.display('Operanda: ' + calculator.operanda);
utils.display('Operandb: ' + calculator.operandb);
utils.display('Add: ' + calculator.add());
utils.display('Subtract: ' + calculator.subtract());
utils.display('Multiply: ' + calculator.multiply());
