const db = require('../../config/db')
const { date } = require('../../lib/utils')

module.exports = {

    all(callback){

        db.query(`SELECT * FROM students ORDER BY name ASC`, function(err, results){
            if(err) throw 'Database error'

            callback(results.rows)
        })

    },

    create(data, callback){

        const query = `
        INSERT INTO students (
            avatar_url,
            name,
  			email,
            birth_date,
            class_year,
            hours,
            created_at
        ) VALUES ($1, $2, $3, $4, $5, $6, $7)
        RETURNING id
        `

        const values = [
            data.avatar_url,
            data.name,
            data.email,
            date(data.birth_date).iso,
            data.class_year,
            data.hours,
            date(Date.now()).iso
        ]

        db.query(query, values, function(err, results){
            if(err) throw `Data base error on create new item ${err}`

            callback(results.rows[0])
        })

    },

    show(id, callback){
        
        db.query(`SELECT * FROM students WHERE id = $1`, [id], function(err, results){
            if(err) throw `Data base error ${err}`

            callback(results.rows[0])
        })

    },

    update(data, callback){
        const query = `
            UPDATE students SET
                avatar_url=($1),
                name=($2),
                email=($3),
                birth_date=($4),
                class_year=($5),
                hours=($6)
            WHERE id = $7
        `
        const values = [
            data.avatar_url, 
            data.name,
            data.email,
            date(data.birth_date).iso,
            data.class_year,
            data.hours,
            data.id
        ]

        db.query(query, values, function(err, results){
            if(err) throw `Data base erro ${err}`

            callback()
        })

    },

    delete(id, callback){

        db.query(`DELETE FROM students WHERE id = $1`, [id], function(err, results){
                if(err) throw `Database error ${err}`

                callback()
            })

    }

}