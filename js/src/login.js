const usersURL = 'http://localhost:3000/users/'

function login(email, password) {
  console.log('trying to log in jack?', email, password)
  let body = {email, password}
  //this stuff needs to be compared to db
  axios.post(`${usersURL}`, body)
    .then((data) => {

    })
    .catch(err => console.error(err))
}
