let divLinks = document.querySelector('.links')
let btnMenu = document.querySelector('.menu')
let btnClose = document.querySelector('.links .close')

let prodducts = document.querySelectorAll('.products div')

let titulo = document.querySelector('.product .info h1')
let image = document.querySelector('.product .image img')

btnMenu.addEventListener('click', () => {
    divLinks.classList.toggle('deactive')
    btnMenu.style.display = 'none';
})

btnClose.addEventListener('click', () => {
    divLinks.classList.toggle('deactive')
    btnMenu.style.display = 'block';
})

prodducts.forEach((product) => {
    product.addEventListener('click', () => {
        titulo.innerHTML = product.getAttribute('data-text');
        image.src = product.getAttribute('data-img');
        console.log(typeof(product.getAttribute('data-img')))
    })
})



