class State {
    constructor() {
        this.stateName = 'Washington';
        this.capital = 'Olympia';
    }

    fullName() {
        return this.capital + ', ' + this.stateName;
    }
}

exports.State = State;
