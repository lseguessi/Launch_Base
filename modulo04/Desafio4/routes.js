const express = require('express')
const routes = express.Router()
const teachers = require('./teachers')

routes.get('/', function(req, res){
    return res.redirect('/teachers')
})

routes.get('/teachers', function(req, res){
    return res.render('teachers/index')
})

routes.get('/teachers/create', function(req, res){
    return res.render('teachers/create')
})

//show teachers
routes.get('/teachers/:id', teachers.show)

//Edit teachers
routes.get('/teachers/:id/edit', teachers.edit)

routes.post('/teachers', teachers.post)

router.put('teachers', teachers.put)

routes.get('/students', function(req, res){
    return res.send('Olá Estudante')
})

// routes.use(function(req, res){
//     return res.status(404).render('not-found')
// })

module.exports = routes