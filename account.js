// import Printer from './printStatement';
const Printer = require('./printStatement.js')

module.exports = class Account {
    constructor(balance = 0, printer = new Printer()) {
        this._balance = balance;
        this._printer = printer;
        this._transactions = [];
        this.transaction();
    }
    get balance() {
        return this._balance;
    }

    deposit(amount) {
        if (amount < 0) {
            throw new Error('Deposit must be higher than 0');
        }
        this._balance += amount;
        this.transaction(amount);
    }

    withdraw(amount) {
        if (amount > this.balance) {
            throw new Error('Cannot withdraw more than account balance');
        }
        this._balance -= amount;
        this.transaction(0, amount);
    }

    transaction(credit = 0, debit = 0) {
        let individualTransaction = {
            date: new Date().toLocaleDateString(),
            credit,
            debit,
            balance: this.balance 
        }
        this._transactions.push(individualTransaction);
    }

    get transactions() {
        return this._transactions;
    }

    get statement() {
        return this._printer.statement(this._transactions);
    }
}


// export default Account;