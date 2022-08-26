export class ApiRequests {
  static urlBase = 'https://blog-m2.herokuapp.com'

  static async newUser(body) {
    const newUser = await fetch(`${this.urlBase}/users/register`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(body)
    })
      .then(res => res.json())
      .catch(err => console.log(err))

    return newUser
  }
}
