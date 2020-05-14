const fs = require('fs')
const Intl = require('Intl')
const data = require('./data.json')
const {age, date, graduation, classes} = require('./utils')

//show
exports.show = function(req, res){
    //req.params.id = /:id

    //recupera id do parametro
    const {id} = req.params

    //Verifica se o ID digitado existe no arquivo data.json
    const foundTeacher = data.teachers.find(function(teacher){
        return teacher.id == id
    })

    if(!foundTeacher) return res.send('Tecaher not found !')

    //Desestruturar dados do retorno do arquivo data.json
    const teacher ={
        ...foundTeacher,
        age: age(foundTeacher.birth), // feito
        school: graduation(foundTeacher.school), 
        classes: classes(foundTeacher.classes),
        follow: foundTeacher.follow.split(","),
        created_at: new Intl.DateTimeFormat('pt-BR').format(foundTeacher.created_at),
    }

    return res.render('teachers/show', {teacher})

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