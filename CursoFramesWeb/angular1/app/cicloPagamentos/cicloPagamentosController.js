(function () {
  angular.module('primeiraApp').controller('CicloPagamentoCtrl', [
    '$http',
    'msgs',
    'tabs',
    CicloPagamentoController
  ])

  function CicloPagamentoController($http, msgs, tabs){
    const vm = this
    const url = 'http://localhost:3003/api/cicloPagamento/'

    vm.refresh = function () {
      $http.get(url).then(function (response) {
        vm.cicloPagamento = {}
        vm.cicloPagamentos = response.data
        tabs.show(vm, {tabList: true, tabCreate: true})
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

    vm.showTabUpdate = function(cicloPagamento) {
      vm.cicloPagamento = cicloPagamento
      tabs.show(vm, {tabUpdate: true})
    }

    vm.showTabDelete = function(cicloPagamento) {
      vm.cicloPagamento = cicloPagamento
      tabs.show(vm, {tabDelete: true})
    }
    vm.refresh()
  }
})()
