export class Render {
  static renderPostList(array) {
    const ul = document.querySelector('.container__card-pai')
    array.forEach(post => {
      const card = Render.renderCard(post)
      ul.appendChild(card)
    })
  }
  static renderCard(post) {
    
    const { id, content, createdAt, user } = post
    const li = document.createElement('div')
    const img = document.createElement('img')
    const divTituloPost = document.createElement('div')
    const divh3 = document.createElement('h3')
    const divTexto = document.createElement('div')
    const divData = document.createElement('div')
    const divEditRemove = document.createElement('div')
    const btnEdit = document.createElement('button')
    const btnRemove = document.createElement('button')
    const btnEditImg = document.createElement('img')
    const btnRemoveImg = document.createElement('img')


    li.classList.add('container__card-posts')
    img.classList.add('container__card-posts__img')
    divTituloPost.classList.add('container__card-posts__titulo-texto')
    divh3.classList.add('container__card-posts__titulo')
    divTexto.classList.add('container__card-posts__texto')

    divData.classList.add('container__card-posts__data')

    divEditRemove.classList.add('container__card-posts__editar-post')
    btnEdit.classList.add('container__card-posts__editar-post__editar')
    btnRemove.classList.add('container__card-posts__editar-post__remover')
    btnEditImg.src = `src/img/btnEditPost.svg`

    btnRemoveImg.src = `src/img/btnRemovePost.svg`


    btnEdit.append(btnEditImg)
    btnRemove.append(btnRemoveImg)

    divEditRemove.append(btnEdit, btnRemove)

    li.append(img, divTituloPost, divData, divEditRemove)
    divTituloPost.append(divh3, divTexto)

    img.src = `${user['avatarUrl']}`
    btnRemove.id = id
    btnEdit.id = id
    li.id = id
    li.key = id
    btnEditImg.id = id
    divh3.innerHTML = `${user['username']}`
    divTexto.innerHTML = `${content}`
    divData.innerText = ` ${createdAt.slice(8,10)}/${createdAt.slice(5,7)}/${createdAt.slice(0,4)}` 

    return li
  }
}
