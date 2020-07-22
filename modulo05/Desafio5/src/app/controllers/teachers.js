const Intl = require('Intl')
const { grade, date, age, graduation, classes } = require('../../lib/utils')
const teacher = require('../models/teacher')


module.exports = {

    index(req,res){
        
        const {filter} = req.query

        if( filter ){
            teacher.findBy(filter, function(teachers){
                return res.render('teachers/index', { teachers, filter })
            })
        } else{
            teacher.all(function(teachers){
                return res.render('teachers/index', { teachers })
            })
        }

    },
    create(req,res){
        return res.send('teachers/create')
    },
    post(req,res){
        const keys = Object.keys(req.body)

        for (key of keys) {
            if (req.body[key] == "") {
                return res.send('Por favor preencha todos os campos')
            }
        }            

        teacher.create(req.body, function(teacher){
            return res.redirect(`teachers/${teacher.id}`)
        })

    },
    show(req,res){
        
        teacher.show(req.params.id, function(teacher){
            if(!teacher) return res.send('Teacher not found !')

            teacher.age = age(teacher.birth_date)
            teacher.school = graduation(teacher.education_level)
            teacher.classes = classes(teacher.class_type)
            teacher.follow = teacher.subjects_taught.split(",")
            teacher.created_at = date(teacher.created_at).iso2

            return res.render('teachers/show', { teacher })
        })

    },
    edit(req,res){

        teacher.show(req.params.id, function(teacher){
            if(!teacher) return res.send('Teacher not found !')

            teacher.birth_date = date(teacher.birth_date).iso2
            teacher.school = graduation(teacher.education_level)
            teacher.classes = classes(teacher.class_type)
            teacher.follow = teacher.subjects_taught.split(",")
            teacher.created_at = date(teacher.created_at).iso2

            return res.render('teachers/edit', { teacher })
        })

    },
    put(req,res){
        const keys = Object.keys(req.body)

        for (key of keys) {
            if (req.body[key] == "") {
                return res.send('Por favor preencha todos os campos')
            }
        }

        teacher.update(req.body, function(teacher){
            return res.redirect(`teachers/${req.body.id}`)
        })

    },
    delete(req,res){
        
        teacher.delete(req.body.id, function(){
            return res.redirect('teachers')
        })

    }

}
