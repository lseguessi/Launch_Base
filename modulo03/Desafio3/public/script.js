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
    }
    else{
        modal.classList.add('maximize')
    }
})