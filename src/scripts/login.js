import { ApiRequests } from './requests.js'

class Login {
  static handleSignup() {
    const token = localStorage.getItem('token')

    if (token) {
      window.location.assign('../index.html')
    }

    const emailInput = document.getElementById('input-login__email')
    const passwordInput = document.getElementById('input-login__password')
    const btnLogin = document.getElementById('btn-login')

    btnLogin.addEventListener('click', async event => {
      event.preventDefault()

      const data = {
        email: emailInput.value,
        password: passwordInput.value
      }

      await ApiRequests.login(data)
    })
  }
}

Login.handleSignup()
