(function() {
  angular.module('primeiraApp').controller('AuthCtrl', [
    '$location',
    'msgs',
    'auth',
    AuthController
  ])

  function AuthController($location, msgs, auth) {
    const vm = this

    vm.loginMode = true
    vm.changeMode = () => vm.loginMode = !vm.loginMode

    vm.login = () => {
      auth.login(vm.user, err => err ? msgs.addError(err) : msgs.addSuccess('Sucesso!'))
    }
    vm.signup = () => {
      auth.signup(vm.user, err => err ? msgs.addError(err) : msgs.addSuccess('Sucesso!'))
    }

    vm.getUser = () => ({ name: 'Usuário MOCK', email: 'mock@cod3r.com.br' })

    vm.logout = () => {
    console.log('Logout...')
    }
  }
})()
