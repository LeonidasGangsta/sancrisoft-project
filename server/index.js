const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors')
const database = require('./database')

app.use(bodyParser.json())
app.use(cors())

app.use('/api', database)

app.listen(3001, () => {
    console.log('Running on port 3001')
})