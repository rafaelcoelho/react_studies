import { Account } from "./Account.js"

export class CurrentAccount extends Account {
  constructor (client, accountNumber) {
    super(client, accountNumber)
  }

  withdraw(value) {
    if (value > this._balanceValue)
      return
    
    this._balanceValue -= value
    return value * 1.02
  }
}