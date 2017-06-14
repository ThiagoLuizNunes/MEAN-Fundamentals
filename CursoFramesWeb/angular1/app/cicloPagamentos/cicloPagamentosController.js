(function () {
  angular.module('primeiraApp').controller('CicloPagamentoCtrl', [
    '$http',
    CicloPagamentoController
  ])

  function CicloPagamentoController($http){
    const vm = this
    vm.cicloPagamento = {
      nome: 'Nome',
      mes: 1,
      ano: 2017
    }
    vm.create = function(){
      const url = 'http://localhost:3003/api/cicloPagamento/'
      $http.post(url, vm.cicloPagamento).then(function (response) {
        vm.cicloPagamento = {}
        console.log('Sucesso!');
      })
    }
  }
})()
