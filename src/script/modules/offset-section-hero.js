// Função que delimita a margem do topo da seção Hero ao Header
export default function initOffsetTopSectionHero(){
    const sectionHero = document.querySelector('#section-hero');
    
    if(sectionHero){
        const heightHeader = document.querySelector('header').offsetHeight;
        sectionHero.style.marginTop = heightHeader + 'px';
    }
}