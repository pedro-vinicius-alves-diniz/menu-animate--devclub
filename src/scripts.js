const botao = document.querySelector('.menu-btn')
const sidebar = document.querySelector('.sidebar')
const content = document.querySelector('.content')
const background = document.querySelector('.background')


botao.addEventListener('click', () => {

    sidebar.classList.toggle('ativo')
    botao.classList.toggle('ativo')
    content.classList.toggle('ativo')
    background.classList.toggle('ativo')
    document.body.style.backgroundColor = sidebar.classList.contains('ativo') ? '#34495e' : '#ecf0f1'



})

background.addEventListener('click', () => {
    sidebar.classList.remove('ativo')
    botao.classList.remove('ativo')
    content.classList.remove('ativo')
    background.classList.remove('ativo')
    document.body.style.backgroundColor = sidebar.classList.contains('ativo') ? '#34495e' : '#ecf0f1'
})