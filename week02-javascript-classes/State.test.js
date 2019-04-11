const State = require('./State');
const state = new State.State();

test('proves that state name is Washington', () => {
    expect(state.stateName).toBe('Washington');
});

test('proves that capital name is Olympia', () => {
    expect(state.capital).toBe('Olympia');
});

test('proves that full name is Olympia, Washington', () => {
    expect(state.fullName()).toBe('Olympia, Washington');
});
