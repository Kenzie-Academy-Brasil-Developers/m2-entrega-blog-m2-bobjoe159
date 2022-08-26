import { ApiRequests } from './requests.js'

class Signup {
  static createNewUser() {
    const userName = document.getElementById('input-cadastro__nome')
    const userEmail = document.getElementById('input-cadastro__email')
    const userPhoto = document.getElementById('input-cadastro__foto')
    const userPassword = document.getElementById('input-cadastro__foto')
    const btnCadastro = document.getElementById('btn-cadastro')

    btnCadastro.addEventListener('click', async function (event) {
      event.preventDefault()

      const data = {
        username: userName.value,
        email: userEmail.value,
        avatarUrl: userPhoto.value,
        password: userPassword.value
      }

      await ApiRequests.newUser(data)
    })
  }
}

Signup.createNewUser()
