// Funcionalidade do botão comprar na section hero.
export default function initButtonBuyHero(){
    const btnBuyHero = document.querySelector('#btn-add-cart');
    
    if(btnBuyHero){
        function handleClickBtnBuyHero(){
            const modal = document.querySelector('#modal-hero');
            modal.classList.add('modal_ativo')
        }
        btnBuyHero.addEventListener('click', handleClickBtnBuyHero)
    }
}