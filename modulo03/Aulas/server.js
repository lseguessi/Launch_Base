const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const videos = require('./data')

server.use(express.static('public'))

server.set('view engine', 'njk')

nunjucks.configure('views', {
    express: server,
    autoescape: false,
    noCache: true
})

server.get('/', function (req, res) {
    const about = {
        avatar_url: "https://avatars0.githubusercontent.com/u/50502905?s=460&u=3e4e23a1095c04b1572305eb2829736e6a1bb98f&v=4",
        name: "Lucas Seguessi",
        role: "Desenvolvedor Full-Stack",
        description: 'Programador front-end, focado em trazer o melhor serviço para todas as empresas. Estudante na <a href="https://rocketseat.com.br" target="_blank">Rockeseat</a>',
        links: [
            { name: "GitHub", url: "https://github.com/lseguessi" },
            { name: "Facebook", url: "https://www.facebook.com/lucas.seguessi/" },
            { name: "LinkedIn", url: "https://www.linkedin.com/in/lucas-seguessi-801a1045/" }
        ]
    }


    return res.render('about', { about })
})

server.get('/portfolio', function (req, res) {

    return res.render('portfolio', { items: videos })
})

server.get('/video', function (req, res) {
    const id = req.query.id

    const video = videos.find(function (video) {
        return video.id == id
    })

    if (!video) {
        return res.send('Video not found!')
    }

    return res.render('video', { item: video })
})

server.listen(5000, function () {
    console.log('Server is running')
})