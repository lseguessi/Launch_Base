// O modal deve conter um iframe que busca a página do curso 
// (dica: basta adicionar starter, launchbase ou gostack ao final de 
// https://rocketseat.com.br/). Além do botão de fechar o modal, é 
// preciso implementar a funcionalidade de maximizar o modal 
// (dica: utilize a mesma lógica implementada para fechar o modalOverlay, 
// mas trabalhe com a classe modal e utilize o método contains do 
// classList para verificar se o elemento está ou não com a classe maximize).

const modalOverlay = document.querySelector('.modal-overlay');
const modal = document.querySelector('.modal');
const cards = document.querySelectorAll('.card');


//Abrir modal 
for (let card of cards) {
    card.addEventListener('click', function() {
        const link_id = card.getAttribute('id')
        modalOverlay.classList.add('active')
        modalOverlay.querySelector('iframe').src = `https://rocketseat.com.br/${link_id}`
    })
}

//Fechar modal
document.querySelector('.close-modal').addEventListener('click', function() {
    modalOverlay.classList.remove('active')
    modalOverlay.querySelector('iframe').src = ""
})

//maximizar modal
document.querySelector('.modal').addEventListener('click', function() {
    if (modal.classList.contains('maximize')) {
        modal.classList.remove('maximize')
    } else {
        modal.classList.add('maximize')
    }
})