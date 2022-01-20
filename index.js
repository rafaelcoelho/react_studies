import {Client} from './Customers/Client.js'
import { CurrentAccount } from './Accounts/CurrentAccount.js'
import { SavingAccount } from './Accounts/SavingAccount.js'
import { Account } from './Accounts/Account.js'

let account1 = new CurrentAccount(new Client("Steve", 12332154367), 123)
let account2 = new SavingAccount(new Client("Albert", 59889009867), 124)

account1.credit(10)
account2.credit(20)

console.log("1 Withdrawing: " + account1.withdraw(8))
console.log("2 Withdrawing: " + account2.withdraw(8))

console.log(account1)
console.log(account2)
