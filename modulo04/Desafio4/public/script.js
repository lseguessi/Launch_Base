const cards = document.querySelectorAll('.card');


//Abrir modal 
for (let card of cards) {
    card.addEventListener('click', function() {
        const course_id = card.getAttribute('id')
        window.location.href=`/courses?id=${course_id}`
    })
}