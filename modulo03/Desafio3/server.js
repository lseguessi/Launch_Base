const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const contents = require('./data')

server.use(express.static('public'))

server.set('view engine', 'njk')

nunjucks.configure('views', {
    express: server
})

//Renderiza o arquivo sobre.html --> localhost:5000/
server.get('/', function(req, res){
    const about = {
        img: "https://www.flaticon.com/premium-icon/icons/svg/2822/2822812.svg",
        name: "Seguetech",
        description: "Ajudaremos você a atingir seu objetico.Trabalhamos com as melhores tecnologias.",
        techs: [
            {name: "HTML 5"},
            {name: "CSS 3"},
            {name: "JAVASCRIPT"},
            {name: "REACT"},
            {name: "REACT NATIVE"},
            {name: "NODEJS"}
        ]
    }

    return res.render('sobre', {about})
})

//Renderiza o arquivo conteudos.html --> localhost:5000/conteudos
server.get('/conteudos', function(req, res){
    return res.render('conteudos', {content: contents})
})

//Renderiza o arquivo not-found.html --> localhost:5000/conteudos
server.use(function(req, res){
    return res.status(404).render('not-found')
})

server.listen(5000, function(){
    console.log('server is running')
})
