const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

server.use(express.static('public'))

server.set('view engine', 'njk')

nunjucks.configure('views', {
    express: server,
    autoescape: false,
    noCache: true
})

server.get('/', function(req, res){
    return res.render('index')
})

//Rota para página não encontrada (não existe)
server.use(function(req, res){
    return res.status(404).render('not-found')
})

//Definindo uma porta para o servidor:
server.listen(5000, function(){
    console.log('server is running, Go Forest, Go!')
})