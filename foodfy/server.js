const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const recipes = require('./data')

server.use(express.static('public'))


server.set('view engine', 'njk')

nunjucks.configure('views', {
    express: server,
    autoescape: false,
    noCache: true
})

server.get('/', function(req, res){
    return res.render('index', {recipes})
})

server.get('/sobre', function(req, res){
    return res.render('sobre')
})

server.get('/receitas', function(req, res){
    return res.render('receitas', {recipes})
})

server.get('/receita/:index', function(req, res){
    const recipeIndex = req.params.index

    return res.render('receita', {recipe :recipes[recipeIndex]})     
})

//Rota para página não encontrada (não existe)
server.use(function(req, res){
    return res.status(404).render('not-found')
})

//Definindo uma porta para o servidor:
server.listen(5000, function(){
    console.log('server is running, Go Forest, Go!')
})