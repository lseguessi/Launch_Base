const fs = require('fs')
const Intl = require('Intl')
const data = require('./data.json')
const {age, date, graduation, classes} = require('./utils')

//Index
exports.index = function(req, res){
    return res.render('teachers/index', { teachers: data.teachers})
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
    const id = Number(data.teachers.length + 1)

    data.teachers.push({
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

        return res.redirect('/teachers')
    })
}

//Show
exports.show = function(req, res){
    //req.params.id = /:id

    const {id} = req.params

    const foundTeacher = data.teachers.find(function(teacher){
        return teacher.id == id
    })

    if(!foundTeacher) return res.send('Tecaher not found !')

    const teacher ={
        ...foundTeacher,
        age: age(foundTeacher.birth), // feito
        school: graduation(foundTeacher.school), //feito
        classes: classes(foundTeacher.classes), //feito
        follow: foundTeacher.follow.split(","), //feito
        created_at: new Intl.DateTimeFormat('pt-BR').format(foundTeacher.created_at), //feito
    }

    return res.render('teachers/show', { teacher })

}

//Edit
exports.edit = function(req, res){
    const { id } = req.params

    const foundTeacher = data.teachers.find(function(teacher){
        return teacher.id == id
    })

    if(!foundTeacher) return res.send('Tecaher not found !')

    const teacher = {
        ...foundTeacher,
        birth: date(foundTeacher.birth), 
        school: graduation(foundTeacher.school),
        classes: classes(foundTeacher.classes), 

    }

    return res.render('teachers/edit', { teacher })
}

//Put
exports.put = function(req, res) {
    const { id } = req.body
    let index = 0
    
    const foundTeacher = data.teachers.find(function(teacher, foundIndex) {
        if (id == teacher.id) {
            index = foundIndex
            return true
        }
    })

    if (!foundTeacher) {
        return res.send("Teacher not found.")
    }

    const teacher = {
        ...foundTeacher,
        ...req.body,
        birth: Date.parse(req.body.birth),
        id: Number(req.body.id)
    }

    data.teachers[index] = teacher

    fs.writeFile("data.json", JSON.stringify(data, null, 4), function(err) {
        if(err) return res.send("Write error.")

        return res.redirect(`/teachers/${id}`)
    })
}

//Delete
exports.delete = function(req, res){
    const {id} = req.body
    
    const filteredTeachers = data.teachers.filter(function(teacher){
        return teacher.id != id
    })

    data.teachers = filteredTeachers

    fs.writeFile('data.json', JSON.stringify(data, null, 2), function(err){
        if(err) return res.send('Write file error')
    })

    return res.redirect('/teachers')


}