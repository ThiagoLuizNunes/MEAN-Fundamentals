angular.module('primeiraApp').controller('DashboardCtrl', [
  '$scope',
  '$http',
  DashboardController
])

function DashboardController($scope, $http) {
  $scope.getSummary = function () {
    const url = 'http://localhost:3003/api/pagamentoSummary'
    $http.get(url).then(function(response){
      const {credito = 0, debito = 0} = response.data
      $scope.credito = credito
      $scope.debito = debito
      $scope.total = credito - debito
    })
  }

  $scope.getSummary()
}
