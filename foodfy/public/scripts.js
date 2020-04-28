const receita = document.querySelectorAll('.card')

for(let i=0; i < receita.length; i++){
    receita[i].addEventListener('click', function(){
        window.location.href=`/receita/${i}`
    })
}

const visible = document.querySelectorAll('.showHide')

for(let i=0; i < visible.length; i++){
    visible[i].addEventListener('click', function(){
        document.querySelector('.list'+i).classList.toggle('hide-show')
    })

    if(document.querySelector('.list'+i).classList.contains('Esconder')){
        visible[i].innerHTML = 'Mostrar'
    }else{
        visible[i].innerHTML = 'Esconder'
    }
}

