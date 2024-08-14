// Função que modifica a cor background do header
export function initScrollHeader(){
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

// Função de scroll dos links internos
export function initScrollLinkInternos(){
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

// Função de scroll para os links do footer
export function initScrollLinkFooter(){
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