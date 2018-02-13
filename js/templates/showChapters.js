function showChapters(mangaInfo) {
  let result = `<h3>${mangaInfo.title}</h3>
                <p>${mangaInfo.description}</p>
                <ul>`
  mangaInfo.chapters.forEach(chapter => {
    result += `<li><a onclick="getMangaPages()" id="${chapter[3]}">Ch#: ${chapter[0]} - ${chapter[2]=''}</a></li>`
  })
  return result
}
