import { Render } from './render.js'
import { ApiRequests } from './requests.js'

class Dashboard {
  static renderDash(posts) {
    const token = localStorage.getItem('token')
    const postList = document.querySelector('.container__card-pai')

    postList.innerHTML = ''

    if (!token) {
      window.location.assign('../../index.html')
    }
    Render.renderPostList(posts)
  }
}

const posts = await ApiRequests.getAllPosts()
Dashboard.renderDash(posts.data)
