(function () {
  angular.module('primeiraApp').factory('msgs', [
    'toastr',
    MsgsFactory
  ])
  function MsgsFactory(toastr) {

    function addMsg(msgs, title, method) {
      //Varias mensagens
      if(msgs instanceof Array){
        msgs.forEach(msg => toastr[method](msg, title))
      }
      //Única mensagem
      else {
        toastr[method](msgs, title)
      }
    }

    function addSuccess(msgs) {
      addMsg(msgs, 'Sucesso', 'success')
    }

    function addError(msgs) {
      addMsg(msgs, 'Erro', 'error')
    }

    return { addSuccess, addError }
  }
})()
