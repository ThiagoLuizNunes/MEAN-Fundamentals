const CicloPagamento = require('./cicloPagamento')

CicloPagamento.methods(['get', 'post', 'put', 'delete'])
CicloPagamento.updateOptions({new: true, runValidators: true})

//Retornar quantidade de registros na collection
CicloPagamento.route('count', function(req, res, next){
  CicloPagamento.count(function(error, value){
    if(error) {
      res.status(500).json({errors: [error]})
    }else {
      res.json({value})
    }
  })
})

module.exports = CicloPagamento
