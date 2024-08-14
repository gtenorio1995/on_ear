// Função que limita a distância do menu de navegação ao Header
export default function initHeightNavigation(){
    const navHeader = document.querySelector('#nav-header');
    
    if(navHeader){
        const heightHeader = document.querySelector('header').offsetHeight;

        const media320 = window.matchMedia('(min-width: 320px) and (max-width: 767px)').matches;
        const media768 = window.matchMedia('(min-width: 768px)').matches;

        if(media320){
            navHeader.style.top = heightHeader + 'px';
        }else if(media768){
            navHeader.style.top = 0;
        }
    }
}