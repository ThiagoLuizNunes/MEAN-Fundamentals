const express = require('express')

module.exports = function(server) {
  //API routes
  const router = express.Router()
  server.use('/api', router)

  //rotas da API
  const cicloPagamento = require('../api/cicloPagamento/cicloPagamentoService')
  cicloPagamento.register(router, '/cicloPagamento')
}
