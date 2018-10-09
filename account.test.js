import Account from './account';

var account;

beforeEach(() => {
    account = new Account();
});

test('initial account balance 0', () => {
    expect(account.balance).toBe(0);
});

describe('account opened with different initial deposit', () => {
    test('initial deposit of £100', () => {
        let account = new Account(100);
        expect(account.balance).toBe(100);
    });
})

test('make a deposit', () => {
    account.deposit(50)
    expect(account.balance).toBe(50);
});

test('make a deposit with a negative amount', () => {
    expect(function() {
        account.deposit(-50)
    }).toThrow();
});

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