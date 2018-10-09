import Account from './account';

test('initial account balance 0', () => {
    let account = new Account()
    expect(account.balance).toBe(0);
});
