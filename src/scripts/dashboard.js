import { Modal } from './modals.js'
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
  static createPost() {
    const postName = document.querySelector('.container__card-input')
    const postAdd = document.querySelector('.container__btn-postar')

    postAdd.addEventListener('click', async event => {
      console.log(postName.value)
      event.preventDefault()
      const data = {
        content: postName.value
      }
      await ApiRequests.createPosts(data)
      postName.value = ''
      const posts = await ApiRequests.getAllPosts()
      this.renderDash(posts.data)
      Modal.showModalDelete()
      Modal.closeModalDelete()
      Modal.showEditModal()
      Modal.closeEditModal()
    })
  }

  static updatePosts() {
    const updateBtn = document.querySelector('.modal__submit-button')
    const inputValue = document.getElementById('modal__edit-input')

    updateBtn.addEventListener('click', async event => {
      event.preventDefault()
      const updateId = localStorage.getItem('itemId')
      const data = {
        content: inputValue.value
      }
      await ApiRequests.updatePosts(data, updateId)
      localStorage.removeItem('itemId')
      const posts = await ApiRequests.getAllPosts()
      this.renderDash(posts.data)
      inputValue.value = ''
      Modal.showEditModal()
      Modal.closeEditModal()
      Modal.showModalDelete()
      Modal.closeModalDelete()
    })
  }

  static deletePost() {
    const deleteModal = document.querySelector('.modal__delete-button')
    deleteModal.addEventListener('click', async event => {
      event.preventDefault()
      const itemId = localStorage.getItem('itemId')
      const itemNumber = Number(itemId)
      await ApiRequests.deletePosts(itemNumber)
      const posts = await ApiRequests.getAllPosts()
      this.renderDash(posts.data)
      Modal.showModalDelete()
      Modal.closeModalDelete()
    })
  }
}

const posts = await ApiRequests.getAllPosts()
Dashboard.renderDash(posts.data)
Modal.showModalDelete()
Modal.closeModalDelete()
Dashboard.createPost()
Modal.showEditModal()
Modal.closeEditModal()
Dashboard.updatePosts()
Dashboard.deletePost()
