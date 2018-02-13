function showPages(chapterInfo) {
  
  let i = chapterInfo.images.length-1
  let tag = chapterInfo.images[i][1]
  let current = 'https://cdn.mangaeden.com/mangasimg/' + tag
  viewingImageContainer.style.backgroundImage = 'url('+current+')'

  document.querySelector('#next').addEventListener('click', () => {
    i--
    console.log(i)
    let tag = chapterInfo.images[i][1]
    let current = 'https://cdn.mangaeden.com/mangasimg/' + tag
    viewingImageContainer.style.backgroundImage = 'url('+current+')'
  })

  document.querySelector('#previous').addEventListener('click', () => {
    i++
    console.log(i)
    let tag = chapterInfo.images[i][1]
    let current = 'https://cdn.mangaeden.com/mangasimg/' + tag
    viewingImageContainer.style.backgroundImage = 'url('+current+')'
  })

}
