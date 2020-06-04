const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const regionQueries = require('./queries/regionQueries')
const distilleryQueries = require('./queries/distilleryQueries')
const whiskyQueries = require('./queries/whiskyQueries')

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

app.get('/distilleries', distilleryQueries.getDistilleries)
app.get('/distilleries/:id', distilleryQueries.getDistilleryById)
app.post('/distilleries', distilleryQueries.createDistillery)
app.put('/distilleries/:id', distilleryQueries.updateDistillery)
app.delete('/distilleries/:id', distilleryQueries.deleteDistillery)

app.get('/whiskies', whiskyQueries.getWhiskies)
app.get('/whiskies/:id', whiskyQueries.getWhiskyById)
app.post('/whiskies', whiskyQueries.createWhisky)
app.put('/whiskies/:id', whiskyQueries.updateWhisky)
app.delete('/whiskies/:id', whiskyQueries.deleteWhisky)


app.listen(3000, () => {
    console.log(`App running on port 3000`)
})