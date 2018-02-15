function userNavLinks() {
  return `
          <li class="nav-item">
            <a id="nav-logout" onclick="logUserOut()" class="nav-link">Logout</a>
          </li>
          <li class="nav-item">
            <a id="nav-showBookMarks" class="nav-link" data-toggle="modal" data-target="#modalBookMarks">Book Marks</a>
          </li>
          <li class="nav-item">
            <a id="nav-addToBookMarks" onclick="addCurrentToBookMarks()" class="nav-link">Add Current</a>
          </li>
          `
}
