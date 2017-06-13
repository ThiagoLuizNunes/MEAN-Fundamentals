(function () {
  angular.module('primeiraApp').config([
    //Injeção de dependência
    '$stateProvider',
    '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
      $stateProvider.state('dashboard', {
        url: "/dashboard",
        templateUrl: "dashboard/dashboard.html"
      }).state('cicloPagamentos', {
        url: "/cicloPagamentos",
        templateUrl: "cicloPagamentos/tabs.html"
      })

      $urlRouterProvider.otherwise('/dashboard')
    }
  ])
})()
