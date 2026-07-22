const accountId = "144553"
let accountEmail = "shouryav019@gmail.com"
var accountPassword = "12345"
accountCity = "Kanpur"
let accountState

//accountId = 2

/* prefer not to use var
because of issue in block scope and functional scope
*/

console.log(accountId);

accountEmail = "sh@123"
accountPassword = "245"
accountCity = "sultanpur"

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])


