// Função que limita a distância do menu de navegação ao Header
function initHeightNavigation(){
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
initHeightNavigation();

function initButtonBuyHero(){
    const btnBuyHero = document.querySelector('#btn-add-cart');
    
    if(btnBuyHero){
        function handleClickBtnBuyHero(){
            const modal = document.querySelector('#modal-hero');
            modal.classList.add('modal_ativo')
        }
        btnBuyHero.addEventListener('click', handleClickBtnBuyHero)
    }
}
initButtonBuyHero();

// Funcionalidade do menu burguer.
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

// Função que delimita a margem do topo da seção Hero ao Header
function initOffsetTopSectionHero(){
    const sectionHero = document.querySelector('#section-hero');
    
    if(sectionHero){
        const heightHeader = document.querySelector('header').offsetHeight;
        sectionHero.style.marginTop = heightHeader + 'px';
    }
}
initOffsetTopSectionHero();

// Função que modifica a cor background do header
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

// Função de scroll dos links internos
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
            const headerOpen = document.querySelector('header');
            headerOpen.classList.toggle('open-menu');
            const navHeader = document.querySelector('#nav-header');
            navHeader.classList.toggle('open-menu');
            const btnMobile = document.querySelector('#menu-burguer');
            btnMobile.classList.toggle('open-menu');
        }
        
        linksInternos.forEach((link)=>{
            link.addEventListener('click', handleClickLink)
        })
    }
}
initScrollLinkInternos();

// funcionalidade do carousel Specs em diversos Devices
function initCarouselSpecsMediaDevice(){
    const mobile = window.matchMedia("(min-width: 320px) and (max-width: 599px)").matches;
    const tablet = window.matchMedia("(min-width: 600px) and (max-width: 1023px").matches;
    const desktop = window.matchMedia("(min-width: 1024px)").matches;

    if (mobile){
        // Specs Carousel
        let swiper = new Swiper(".specs-carousel", {
            slidesPerView: 1,
            spaceBetween: 0,
            grabCursor: true,
            effect: "creative",
            loop: true,
            creativeEffect: {
                prev: {
                    shadow: true,
                    translate: ["-20%", 0, -1],
                },
                next: {
                    translate: ["100%", 0, 0],
                },
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
                dynamicBullets: true,
            },
        });
        
    } else if(tablet){
        // Specs Carousel
        let swiper = new Swiper(".specs-carousel", {
            slidesPerView: 2,
            spaceBetween: 16,
            grabCursor: true,
            effect: "coverflow",
            loop: true,
            centeredSlides: true,
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
                dynamicBullets: true,
            },
        });
    } else if(desktop){
        // Specs Models
        let swiper = new Swiper(".specs-carousel", {
            slidesPerView: 3,
            spaceBetween: 16,
            grabCursor: true,
            effect: "coverflow",
            loop: true,
            centeredSlides: true,
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
                dynamicBullets: true,
            },
        });
    }
}
initCarouselSpecsMediaDevice();

// funcionalidade do carousel Models em diversos Devices
function initCarouselModelsMediaDevice(){
    const mobile = window.matchMedia("(min-width: 320px) and (max-width: 599px)").matches;
    const tablet = window.matchMedia("(min-width: 600px) and (max-width: 1023px").matches;
    const desktop = window.matchMedia("(min-width: 1024px)").matches;
    
    if(mobile){
        // Models Carousel
        let swiper = new Swiper(".models-carousel", {
            // slidesPerView: 1,
            effect: "cube",
            grabCursor: true,
            cubeEffect: {
              shadow: false,
              slideShadows: false,
              shadowOffset: 0,
              shadowScale: 0,
            },
            loop: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
                dynamicBullets: true,
            },
        });
    } else if(tablet){
        // Models Carousel
        let swiper = new Swiper(".models-carousel", {
            slidesPerView: 2,
            spaceBetween: 16,
            grabCursor: true,
            effect: "coverflow",
            loop: true,
            centeredSlides: true,
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
                dynamicBullets: true,
            },
        });
    } else if(desktop){
        // Models Models
        let swiper = new Swiper(".models-carousel", {
            slidesPerView: 3,
            spaceBetween: 16,
            grabCursor: true,
            effect: "coverflow",
            loop: true,
            centeredSlides: true,
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
                dynamicBullets: true,
            },
        });
    }
}
initCarouselModelsMediaDevice();

// Funcionalidade do carousel da seção modelos
function initCarouselCube(){
    var swiper = new Swiper(".mySwiper", {
        // slidesPerView: 1,
        effect: "cube",
        grabCursor: true,
        cubeEffect: {
          shadow: false,
          slideShadows: false,
          shadowOffset: 0,
          shadowScale: 0,
        },
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            dynamicBullets: true,
        },
    });
}
initCarouselCube();

// Função de scroll para os links do footer
function initScrollLinkFooter(){
    const linksFooter = Array.from(document.querySelectorAll('footer a[href^="#"]'));
    
    if(linksFooter){
        function handleClickLinkFooter(e){
            e.preventDefault();
            const hrefLink = e.target.getAttribute('href');
            const sectionLink = document.querySelector(hrefLink);
            const headerHeight = document.querySelector('header').offsetHeight;
            const sectionPosition = sectionLink.offsetTop - headerHeight;
            
            window.scrollTo({
                top: sectionPosition,
                behavior: "smooth",
            })
            
        }
    
        linksFooter.forEach((link)=>{
            link.addEventListener('click', handleClickLinkFooter)
        })
    }
}

initScrollLinkFooter();