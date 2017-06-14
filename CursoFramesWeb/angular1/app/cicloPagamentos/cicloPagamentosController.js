(function () {
  angular.module('primeiraApp').controller('CicloPagamentoCtrl', [
    '$http',
    'msgs',
    CicloPagamentoController
  ])

  function CicloPagamentoController($http, msgs){
    const vm = this
    const url = 'http://localhost:3003/api/cicloPagamento/'
    // vm.cicloPagamento = {
    //   nome: 'Nome',
    //   mes: 1,
    //   ano: 2017
    // }
    vm.refresh = function () {
      $http.get(url).then(function (response) {
        vm.cicloPagamento = {}
        vm.cicloPagamentos = response.data
        console.log(response);
      })
    }
    vm.create = function () {
      $http.post(url, vm.cicloPagamento).then(function (response) {
        vm.cicloPagamento = {}
        msgs.addSuccess('Operação realizada com sucesso!!')
      }).catch(function (response) {
        //Errors foi definido no backend
        msgs.addError(response.data.errors)
      })
    }
    vm.refresh()
  }
})()
