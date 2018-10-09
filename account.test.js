import Account from './account';

test('initial account balance 0', () => {
    let account = new Account();
    expect(account.balance).toBe(0);
});

test('account opened with an initial deposit of £100', () => {
    let account = new Account(100);
    expect(account.balance).toBe(100);
});