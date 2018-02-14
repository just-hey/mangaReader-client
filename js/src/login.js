const usersURL = 'http://localhost:3000/users/'

function login(email, password) {
  let body = {email, password}
  //this stuff needs to be compared to db
  axios.post(`${usersURL}login`, body)
    .then((data) => {
      // console.log('the log we are looking for ',data.data.response)
      let token = data.data.response
      localStorage.setItem('bakaUser', token)
      //show a success message? add it to (#signInMessage)
      confirmLogin()
    })
    .catch(err => console.error(err))
}

function register(username, email, password) {
  let body = {username, email, password}
  axios.post(`${usersURL}signup`, body)
    .then((data) => {
      //notify that user was made!
      console.log('the log we are looking for',data)
    })
    .catch(err => console.error(err))
}
