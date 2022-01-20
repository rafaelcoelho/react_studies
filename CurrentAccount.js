import {Client} from './Client.js'

export class CurrentAccount {
  constructor (client, accountNumber) {
    if (!client instanceof Client || !accountNumber)
      return
    
    this._accountNumber = accountNumber
    this._client = client
    this._balanceValue = 0
  }
  
  get balanceValue() {
    return this._balanceValue
  }

  get client() {
    return this._client
  }

  get accountNumber() {
    return this.accountNumber
  }

  debit(value) {
    if (value > this._balanceValue)
      return
    
    this._balanceValue -= value
    return balanceValue
  }

  credit(value) {
    if (value < 1)
      return

    this._balanceValue += value
    return this.balanceValue
  }
}