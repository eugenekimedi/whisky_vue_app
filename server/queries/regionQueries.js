const { pool } = require('../config')

const getRegions = (request, response) => {
    pool.query('SELECT * FROM regions ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}
const getRegionById = (request, response) => {
    const id = parseInt(request.params.id)
    pool.query(`SELECT * FROM regions WHERE id = ${id}`, (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const createRegion = (request, response) => {
    const { name } = request.body
    pool.query('INSERT INTO regions (name) VALUES ($1) RETURNING id', [name], (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).send(`Region added with ID: ${results.rows[0].id}`)
    })
}
  
const updateRegion = (request, response) => {
    const id = parseInt(request.params.id)
    const { name } = request.body

    pool.query(
        'UPDATE regions SET name = $1 WHERE id = $2',
        [name, id],
        (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send(`Region modified with ID: ${id}`)
        }
    )
}
  
const deleteRegion = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('DELETE FROM regions WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send(`Region deleted with ID: ${id}`)
    })
}
module.exports = {
    getRegions,
    getRegionById,
    createRegion,
    updateRegion,
    deleteRegion,
}