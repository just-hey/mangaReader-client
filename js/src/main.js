const titlesURL = `http://localhost:3000/titles/`
const chapterURL = `http://www.mangaeden.com/api/manga/`
const pagesURL = `http://www.mangaeden.com/api/chapter/`
// const imageURL = `https://cors-anywhere.herokuapp.com/https://cdn.mangaeden.com/mangasimg/`

const container = document.querySelector('#searchToolContainer')
const searchResultsContainer = document.querySelector('#searchResultsContainer')
const chapterResultsContainer = document.querySelector('#chapterResultsContainer')
const pageResultsContainer = document.querySelector('#pageResultsContainer')
const viewingImageContainer = document.querySelector('#viewingImageContainer')

const searchResults = document.querySelector('#searchResults')
const chapterResults = document.querySelector('#chapterResults')

const startingButtons = document.querySelectorAll('.splashed')

const loginFormBtn = document.querySelector('#loginFormBtn')
const registerFormBtn = document.querySelector('#registerFormBtn')


loginFormBtn.addEventListener('click', (e) => {
  e.preventDefault()
  let email = document.querySelector('#defaultForm-email').value
  let password = document.querySelector('#defaultForm-pass').value
  login(email, password)
})

registerFormBtn.addEventListener('click', (e) => {
  e.preventDefault()
  let username = document.querySelector('#orangeForm-name').value
  let email = document.querySelector('#orangeForm-email').value
  let password = document.querySelector('#orangeForm-pass').value
  register(username, email, password)
})

function loadTheThings() {
  startingButtons.forEach(el => {
    el.classList.add('hidden')
  })
  container.innerHTML = searchByForm()
}

function getMangaChapters() {
  container.classList.add('hidden')
  searchResults.classList.remove('hidden')
  searchResultsContainer.classList.add('hidden')
  axios.get(`${chapterURL}${event.target.id}`)
    .then(result => {
      chapterResultsContainer.innerHTML = showChapters(result.data)
    })
    .catch(err => console.log(err))
}

function getMangaPages(enteredChapter) {
  searchResults.classList.add('hidden')
  chapterResults.classList.remove('hidden')
  if (!enteredChapter) {
    chapterResultsContainer.classList.add('hidden')
    let chapter = event.target.id
    let pageID = document.getElementById(`${chapter}`).name
    axios.get(`${pagesURL}${pageID}`)
      .then(result => {
        pageResultsContainer.innerHTML = showPages(result.data, chapter)
      })
      .catch(err => console.log(err))
  } else {
    let chapter = enteredChapter.name
    axios.get(`${pagesURL}${chapter}`)
      .then(result => {
        pageResultsContainer.innerHTML = showPages(result.data, chapter)
      })
      .catch(err => console.log(err))
  }
}

function searchForByName() {
  searchResultsContainer.innerHTML = ''
  let mangaEntered = document.querySelector('#searchWithName').value
  let trimmed = mangaEntered.trim()
  let titleHyphed = trimmed.replace(/ /g,'-').toLowerCase()
  if (!titleHyphed) {
    searchResultsContainer.innerHTML += `<p>Need something to actually search.</p>`
  } else {
    axios.get(`${titlesURL}${titleHyphed}`)
      .then(result => {
        result.data.forEach(manga => {
          searchResultsContainer.innerHTML += cardMaker(manga)
        })
      })
      .catch(err => {
        searchResultsContainer.innerHTML += `<p>${err}</p>`
      })
  }
}

function searchForByGenres() {
  searchResultsContainer.innerHTML = ''
  let arrayOfElements = document.querySelectorAll('.checkbox:checked')
  let genres = []
  arrayOfElements.forEach(e => {
    genres.push(e.value)
  })
  if (genres.length < 1) {
    searchResultsContainer.innerHTML += `<p>Select something please</p>`
  } else {
    axios.post(`${titlesURL}`, {genres})
      .then(result => {
        result.data.forEach(manga => {
          searchResultsContainer.innerHTML += cardMaker(manga)
        })
      })
      .catch(err => {
        searchResultsContainer.innerHTML += `<p>${err}</p>`
      })
  }
}

function removeHidden() {
  let id = event.target.id + 'Container'
  let element = document.getElementById(id)
  element.classList.remove('hidden')
}

function confirmLogin() {
  let userToken = localStorage.getItem('bakaUser')
  if(userToken) {
    console.log('its there')
  }
  else {
    console.log('uh-oh')
  }
}
