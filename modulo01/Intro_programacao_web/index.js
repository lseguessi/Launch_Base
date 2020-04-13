const classA = [
    {
        name: 'Lucas',
        grade: 1.8
    },
    {
        name: 'Diego',
        grade: 8
    },
    {
        name: 'Fulano',
        grade: 5
    },
    {
        name: 'Mais um student',
        grade: 10
    },
]

const classB = [
    {
        name: 'Cleiton',
        grade: 6
    },
    {
        name: 'Robson',
        grade: 9.8
    },
    {
        name: 'Siclano',
        grade: 2
    },
    {
        name: 'Novo Aluno',
        grade: 7
    },
]

function calculateAverage(students) {
    let sum = 0;

    for (let i = 0; i < students.length; i++) {
        sum = sum + students[i].grade
    }

    const average = sum / students.length

    return average
}

function sendMessage(average, turma) {
    if (average > 5) {
        console.log(`${turma} Average: ${average}. Congrats`)
    } else {
        console.log(`${turma} Average: ${average}. Is not good.`)
    }
}

function markAsFlunked(student) {
    student.flunked = false

    if (student.grade < 5) {
        student.flunked = true
    }
}

function sendFlunkedMessage(student) {
    if (student.flunked) {
        console.log(`The student ${student.name} is flunked`)
    }
}

function studentReprovados(students) {
    for (let student of students) {
        markAsFlunked(student)
        sendFlunkedMessage(student)
    }
}

const average1 = calculateAverage(classA)
const average2 = calculateAverage(classB)

sendMessage(average1, 'Class A')
sendMessage(average2, 'Class B')

studentReprovados(classA)
studentReprovados(classB)