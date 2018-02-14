function showPages(chapterInfo, chapterNum) {
  let max = chapterInfo.images.length-1
  let min = 0

  let i = chapterInfo.images.length-1
  let tag = chapterInfo.images[i][1]
  let current = 'https://cdn.mangaeden.com/mangasimg/' + tag
  viewingImageContainer.style.backgroundImage = 'url('+current+')'

  document.querySelector('#next').addEventListener('click', () => {
    i--
    if (i < min) {
      chapterNum++
      let newChap = document.getElementById(`${chapterNum}`)
      return getMangaPages(newChap)
    }
    let tag = chapterInfo.images[i][1]
    let current = 'https://cdn.mangaeden.com/mangasimg/' + tag
    viewingImageContainer.style.backgroundImage = 'url('+current+')'
  })

  document.querySelector('#previous').addEventListener('click', () => {
    i++
    if (i > max) {
      chapterNum--
      let newChap = document.getElementById(`${chapterNum}`)
      return getMangaPages(newChap)
    }
    let tag = chapterInfo.images[i][1]
    let current = 'https://cdn.mangaeden.com/mangasimg/' + tag
    viewingImageContainer.style.backgroundImage = 'url('+current+')'
  })
  return
}
