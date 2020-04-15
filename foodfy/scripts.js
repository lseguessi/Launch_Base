const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');

for (let card of cards) {
    card.addEventListener('click', function() {
        const imgId = card.getAttribute('id')
        const recipe = card.querySelector('.info-card h5').textContent
        const madeBy = card.querySelector('.by-name').textContent
        modalOverlay.classList.add('active')

        console.log(recipe)
            //seleciona a tag img e adiciona o caminho /assets/pizza.png
        modalOverlay.querySelector('img').src = `assets/${imgId}.png`
        modalOverlay.querySelector('h1').innerHTML = recipe
        modalOverlay.querySelector('h2').innerHTML = madeBy
    })
}


document.querySelector('.close-modal').addEventListener('click', function() {
    modalOverlay.classList.remove('active')
})