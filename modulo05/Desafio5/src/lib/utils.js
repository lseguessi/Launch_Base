module.exports = {
    age: function (timestamp) { //timestamp = 679622400000

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

    date: function (timestamp) {
        const date = new Date(timestamp)

        const year = date.getUTCFullYear()
        const month = `0${date.getUTCMonth() + 1}`.slice(-2)
        const day = `0${date.getUTCDate()}`.slice(-2)

        return {
            day,
            month,
            year,
            iso: `${year}-${month}-${day}`,
            iso2: `${day}/${month}/${year}`,
            birthDay: `${day}-${month}`
        }
    },

    graduation: function (value) {
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

    classes: function (value) {
        let classes = value
        if (classes == "D") {
            return classes = "À Distância"
        } else {
            return classes = 'Presencial'
        }
    },

    grade: function (value) {
        let class_year = value
        switch (class_year) {
            case "5ef":
                return class_year = "5° Ano Ensino Fundamental"
            case "6ef":
                return class_year = "6° Ano Ensino Fundamental"
            case "7ef":
                return class_year = "7° Ano Ensino Fundamental"
            case "8ef":
                return class_year = "8° Ano Ensino Fundamental"
            case "1em":
                return class_year = "1° Ano Ensino Médio"
            case "2em":
                return class_year = "2° Ano Ensino Médio"
            case "3em":
                return class_year = "3° Ano Ensino Médio"
        }
    }
}