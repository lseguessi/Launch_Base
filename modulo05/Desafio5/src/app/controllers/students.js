const { grade, date, age } = require('../../lib/utils')
const Student = require('../models/student')


module.exports = {

    index(req,res){
        
        Student.all(function(students){
            return res.render('students/index', { students })
        })

    },
    create(req,res){

        Student.teacherSelectOption(function(option){
            return res.render('students/create', { teacherOption: option })
        })

    },
    post(req,res){
        const keys = Object.keys(req.body)

        for (key of keys) {
            if (req.body[key] == "") {
                return res.send('Por favor preencha todos os campos')
            }
        }            

        Student.create(req.body, function(student){
            return res.redirect(`students/${student.id}`)
        })

    },
    show(req,res){
        
        Student.show(req.params.id, function(student){
            if(!student) return res.send('Teacher not found !')

            student.age = age(student.birth_date)
            //student.class_year = grade(student.class_year)
            student.created_at = date(student.created_at).iso2

            return res.render('students/show', { student })
        })

    },
    edit(req,res){

        Student.show(req.params.id, function(student){
            if(!student) return res.send('Teacher not found !')

            student.birth_date = date(student.birth_date).iso
            student.class_year = grade(student.class_year)

            Student.teacherSelectOption(function(option){
                return res.render('students/edit', { student, teacherOption: option })
            })
        })

    },
    put(req,res){
        const keys = Object.keys(req.body)

        for (key of keys) {
            if (req.body[key] == "") {
                return res.send('Por favor preencha todos os campos')
            }
        }

        Student.update(req.body, function(student){
            return res.redirect(`students/${req.body.id}`)
        })

    },
    delete(req,res){
        
        Student.delete(req.body.id, function(){
            return res.redirect('students')
        })

    }

}
