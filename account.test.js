import Account from './account';

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

describe('#date', () => {
    beforeAll(() => {
        Date.prototype.toLocaleDateString = jest.fn();
    });
    beforeEach(() => {
        Date.prototype.toLocaleDateString
            .mockReturnValueOnce("31/10/2018")
            .mockReturnValueOnce("05/11/2018")
            .mockReturnValueOnce("10/12/2018")
    });
    test('new date string', () => {
        expect(account.date()).toBe("31/10/2018");
    });

    // date credit debit balance
    test('new bank account', () => {
        expect(account.statement).toEqual(
            [{
                date: "31/10/2018", 
                credit: '', 
                debit: '', 
                balance: 0
            }]
        );
    });
});


