(function() {
  angular.module('primeiraApp').constant('consts', {
    appName: 'Pagamentos App',
    version: '1.0',
    owner: 'Thiago Luiz',
    year: '2017',
    site: 'https://github.com/ThiagoLuizNunes',
    apiUrl: 'http://localhost:3003/api',
    oapiUrl: 'http://localhost:3003/oapi',
    userKey: '_pagamentos_app_user'
  }).run(['$rootScope', 'consts', function($rootScope, consts) {
    $rootScope.consts = consts
  }])
})()
