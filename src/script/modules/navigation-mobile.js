// Funcionalidade do menu burguer.
export default function initNavigationMobile(){
    const btnMobile = document.querySelector('#menu-burguer');
    
    if(btnMobile){
        function handleMenuBurguer(){
            const headerOpen = document.querySelector('header');
            const navHeader = document.querySelector('#nav-header');
            headerOpen.classList.toggle('open-menu');
            navHeader.classList.toggle('open-menu');
            btnMobile.classList.toggle('open-menu');
        }
        btnMobile.addEventListener('click', handleMenuBurguer)
    }
}