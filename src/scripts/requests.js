export class ApiRequests {
  static urlBase = 'https://blog-m2.herokuapp.com'

  static async newUser(body) {
    const newUser = await fetch(`${this.urlBase}/users/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    })
      .then(res => res.json())
      .catch(err => console.log(err))
    return newUser
  }

  static async login(body) {
    const useLogin = await fetch(`${this.urlBase}/users/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    })
      .then(res => res.json())
      .then(res => {
        localStorage.setItem('userId', res.userId)
        localStorage.setItem('token', res.token)
        window.location.assign('/index.html')
      })
      .catch(err => console.log(err))

    return useLogin
  }
}
