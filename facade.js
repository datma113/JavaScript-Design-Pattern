function login(username, password) {
     //write complex logic here
     console.log(`login with: ${username} : ${password}`)
}

function register(username, password) {
      //write complex logic here
     console.log(`register with: ${username} : ${password}`)

}
function logout() {
      //write complex logic here
     console.log(`already logout...`)
}

function AuthService() {}

AuthService.prototype = {
     loginWithUsernameAndPassword: function(username, password) {
          login(username, password);
     },
     registerNewAccount: function(username, password) {
          register(username, password)
     },
     logout: function() {
          logout()
     }
}


const services = new AuthService()

services.registerNewAccount('user_1', '123456')
services.loginWithUsernameAndPassword('user_1', '123456')
services.logout()