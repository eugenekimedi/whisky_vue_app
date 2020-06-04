const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

app.get('/', (req, res) => {
    res.json({hello: 'Hello World'})
})

app.listen(3000, () => {
    console.log(`App running on port 3000`)
})