export class Modal {
  static showModalDelete() {
    const modalBtn = document.querySelectorAll(
      '.container__card-posts__editar-post__remover'
    )
    const modal = document.querySelector('.modal__delete-post')
    const modalBg = document.querySelector('.modalBackground')
    modalBtn.forEach(btn => {
      btn.addEventListener('click', () => {
        window.scrollTo(0, 0)
        localStorage.setItem('itemId', btn.id)
        modal.classList.toggle('hidden')
        modalBg.classList.toggle('hidden')
      })
    })
  }

  static closeModalDelete() {
    const closeBtn = document.querySelector('.modal__delete-button')
    const modal = document.querySelector('.modal__delete-post')
    const modalBg = document.querySelector('.modalBackground')

    closeBtn.addEventListener('click', () => {
      modal.classList.add('hidden')
      modalBg.classList.add('hidden')
    })
  }

  static showEditModal() {
    const modalBtn = document.querySelectorAll(
      '.container__card-posts__editar-post__editar'
    )
    const modal = document.querySelector('.modal__edit-post')
    const modalBg = document.querySelector('.modalBackground')
    modalBtn.forEach(btn => {
      btn.addEventListener('click', () => {
        window.scrollTo(0, 0)
        localStorage.setItem('itemId', btn.id)
        modal.classList.toggle('hidden')
        modalBg.classList.toggle('hidden')
      })
    })
  }

  static closeEditModal() {
    const modalBtn = document.querySelector('.modal__submit-button')
    const modal = document.querySelector('.modal__edit-post')
    const modalBg = document.querySelector('.modalBackground')

    modalBtn.addEventListener('click', () => {
      modal.classList.add('hidden')
      modalBg.classList.add('hidden')
    })
  }
}
