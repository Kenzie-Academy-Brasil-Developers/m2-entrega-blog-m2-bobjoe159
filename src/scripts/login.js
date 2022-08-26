import { ApiRequests } from "./requests"


class Login {
  static handleSignup(){

    const token = localStorage.getItem('token')

    if(token){

      window.location.assign('src/pages/index.html')

    }

    const emailInput = document.getElementById('input-login__email')
    const passwordInput = document.getElementById('input-login__password')
    const btnLogin = document.getElementById('btn-login')

    btnLogin.addEventListener('click', function(event){
      event.preventDefault()

      const data = {

        email: emailInput.value,
        password: passwordInput.value
      }

      ApiRequests.login(data)

    })



  }
}


Login.handleSignup()
