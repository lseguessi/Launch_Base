const fs = require('fs')
const Intl = require('Intl')
const data = require('../data.json')
const {age, date, graduation, classes} = require('../utils')

//Index
exports.index = function(req, res){
    return res.render('students/index', { students: data.students})
}
//Create data
exports.post = function(req, res){
    const keys = Object.keys(req.body)

    for(key of keys){
        if(req.body[key] == ""){
            return res.send('Por favor preencha todos os campos')
        }
    }

    let {avatar_url, name, birth, school, follow, classes} = req.body

    birth = Date.parse(birth)
    const created_at = Date.now()
    const id = Number(data.students.length + 1)

    data.students.push({
        id,
        avatar_url,
        name,
        birth,
        school,
        classes,
        follow,
        created_at
    })

    fs.writeFile('data.json', JSON.stringify(data, null, 2), function(err){
        if(err) return res.send('Write file error!')

        return res.redirect('/students')
    })
}
//Show
exports.show = function(req, res){
    //req.params.id = /:id

    const {id} = req.params

    const foundTeacher = data.students.find(function(student){
        return student.id == id
    })

    if(!foundTeacher) return res.send('Tecaher not found !')

    const student ={
        ...foundTeacher,
        age: age(foundTeacher.birth), // feito
        school: graduation(foundTeacher.school), //feito
        classes: classes(foundTeacher.classes), //feito
        follow: foundTeacher.follow.split(","), //feito
        created_at: new Intl.DateTimeFormat('pt-BR').format(foundTeacher.created_at), //feito
    }

    return res.render('students/show', { student })

}
//Edit
exports.edit = function(req, res){
    const { id } = req.params

    const foundTeacher = data.students.find(function(student){
        return student.id == id
    })

    if(!foundTeacher) return res.send('Tecaher not found !')

    const student = {
        ...foundTeacher,
        birth: date(foundTeacher.birth), 
        school: graduation(foundTeacher.school),
        classes: classes(foundTeacher.classes), 

    }

    return res.render('students/edit', { student })
}
//Put
exports.put = function(req, res) {
    const { id } = req.body
    let index = 0
    
    const foundTeacher = data.students.find(function(student, foundIndex) {
        if (id == student.id) {
            index = foundIndex
            return true
        }
    })

    if (!foundTeacher) {
        return res.send("Teacher not found.")
    }

    const student = {
        ...foundTeacher,
        ...req.body,
        birth: Date.parse(req.body.birth),
        id: Number(req.body.id)
    }

    data.students[index] = student

    fs.writeFile("data.json", JSON.stringify(data, null, 4), function(err) {
        if(err) return res.send("Write error.")

        return res.redirect(`/students/${id}`)
    })
}
//Delete
exports.delete = function(req, res){
    const {id} = req.body
    
    const filteredTeachers = data.students.filter(function(student){
        return student.id != id
    })

    data.students = filteredTeachers

    fs.writeFile('data.json', JSON.stringify(data, null, 2), function(err){
        if(err) return res.send('Write file error')
    })

    return res.redirect('/students')


}