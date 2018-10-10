import Account from './account';
import Print from './printStatement';

var account;

beforeEach(() => {
    account = new Account();
});

describe('initialise bank account', () => {
    test('initial account balance 0', () => {
        expect(account.balance).toBe(0);
    });

    test('initial deposit of £100', () => {
        let account = new Account(100);
        expect(account.balance).toBe(100);
    });
});

describe('#deposit', () => {
    test('make a deposit', () => {
        account.deposit(50)
        expect(account.balance).toBe(50);
    });

    test('make a deposit with a negative amount', () => {
        expect(function() {
            account.deposit(-50)
        }).toThrow();
    });
});

describe('#wihdraw', () => {
    test('make a withdrawal', () => {
        account.deposit(50);
        account.withdraw(40);
        expect(account.balance).toBe(10);
    });
    
    test('withdraw more than account balance throws an error', () => {
        account.deposit(50);
        expect(function() {
            account.withdraw(60)
        }).toThrow();
    });
});

describe('#transactions', () => {
    beforeAll(() => {
        Date.prototype.toLocaleDateString = jest.fn();
        Date.prototype.toLocaleDateString
            .mockReturnValue("31/10/2018");
    })
    test('new bank account transactions', () => {
        expect(account.transactions).toEqual(
            [{
                date: '31/10/2018', 
                credit: 0, 
                debit: 0, 
                balance: 0
            }]
        );
    });

    test('check several transactions', () => {
        account.deposit(10);
        account.withdraw(5);
        expect(account.transactions).toEqual(
            [
                {
                    date: '31/10/2018', 
                    credit: 0, 
                    debit: 0, 
                    balance: 0
                },
                {
                    date: '31/10/2018', 
                    credit: 10, 
                    debit: 0, 
                    balance: 10
                },
                {
                    date: '31/10/2018', 
                    credit: 0, 
                    debit: 5, 
                    balance: 5
                },
            ]
        );
    });
});


