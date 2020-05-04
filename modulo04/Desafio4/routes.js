const express = require('express')
const routes = express.Router()

routes.get('/', function(req, res){
    return res.redirect('/teachers')
})

routes.get('/teachers', function(req, res){
    return res.render('teachers/index')
})

routes.get('/students', function(req, res){
    return res.send('Olá Estudante')
})

routes.use(function(req, res){
    return res.status(404).render('not-found')
})

module.exports = routes