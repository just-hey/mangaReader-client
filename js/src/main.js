const titlesURL = 'http://localhost:3000/titles/'
const chapterURL = `http://www.mangaeden.com/api/manga/`

const container = document.querySelector('#containerBody')
const searchResultsContainer = document.querySelector('#searchResultsContainer')


document.addEventListener('DOMContentLoaded', (e) => {
  container.innerHTML += loadSplash()
})

function loadTheThings() {
  container.innerHTML = searchByForm()
}

function getMangaChapters() {
  axios.get(`${chapterURL}${event.target.id}`)
    .then(result => {
      //got all the chapters need to call the chapter loader...
      container.innerHTML = showChapters(result.data)
      searchResultsContainer.innerHTML = ''
    })
    .catch(err => console.log(err))
}

function searchForByName() {
  searchResultsContainer.innerHTML = ''
  let mangaEntered = document.querySelector('#searchWithName').value
  let trimmed = mangaEntered.trim()
  let titleHyphed = trimmed.replace(/ /g,'-').toLowerCase()
  if (!titleHyphed) {
    console.log('enter words')
    searchResultsContainer.innerHTML += `<p>Need something to actually search.</p>`
  } else {
    // console.log(titleHyphed)
    axios.get(`${titlesURL}${titleHyphed}`)
      .then(result => {
        // console.log(result.data)
        result.data.forEach(manga => {
          // console.log(manga.im)
          searchResultsContainer.innerHTML += cardMaker(manga)
        })
      })
      .catch(err => {
        console.log(err)
        //need to manage error properly...
        searchResultsContainer.innerHTML += `<p>${err}</p>`
      })
  }
}

function searchForByGenres() {
  console.log('you searchin with genres?')
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
        // console.log(result.data)
        result.data.forEach(manga => {
          // console.log(manga.im)
          searchResultsContainer.innerHTML += cardMaker(manga)
        })
      })
      .catch(err => {
        console.log(err)
        //need to manage error properly...
        searchResultsContainer.innerHTML += `<p>${err}</p>`
      })
  }
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
