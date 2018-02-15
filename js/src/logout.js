function logUserOut() {
  window.user = null
  localStorage.removeItem('bakaUser')
  confirmLogin()
  location.reload()
}
