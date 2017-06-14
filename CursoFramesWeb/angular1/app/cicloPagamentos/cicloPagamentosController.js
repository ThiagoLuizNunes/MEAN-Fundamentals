(function () {
  angular.module('primeiraApp').controller('CicloPagamentoCtrl', [
    '$http',
    'msgs',
    CicloPagamentoController
  ])

  function CicloPagamentoController($http, msgs){
    const vm = this
    // vm.cicloPagamento = {
    //   nome: 'Nome',
    //   mes: 1,
    //   ano: 2017
    // }
    vm.create = function(){
      const url = 'http://localhost:3003/api/cicloPagamento/'
      $http.post(url, vm.cicloPagamento).then(function (response) {
        vm.cicloPagamento = {}
        msgs.addSuccess('Operação realizada com sucesso!!')
      }).catch(function (response) {
        //Errors foi definido no backend
        msgs.addError(response.data.errors)
      })
    }
  }
})()
