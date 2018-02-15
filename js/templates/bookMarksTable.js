
function bookMarkMaker(bookMark) {
  console.log(bookMark);
  return `<tr>
              <td>${bookMark.manga_title}</td>
              <td>${bookMark.chapter_number}</td>
              <td><a><i class="fa fa-remove" onclick="removeUserBookMark(${bookMark.id})"></i></a></td>
          </tr>`
}
