function logoutPage() {
  const btn = document.querySelector('.cabecalho__btn-logout')

  btn.addEventListener('click', event => {
    event.preventDefault()

    window.location.assign('src/pages/loginCadastro.html')
    localStorage.clear()
  })
}
logoutPage()
