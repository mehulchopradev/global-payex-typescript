import { AccountType } from "./types";

export default class Account {

  static minBalance = 1000;

  constructor(private name: string, private type: AccountType, private balance: number) {}

  deposit(amt: number): number {
    this.balance += amt;
    return this.balance;
  }

  withdraw(amt: number): number {
    if (this.balance - amt < Account.minBalance) {
      throw new Error('Balance cannot go below 1000');
    }

    this.balance -= amt;
    return this.balance;
  }
}