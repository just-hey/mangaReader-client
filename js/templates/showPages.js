function showPages(chapterInfo) {
  let result = `<ul>`
  chapterInfo.images.forEach(page => {
    result += `<li><a onclick="viewPage()" id="${page[1]}">Page: ${page[0]}</a></li>`
  })
  return result
}
