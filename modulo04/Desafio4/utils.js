module.exports = {
    age: function(timestamp) { //timestamp = 679622400000

        //recupera valor da data de hoje
        const today = new Date()
        const birthDate = new Date(timestamp)

        //Recupera valores da data de nascimento digitado no cadastro
        //recupera idade
        let age = today.getFullYear() - birthDate.getFullYear()
        const month = today.getMonth() - birthDate.getMonth()

        if (month < 0 || month == 0 && today.getDate() < birthDate.getDate()) {
            age = age - 1
        }
        return age
    },

    date: function(timestamp) {
        const date = new Date(timestamp)

        const year = date.getUTCFullYear()
        const month = `0${date.getUTCMonth() + 1}`.slice(-2)
        const day = `0${date.getUTCDate()}`.slice(-2)

        return {
            day,
            month,
            year,
            iso: `${year}-${month}-${day}`,
            birthDay: `${day}-${month}`
        }
    },

    graduation: function(value) {
        let graduation = value
        switch (graduation) {
            case "middle_complet":
                return graduation = "Médio Completo"
            case "superior_complet":
                return graduation = "Superior Completo"
            case "master":
                return graduation = "Mestrado"
            case "doctor":
                return graduation = "Doutorado"
        }
    },

    classes: function(value) {
        let classes = value
        if (classes == "D") {
            return classes = "À Distância"
        } else {
            return classes = 'Presencial'
        }
    },

    grade: function(value) {

    }
}