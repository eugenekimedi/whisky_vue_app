const { pool } = require('../config')

const getWhiskies = (request, response) => {
    pool.query('SELECT * FROM whiskies ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const getWhiskyById = (request, response) => {
    const id = parseInt(request.params.id)
    pool.query(`SELECT * FROM whiskies WHERE id = ${id}`, (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}


const createWhisky = (request, response) => {
    const { name, distillery_id, abv, image_url } = request.body
    pool.query('INSERT INTO whiskies (name, distillery_id, abv, image_url) VALUES ($1, $2, $3, $4) RETURNING id', [name, distillery_id, abv, image_url], (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).send(`Whisky added with ID: ${results.rows[0].id}`)
    })
}
  
const updateWhisky = (request, response) => {
    const id = parseInt(request.params.id)
    const { name, distillery_id, abv, image_url } = request.body

    pool.query(
        'UPDATE whiskies SET (name, distillery_id, abv, image_url) = ($1, $2, $3, $4) WHERE id = $5',
        [name, distillery_id, abv, image_url, id],
        (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send(`Whisky modified with ID: ${id}`)
        }
    )
}
  
const deleteWhisky = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('DELETE FROM whiskies WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send(`Whisky deleted with ID: ${id}`)
    })
}

module.exports = {
    getWhiskies,
    getWhiskyById,
    createWhisky,
    updateWhisky,
    deleteWhisky
}