//3 buttons that will do exactly what they say.  "no thanks" just continues along as not logged in.
function loadSplash() {
  return `<div class="container">
            <div class="row">
              <button type="button" class="btn purple btn-lg">Sign Up</button>
              <button type="button" class="btn purple btn-lg">Login</button>
            </div>
            <div class="row">
              <button type="button" onclick="loadTheThings()" class="btn purple btn-lg">no thanks, just lookin'</button>
            </div>
          </div>`
}
