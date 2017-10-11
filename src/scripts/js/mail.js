(function() {
  function sendSimpleMessage(ev) {
    if (!isInputValid()) {
      console.error('validation unsuccessful contentForm')
      return
    }
    var http = new XMLHttpRequest()
    var form = this
    http.open('POST', '../mail.php', true)
    http.onreadystatechange = function () {
      if (http.readyState === 4 && http.status === 200) {
        inputValueReset()
        if (http.responseText.indexOf(form.name.value) === 0) {
          form.message.removeAttribute('value')
          form.message.value = ''
        }
      }
    }
    http.onerror = function () {
      alert('Извините, данные не были переданы')
    }
    http.send(new FormData(form))
  }
  function isEmailCorrect(emailNode) {
    var val = emailNode.value
    if (!val) return false
    return val.indexOf('@') !== -1 && val.length > 4
  }
  function isMessageCorrect(messageNode) {
    var value = messageNode.value
    return value.length > 4
  }
  function isInputValid() {
    var nameNode = document.querySelector('#name')
    var emailNode = document.querySelector('#email')
    var messageNode = document.querySelector('#message')
    if (!nameNode.value) return false
    if (!isEmailCorrect(emailNode)) return false
    if (!isMessageCorrect(messageNode)) return false
    return true
  }
  function inputValueReset() {
    var nameNode = document.querySelector('#name')
    var emailNode = document.querySelector('#email')
    var messageNode = document.querySelector('#message')
    if (nameNode.value) nameNode.value = ''
    if (emailNode.value) emailNode.value = ''
    if (messageNode.value) messageNode.value = ''
  }
  function klik() {
    document.querySelector('#push').addEventListener('click', activateForm)
    document.querySelector('#clean').addEventListener('click', inputValueReset)
  }
  function activateForm() {
    sendSimpleMessage()
  }
  if (document.querySelector('#push')) document.addEventListener('DOMContentLoaded', klik)
}())
