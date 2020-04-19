const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

server.use(express.static('public'))

server.set('view engine', 'njk')

nunjucks.configure('views', {
    express: server
})

//Renderiza o arquivo sobre.html --> localhost:5000/
server.get('/', function(req, res){
    return res.render('sobre')
})


//Renderiza o arquivo conteudos.html --> localhost:5000/conteudos
server.get('/conteudos', function(req, res){
    return res.render('conteudos')
})

server.listen(5000, function(){
    console.log('server is running')
})
