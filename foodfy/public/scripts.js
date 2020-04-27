const show = document.querySelector('.show');
const cards = document.querySelectorAll('.card');
const ingredient = document.querySelector('.ingredients-list');

for (let card of cards) {
    card.addEventListener('click', function() {
        const recipe_id = card.getAttribute("id")
        window.location.href=`/receita?id=${recipe_id}`
    })
}

document.querySelector('.show').addEventListener('click', function(){
    ingredient.classList.toggle('hide')
})
