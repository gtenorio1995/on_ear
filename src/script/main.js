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

function initScrollLinkInternos(){
    const linksInternos = Array.from(document.querySelectorAll('#nav-header a[href^="#"]'));
    
    if(linksInternos){
        function handleClickLink(e){
            e.preventDefault();
            const hrefLink = e.target.getAttribute('href');
            const headerHeight = document.querySelector('header').offsetHeight;
            const section = document.querySelector(hrefLink);
            const sectionPosition = section.offsetTop - headerHeight;
            
            window.scrollTo({
                top: sectionPosition,
                behavior: 'smooth',
            })
        }
        
        linksInternos.forEach((link)=>{
            link.addEventListener('click', handleClickLink)
        })
    }
}
initScrollLinkInternos();









let currentIndex = 0;

function showSlide(index) {
    const slides = Array.from(document.querySelectorAll('.models__carousel-item'));
    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }
    const offset = -currentIndex * 100;
    const tela = window.innerWidth;
    document.querySelector('#models-carousel-inner').style.transform = `translateX(${offset}%)`;
}

const btnPrev = document.querySelector('#models-btn-prev');
const btnNext = document.querySelector('#models-btn-next');

function prevSlide(){
    showSlide(currentIndex - 1);
}

function nextSlide(){
    showSlide(currentIndex + 1);
}

btnPrev.addEventListener('click', prevSlide);
btnNext.addEventListener('click', nextSlide);

setInterval(nextSlide, 3000);
