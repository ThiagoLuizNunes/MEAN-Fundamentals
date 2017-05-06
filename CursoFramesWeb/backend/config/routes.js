const express = require('express')


module.exports = function(server) {
  //API routes
  const router = express.Router()
  server.use('/api', router)

  //rotas da API
  const cicloPagamento = require('../api/cicloPagamento/cicloPagamentoService')
  cicloPagamento.register(router, '/cicloPagamento')

  const pagamentoSummaryService = require('../api/pagamentoSummary/pagamentoSummaryService')
  router.route('/pagamentoSummary').get(pagamentoSummaryService.getSummary)
}

// //API routes
// const router = express.Router()
// //rotas da API
// const cicloPagamento = require('../api/cicloPagamento/cicloPagamentoService')
// cicloPagamento.register(router, '/cicloPagamento')
//
// const pagamentoSummaryService = require('../api/pagamentoSummary/pagamentoSummaryService')
// router.route('/pagamentoSummary').get(pagamentoSummaryService.getSummary)
//
// module.exports = router
