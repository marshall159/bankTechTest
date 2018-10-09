class Account {
    constructor(balance = 0) {
        this._balance = balance;
    }
    get balance() {
        return this._balance;
    }
}

export default Account;