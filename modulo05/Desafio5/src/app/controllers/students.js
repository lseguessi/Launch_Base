const Intl = require('Intl')
const { grade, date, age, graduation, classes } = require('../../lib/utils')
const student = require('../models/student')


module.exports = {

    index(req,res){
        
        student.all(function(students){
            return res.render('students/index', { students})
        })

    },
    create(req,res){
        return res.send('students/create')
    },
    post(req,res){
        const keys = Object.keys(req.body)

        for (key of keys) {
            if (req.body[key] == "") {
                return res.send('Por favor preencha todos os campos')
            }
        }            

        student.create(req.body, function(student){
            return res.redirect(`students/${student.id}`)
        })

    },
    show(req,res){
        
        student.show(req.params.id, function(student){
            if(!student) return res.send('Teacher not found !')

            student.age = age(student.birth_date)
            student.class_year = grade(student.class_year)
            student.created_at = date(student.created_at).iso2

            return res.render('students/show', { student })
        })

    },
    edit(req,res){

        student.show(req.params.id, function(student){
            if(!student) return res.send('Teacher not found !')

            student.birth_date = date(student.birth_date).iso2
            student.class_year = grade(student.class_year)
            student.created_at = date(student.created_at).iso2

            return res.render('students/edit', { student })
        })

    },
    put(req,res){
        const keys = Object.keys(req.body)

        for (key of keys) {
            if (req.body[key] == "") {
                return res.send('Por favor preencha todos os campos')
            }
        }

        student.update(req.body, function(student){
            return res.redirect(`students/${req.body.id}`)
        })

    },
    delete(req,res){
        
        student.delete(req.body.id, function(){
            return res.redirect('students')
        })

    }

}
