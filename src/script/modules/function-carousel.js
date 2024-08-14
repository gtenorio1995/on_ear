// funcionalidade do carousel Specs em diversos Devices
export function initCarouselSpecsMediaDevice(){
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

// funcionalidade do carousel Models em diversos Devices
export function initCarouselModelsMediaDevice(){
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

// Funcionalidade do carousel da seção modelos
export function initCarouselCube(){
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