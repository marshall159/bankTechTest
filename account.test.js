import Account from './account';

test('initial account balance 0', () => {
    let account = new Account();
    expect(account.balance).toBe(0);
});

test('account opened with an initial deposit of £100', () => {
    let account = new Account(100);
    expect(account.balance).toBe(100);
});

test('make a deposit', () => {
    let account = new Account();
    account.deposit(50)
    expect(account.balance).toBe(50);
});

test('make a deposit with a negative amount', () => {
    let account = new Account();
    expect(function() {
        account.deposit(-50)
    }).toThrow();
});