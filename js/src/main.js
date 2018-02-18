//while not deployed
// window.baseURL = `http://localhost:3000/`
//while deployed
const baseURL = `https://just-hey-mangareader.herokuapp.com/`

const chapterURL = `https://cors-anywhere.herokuapp.com/http://www.mangaeden.com/api/manga/`
const pagesURL = `https://cors-anywhere.herokuapp.com/http://www.mangaeden.com/api/chapter/`
const imageURL = `https://cors-anywhere.herokuapp.com/https://cdn.mangaeden.com/mangasimg/`

const container = document.querySelector('#searchToolContainer')
const chapterResults = document.querySelector('#chapterResults')
const chapterResultsContainer = document.querySelector('#chapterResultsContainer')
const loginFormBtn = document.querySelector('#loginFormBtn')
const pageResultsContainer = document.querySelector('#pageResultsContainer')
const registerFormBtn = document.querySelector('#registerFormBtn')
const searchResults = document.querySelector('#searchResults')
const searchResultsContainer = document.querySelector('#searchResultsContainer')
const startingButtons = document.querySelectorAll('.splashed')
const viewingImageContainer = document.querySelector('#viewingImageContainer')
const bookMarksTable = document.querySelector('#bookMarksTable')


window.navBar = document.querySelector('.navbar')
window.user = null
window.userToken = null

let currentMangaKey
let currentMangaTitle
let currentChapterKey
let currentChapter
let currentPageKey
let currentPageNum

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

function addCurrentToBookMarks() {
  let body = {
    user_id: window.user,
    manga_title : currentMangaTitle,
    manga_title_key : currentMangaKey,
    chapter_name : currentChapterKey,
    chapter_number: currentChapterName,
    last_viewed_page: currentPageKey,
    last_viewed_page_number: currentPageNum
  }
  axios.post(`${baseURL}bookmarks`, body)
    .then(result => {
      console.log(result);
    })
}

function confirmLogin() {
  userToken = localStorage.getItem('bakaUser')
  if(userToken) {
    loadTheThings()
  }
  else {
    console.log('not logged in and no userToken')
  }
}

function getMangaChapters() {
  container.classList.add('hidden')
  searchResults.classList.remove('hidden')
  searchResultsContainer.classList.add('hidden')
  currentMangaKey = event.target.id
  currentMangaTitle = event.target.previousSibling.previousElementSibling.innerText
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
    currentChapterKey = event.target.id
    currentChapterName = event.target.name
    let pageID = document.getElementById(`${chapter}`).name
    currentPageKey = '.jpg'
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

function loadTheThings() {
  $('#modalLoginForm').modal('toggle')
  startingButtons.forEach(el => {
    el.classList.add('hidden')
  })
  let navChoices = document.querySelector('#nav-choices')
  navChoices.innerHTML = userNavLinks()
  container.innerHTML = searchByForm()
  axios.get(`${baseURL}bookMarks/${window.user}`)
    .then(result => {
      if(result.data.length < 1) {
        let empty = {manga_title: '', chapter_number: 0, id: 0}
        bookMarksTable.innerHTML = bookMarkMaker(empty)
      } else {
        result.data.forEach(bookMark => {
          bookMarksTable.innerHTML += bookMarkMaker(bookMark)
        })
      }
    })
}

function removeHidden() {
  let id = event.target.id + 'Container'
  let element = document.getElementById(id)
  element.classList.remove('hidden')
}

function searchForByName() {
  searchResultsContainer.innerHTML = ''
  let mangaEntered = document.querySelector('#searchWithName').value
  let trimmed = mangaEntered.trim()
  let titleHyphed = trimmed.replace(/ /g,'-').toLowerCase()
  if (!titleHyphed) {
    searchResultsContainer.innerHTML += `<p>Need something to actually search.</p>`
  } else {
    axios.get(`${baseURL}titles/${titleHyphed}`)
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
    axios.post(`${baseURL}titles/`, {genres})
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
