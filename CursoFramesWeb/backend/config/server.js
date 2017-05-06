const port = 3003

const bodyParser = require('body-parser')
const express = require('express')
//const router = require('./routes')
const server = express()

/*server.use = PRA TODA REQUISIÇÂO PASSARÀ PELO MIDDLEWARE*/

//Filtra as submissões urlencoded(Formulários)
server.use(bodyParser.urlencoded({ extended: true }))
//Transforma o JSON em um objeto pra ser usado no backend
server.use(bodyParser.json())

//server.use('/api', router)

server.listen(port, function(){
  console.log(`BACKEND is running on port ${port}.`);
})

module.exports = server
