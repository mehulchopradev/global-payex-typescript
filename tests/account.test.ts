import { describe, it, beforeEach, afterEach } from 'mocha';
import chai from 'chai';
import Account from '../bank/account';

const expect = chai.expect;

describe('Account test suite', () => {

  let account: Account;

  beforeEach(() => {
    // will execute before each test case that runs
    account = new Account('mehul chopra', 'Current', 8000);
  });

  afterEach(() => {
    // will execute after each test case finishes running
  });

  it('performs the deposit properly', () => {
    const actual = account.deposit(2000);
    expect(actual).to.equal(10000);
  });

  describe('Withdrawl test suite', () => {
    it('performs the withdrawl properly', () => {
      const actual = account.withdraw(2000);
      expect(actual).to.equal(6000);
    });
  
    it('throws an error if withdraw will cause low balance', () => {
      expect(function () {
        account.withdraw(7500)
      }).to.throw('Balance cannot go below 1000');
    });
  });
});