import {Client} from '../Customers/Client.js'

export class Account {
  #accountNumber
  #client

  constructor (client, accountNumber) {
    if (this.constructor == Account)
      throw new Error('The Account class is abstract and instances is not allowed')

    if (!client instanceof Client || !accountNumber)
      return
    
    this.#accountNumber = accountNumber
    this.#client = client
    this._balanceValue = 0
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

  get balanceValue() {
    return this._balanceValue
  }

  get client() {
    return this.#client
  }

  get accountNumber() {
    return this.accountNumber
  }

  withdraw(value) {}
}