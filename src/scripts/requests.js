export class ApiRequests {
  static urlBase = 'https://blog-m2.herokuapp.com'
  static token = localStorage.getItem('token') || ''
  static headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${this.token}`
  }

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

  static async login(body) {
    const userLogin = await fetch(`${this.urlBase}/users/login`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(body)
    })
      .then(res => res.json())
      .then(res => {
        localStorage.setItem('userId', res.userId)
        localStorage.setItem('token', res.token)
        window.location = '/index.html'
      })
      .catch(err => console.log(err))

    return userLogin
  }

  static async getAllPosts() {
    const posts = await fetch(`${this.urlBase}/posts?page=1`, {
      method: 'GET',
      headers: this.headers
    })
      .then(res => res.json())
      .catch(err => console.log(err))
    return posts
  }

  static async createPosts(data) {
    const createPost = await fetch(`${this.urlBase}/posts`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .catch(err => console.log(err))
    return createPost
  }

  static async updatePosts(data, id) {
    const updatePost = await fetch(`${this.urlBase}/posts/${id}`, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .catch(err => console.log(err))
    return updatePost
  }

  static async deletePosts(id) {
    console.log(id)
    const deletePost = await fetch(`${this.urlBase}/posts/${id}`, {
      method: 'DELETE',
      headers: this.headers
    })
      .then(res => res.json())
      .catch(err => console.log(err))

    return deletePost
  }
}
