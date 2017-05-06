const CicloPagamento = require('./cicloPagamento')

CicloPagamento.methods(['get', 'post', 'put', 'delete'])
CicloPagamento.updateOptions({new: true, runValidators: true})

module.exports = CicloPagamento
