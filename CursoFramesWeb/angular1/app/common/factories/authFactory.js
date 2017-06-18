(function() {
  angular.module('primeiraApp').factory('auth', [
    '$http',
    'consts',
    AuthFactory
  ])

  function AuthFactory($http, consts) {

    function signup(user, callback) {
      submit('signup', user, callback)
    }
    function login(user, callback) {
      submit('login', user, callback)
    }
    function submit(url, user, callback) {
      $http.post(`${consts.oapiUrl}/${url}`, user)
        .then(resp => {
          localStorage.setItem(consts.userKey, JSON.stringify(resp.data))
          $http.defaults.headers.common.Authorization = resp.data.token
          if (callback) callback(null, resp.data)
        }).catch(function (resp) {
          console.log('Deu ERRO em SUBMIT');
          console.log(resp);
          if (callback) callback(resp.data.errors, null)
        })
    }

    return { signup, login }
  }

})()
