class Account {
    constructor(balance = 0) {
        this._balance = balance;
    }
    get balance() {
        return this._balance;
    }

    deposit(amount) {
        if (amount < 0) {
            throw new Error('Deposit must be higher than 0');
        }
        
        this._balance += amount;
    }

    withdraw(amount) {
        this._balance -= amount;
    }
}

export default Account;