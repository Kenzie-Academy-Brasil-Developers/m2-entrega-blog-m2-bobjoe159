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
    console.log(user['username'])
    const div = document.createElement('div')
    const img = document.createElement('img')
    const divTituloPost = document.createElement('div')
    const divh3 = document.createElement('h3')
    const divTexto = document.createElement('div')
    const divData = document.createElement('div')
    div.classList.add('container__card-posts')
    img.classList.add('container__card-posts__img')
    divTituloPost.classList.add('container__card-posts__titulo-texto')
    divh3.classList.add('container__card-posts__titulo')
    divTexto.classList.add('container__card-posts__texto')
    divData.classList.add('container__card-posts__data')

    div.append(img, divTituloPost, divData)
    divTituloPost.append(divh3, divTexto)

    img.src = `${user['avatarUrl']}`
    divh3.innerHTML = `${user['username']}`
    divTexto.innerHTML = `${content}`
    return div
  }
}
