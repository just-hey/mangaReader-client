function userNavLinks() {
  return `
          <li class="nav-item">
            <a id="nav-logout" onclick="logUserOut()" class="nav-link">Logout</a>
          </li>
          <li class="nav-item">
            <a id="nav-showBookMarks" class="nav-link" data-toggle="modal" data-target="#modalBookMarks">Book Marks</a>
          </li>
          <li class="nav-item">
            <a id="nav-addToBookMarks" class="nav-link">Add Current</a>
          </li>
          `
}

//
// <div class="text-center splashed">
//     <a href="" class="btn btn-default btn-rounded mb-4 purple" data-toggle="modal" data-target="#modalRegisterForm">Register</a>
// </div>
