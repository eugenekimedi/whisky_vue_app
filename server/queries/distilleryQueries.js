const { pool } = require('../config')

const getDistilleries = (request, response) => {
    pool.query('SELECT * FROM distilleries ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const getDistilleryById = (request, response) => {
    const id = parseInt(request.params.id)
    pool.query(`SELECT * FROM distilleries WHERE id = ${id}`, (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const createDistillery = (request, response) => {
    const { name, region_id, lat, long, image_url} = request.body
    pool.query('INSERT INTO distilleries (name, region_id, lat, long, image_url) VALUES ($1, $2, $3, $4, $5) RETURNING id', [name, region_id, lat, long, image_url], (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).send(`Distillery added with ID: ${results.rows[0].id}`)
    })
}
  
const updateDistillery = (request, response) => {
    const id = parseInt(request.params.id)
    const { name, region_id, lat, long, image_url } = request.body

    pool.query(
        'UPDATE distilleries SET (name, region_id, lat, long, image_url) = ($1, $2, $3, $4, $5) WHERE id = $6',
        [name, region_id, lat, long, image_url, id],
        (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send(`Distillery modified with ID: ${id}`)
        }
    )
}
  
const deleteDistillery = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('DELETE FROM distilleries WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send(`Distillery deleted with ID: ${id}`)
    })
}

module.exports = {
    getDistilleries,
    getDistilleryById,
    createDistillery,
    updateDistillery,
    deleteDistillery
}