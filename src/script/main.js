function initHeightNavigation(){
    const navHeader = document.querySelector('#nav-header');
    
    if(navHeader){
        const heightHeader = document.querySelector('header').offsetHeight;
        navHeader.style.top = heightHeader + 'px';
    }
}

initHeightNavigation();

const btnMobile = document.querySelector('#menu-burguer');

if(btnMobile){
    function handleMenuBurguer(){
        const navHeader = document.querySelector('#nav-header');
        navHeader.classList.toggle('open-menu');
    }
    btnMobile.addEventListener('click', handleMenuBurguer)
}
