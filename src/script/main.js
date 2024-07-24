function initHeightNavigation(){
    const navHeader = document.querySelector('#nav-header');
    
    if(navHeader){
        const heightHeader = document.querySelector('header').offsetHeight;
        navHeader.style.top = heightHeader + 'px';
    }
}
initHeightNavigation();

function initNavigationMobile(){
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
initNavigationMobile();

function initOffsetTopSectionHero(){
    const sectionHero = document.querySelector('#section-hero');
    
    if(sectionHero){
        const heightHeader = document.querySelector('header').offsetHeight;
        sectionHero.style.marginTop = heightHeader + 'px';
    }
}
initOffsetTopSectionHero();

function initScrollHeader(){
    function scrollHeader() {
        const bgHeader = document.querySelector('header');
    
        if(bgHeader){
            const scrollPosition = window.scrollY;
        
            if (scrollPosition >= 20) {
                bgHeader.classList.add('scrollded');
            } else {
                bgHeader.classList.remove('scrollded');
            }
        }
    }
    
    window.addEventListener('scroll', scrollHeader);
}
initScrollHeader();

function initSectionOffsetTop(){
    const sections = Array.from(document.querySelectorAll('section'))
    const heightHeader = document.querySelector('header').offsetHeight;
    
    sections.forEach((section)=>{
        section.style.marginTop = heightHeader + 'px';
    });
}
initSectionOffsetTop();