
function bookMarkMaker(bookMark) {
  return `<tr>
              <td>${bookMark.manga_title=''}</td>
              <td>${bookMark.chapter_number=0}</td>
              <td><a><i class="fa fa-remove" onclick="removeUserBookMark(${bookMark.id=0})"></i></a></td>
          </tr>`
}
