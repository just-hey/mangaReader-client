const titlesURL = `http://localhost:3000/titles/`
const chapterURL = `http://www.mangaeden.com/api/manga/`
const pagesURL = `http://www.mangaeden.com/api/chapter/`
const imageURL = `https://cors-anywhere.herokuapp.com/https://cdn.mangaeden.com/mangasimg/`

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
  let enteredEmail = document.querySelector('#defaultForm-email').value
  let enteredPassword = document.querySelector('#defaultForm-pass').value
  console.log('login clicked')
  login(enteredEmail, enteredPassword)
})

registerFormBtn.addEventListener('click', (e) => {
  e.preventDefault()
  console.log('register clicked')
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
  console.log(id)
  let element = document.getElementById(id)
  element.classList.remove('hidden')
}
// let arrGenres = ["Action", "Adult", "Adventure", "Comedy", "Doujinshi", "Drama", "Ecchi", "Fantasy", "Gender Bender", "Harem", "Historical", "Horror", "Josei", "Martial Arts", "Mature", "Mystery", "Psychological", "Romance", "School Life", "Sci-fi", "Seinen", "Shoujo", "Shounen", "Slice of Life", "Smut", "Sports", "Supernatural", "Tragedy", "Webtoons", "Yaoi", "Yuri"]
//
// const genreSelector = document.querySelector('#genreSelectors')
// // genreSelector.innerHTML = genreSelectorMaker(arrGenres)
// //you're building the genre select boxes. check our index.html for the template
//
// function genreSelectorMaker(arrGenres) {
//   let result = ''
//   arrGenres.forEach(genre => {
//     result += `<label class="checkbox-inline" for="Checkboxes_${genre}">
//       <input type="checkbox" name="Checkboxes" id="Checkboxes_${genre}" value="${genre}">
//       ${genre}
//     </label>`
//   })
//   return result
// }
