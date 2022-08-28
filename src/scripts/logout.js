<<<<<<< HEAD
function logoutPage(){

    const btn =  document.querySelector('.cabecalho__btn-logout')

    btn.addEventListener('click', (event)=>{

=======
function logoutPage() {
  const btn = document.querySelector('.cabecalho__btn-logout')

  btn.addEventListener('click', event => {
>>>>>>> 07a1a0f1a7f89551a186b1350deec305fb348c3b
    event.preventDefault()

    window.location.assign('src/pages/loginCadastro.html')
    localStorage.clear()
<<<<<<< HEAD

})
}
logoutPage()
=======
  })
}
logoutPage()
>>>>>>> 07a1a0f1a7f89551a186b1350deec305fb348c3b
