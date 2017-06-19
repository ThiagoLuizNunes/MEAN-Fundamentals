(function () {
  angular.module('primeiraApp').factory('msgs', [
    'toastr',
    MsgsFactory
  ])
  function MsgsFactory(toastr) {

    function addMsg(msgs, title, method) {
      //Captura varias mensagens
      if(msgs instanceof Array){
        msgs.forEach(msg => toastr[method](msg, title))
      }
      //Captura única mensagem
      else {
        toastr[method](msgs, title)
      }
    }
    /*Método exibir mensagem de SUCESSO*/
    function addSuccess(msgs) {
      addMsg(msgs, 'Sucesso', 'success')
    }

    /*Método exibir mensagem de ERRO*/
    function addError(msgs) {
      addMsg(msgs, 'Erro', 'error')
    }

    return { addSuccess, addError }
  }
})()
