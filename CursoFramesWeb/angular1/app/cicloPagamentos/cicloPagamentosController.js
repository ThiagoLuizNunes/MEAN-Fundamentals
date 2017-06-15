(function () {
  angular.module('primeiraApp').controller('CicloPagamentoCtrl', [
    '$http',
    'msgs',
    'tabs',
    CicloPagamentoController
  ])

  function CicloPagamentoController($http, msgs, tabs){
    const vm = this
    const url = 'http://localhost:3003/api/cicloPagamento'

    /*Método GET*/
    vm.refresh = function () {
      $http.get(url).then(function (response) {
        /*Retorna pra ciclo de pagamentos com o objeto fazio*/
        vm.cicloPagamento = {creditos:[{}], debitos: [{}]}
        vm.cicloPagamentos = response.data
        tabs.show(vm, {tabList: true, tabCreate: true})
        console.log(response);
      })
    }
    /*Método POST*/
    vm.create = function () {
      $http.post(url, vm.cicloPagamento).then(function (response) {
        vm.cicloPagamento = {}
        msgs.addSuccess('Operação realizada com sucesso!!')
      }).catch(function (response) {
        //Errors foi definido no backend
        msgs.addError(response.data.errors)
      })
    }
    /*Método PUT*/
    vm.update = function() {
      const updateUrl = `${url}/${vm.cicloPagamento._id}`
      $http.put(updateUrl, vm.cicloPagamento).then(function(response) {
        vm.refresh()
        msgs.addSuccess('Operação realizada com sucesso!')
      }).catch(function(response) {
        msgs.addError(response.data.errors)
      })
    }
    /*Método DELETE*/
    vm.delete = function() {
      const deleteUrl = `${url}/${vm.cicloPagamento._id}`
      $http.delete(deleteUrl, vm.cicloPagamento).then(function (response) {
        vm.refresh()
        msgs.addSuccess('Operação realizada com sucesso!')
      }).catch(function (response) {
        msgs.addError(response.data.errors)
      })
    }

    /*Método que exibe apenas a tabela EDITAR*/
    vm.showTabUpdate = function(cicloPagamento) {
      vm.cicloPagamento = cicloPagamento
      tabs.show(vm, {tabUpdate: true})
    }
    /*Método que exibe apenas a tabela EXCLUIR*/
    vm.showTabDelete = function(cicloPagamento) {
      vm.cicloPagamento = cicloPagamento
      tabs.show(vm, {tabDelete: true})
    }

    /*Métodos CRÉDITO*/
    vm.addCredito = function(index) {
      vm.cicloPagamento.creditos.splice(index + 1, 0, {})
    }
    vm.cloneCredito = function(index, {nome, valor}){
      vm.cicloPagamento.creditos.splice(index + 1, 0, {nome, valor})
    }
    vm.deleteCredito = function(index) {
      if(vm.cicloPagamento.creditos.length > 1){
        vm.cicloPagamento.creditos.splice(index, 1)
      }
    }
    /*Métodos DÉBITO*/
    vm.addDebito = function(index) {
      vm.cicloPagamento.debitos.splice(index + 1, 0, {})
    }
    vm.cloneDebito = function(index, {nome, valor, status}){
      vm.cicloPagamento.debitos.splice(index + 1, 0, {nome, valor, status})
    }
    vm.deleteDebito = function(index) {
      if(vm.cicloPagamento.debitos.length > 1){
        vm.cicloPagamento.debitos.splice(index, 1)
      }
    }
    vm.refresh()
  }
})()
