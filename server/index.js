const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const regionQueries = require('./queries/regionQueries')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

app.get('/', (req, res) => {
    res.json({hello: 'Hello World'})
})

app.get('/regions', regionQueries.getRegions)
app.get('/regions/:id', regionQueries.getRegionById)
app.post('/regions', regionQueries.createRegion)
app.put('/regions/:id', regionQueries.updateRegion)
app.delete('/regions/:id', regionQueries.deleteRegion)

app.listen(3000, () => {
    console.log(`App running on port 3000`)
})