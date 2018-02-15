function bookMarksTable(bookMark) {
  return `<tr>
              <td>${bookMark.title}</td>
              <td>${bookMark.chapter}</td>
              <td><a><i class="fa fa-remove" onclick="removeUserBookMark(${bookMark.id})"></i></a></td>
          </tr>`
}
