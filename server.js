const express = require('express')
const cors = require('cors')
const routes = require('./SRC/routes')

const app = express()
app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(3000, () =>{
    console.log('Servidor rodando na porta 3000')
})