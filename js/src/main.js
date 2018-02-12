const titlesURL = 'http://localhost:3000/titles/'

const container = document.querySelector('#containerBody')
document.querySelector('#nice-butt-on').addEventListener('click', (e) => {
  e.preventDefault()
  console.log('clicked')
  // let limit = '?limit=10'
  // axios.get(`${titlesURL}${limit}`)
  //   .then(result => {
  //     console.log(result.data)
  //     result.data.forEach(manga => {
  //       console.log(manga.im)
  //       container.innerHTML += cardMaker(manga)
  //     })
  //   })
  container.innerHTML += searchByForm()

})

function searchForByName() {
  let mangaEntered = document.querySelector('#searchWithName').value
  let titleHyphed = mangaEntered.replace(/ /g,'-').toLowerCase()
  // console.log(titleHyphed)
  axios.get(`${titlesURL}${titleHyphed}`)
    .then(result => {
      // console.log(result.data)
      result.data.forEach(manga => {
        // console.log(manga.im)
        container.innerHTML += cardMaker(manga)
      })
    })
    .catch(err => {
      console.log(err)
      //need to manage error properly...
      container.innerHTML += `<p>${err}</p>`
    })
}

function searchForByGenres() {
  console.log('you searchin with genres?')
  let arrayOfElements = document.querySelectorAll('.checkbox:checked')
  let genres = []
  arrayOfElements.forEach(e => {
    genres.push(e.value)
  })
  if (genres.length < 1) {
    container.innerHTML += `<p>Select something please</p>`
  } else {
    axios.post(`${titlesURL}`, {genres})
      .then(result => {
        // console.log(result.data)
        result.data.forEach(manga => {
          // console.log(manga.im)
          container.innerHTML += cardMaker(manga)
        })
      })
      .catch(err => {
        console.log(err)
        //need to manage error properly...
        container.innerHTML += `<p>${err}</p>`
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
