const usersURL = 'http://localhost:3000/users/'

function login(email, password) {
  let body = {email, password}
  axios.post(`${usersURL}login`, body)
    .then((data) => {
      let token = data.data.response.token
      localStorage.setItem('bakaUser', token)
      window.user = data.data.response.id
      //show a success message? add it to (#signInMessage)
      confirmLogin()
    })
    .catch(err => console.error(err))
}

function register(username, email, password) {
  let body = {username, email, password}
  axios.post(`${usersURL}signup`, body)
    .then((data) => {
      $('#modalRegisterForm').modal('toggle')
    })
    .catch(err => console.error(err))
}
