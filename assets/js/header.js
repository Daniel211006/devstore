//menu hambuerguer
let menuBurguer = document.querySelector('.menu-burguer');
let headerMenu = document.querySelector('.header-menu');
//evento click para mostrar e esconder o menu hamburguer
menuBurguer.addEventListener('click', ()=>{
    if(headerMenu.computedStyleMap.display==='block'){
        headerMenu.computedStyleMap.display = 'none'
        menuBurguer.classList.remove('active');
    }else{
        headerMenu.computedStyleMap.display='block';
        menuBurguer.classList.add('active');
    }
});