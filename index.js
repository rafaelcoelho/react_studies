import {Client} from './Client.js'
import { CurrentAccount } from './CurrentAccount.js'

let account1 = new CurrentAccount(new Client("Steve", 12332154367), 123)
let account2 = new CurrentAccount(new Client("Albert", 59889009867), 124)

account1.credit(10)
account2.credit(20)

console.log(account1)
console.log(account2)
