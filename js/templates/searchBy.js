function searchByForm() {
  return `<p>search for manga by...</p>
  <ul class="nav md-pills nav-justified pills-secondary">
    <li class="nav-item purple">
        <a class="nav-link" data-toggle="tab" href="#panel11" role="tab"></i> Title</a>
    </li>
    <li class="nav-item purple">
        <a class="nav-link" data-toggle="tab" href="#panel12" role="tab">Genre</a>
    </li>
  </ul>

<!-- Tab panels -->
  <div class="tab-content">
      <!--Panel 1-->
      <div class="tab-pane fade in show active" id="panel11" role="tabpanel">
        <br>
        <form class="form-inline">
          <div class="md-form form-group">
            <input type="text" id="searchWithName" class="form-control validate">
            <label>Search by title</label>
          </div>
          <div class="md-form form-group" onclick="searchForByName()">
            <a class="btn btn-default btn-lg purple">go!</a>
          </div>
        </form>
      </div>
      <!--/.Panel 1-->

      <!--Panel 2-->
      <div class="tab-pane fade" id="panel12" role="tabpanel">
        <br>
        <form class="form-horizontal">
          <div class="form-group">
            <div class="col-md-10 columns" id="genreSelectors">
              <!-- This populates with all the available genres -->

              <label class="checkbox-inline" for="Checkboxes_Action">
                <input class="checkbox" type="checkbox" name="Checkboxes" id="Checkboxes_Action" value="Action">
                  Action
              </label>
              <label class="checkbox-inline" for="Checkboxes_Adult">
                <input class="checkbox" type="checkbox" name="Checkboxes" id="Checkboxes_Adult" value="Adult">
                Adult
              </label>
              <label class="checkbox-inline" for="Checkboxes_Adventure">
                <input class="checkbox" type="checkbox" name="Checkboxes" id="Checkboxes_Adventure" value="Adventure">
                Adventure
              </label><label class="checkbox-inline" for="Checkboxes_Comedy">
                <input class="checkbox" type="checkbox" name="Checkboxes" id="Checkboxes_Comedy" value="Comedy">
                Comedy
              </label>
              <label class="checkbox-inline" for="Checkboxes_Doujinshi">
                <input class="checkbox" type="checkbox" name="Checkboxes" id="Checkboxes_Doujinshi" value="Doujinshi">
                Doujinshi
              </label>
              <label class="checkbox-inline" for="Checkboxes_Drama">
                <input class="checkbox" type="checkbox" name="Checkboxes" id="Checkboxes_Drama" value="Drama">
                Drama
              </label>
              <label class="checkbox-inline" for="Checkboxes_Ecchi">
                <input class="checkbox" type="checkbox" name="Checkboxes" id="Checkboxes_Ecchi" value="Ecchi">
                Ecchi
              </label>
              <label class="checkbox-inline" for="Checkboxes_Fantasy">
                <input class="checkbox" type="checkbox" name="Checkboxes" id="Checkboxes_Fantasy" value="Fantasy">
                Fantasy
              </label>
              <label class="checkbox-inline" for="Checkboxes_Gender Bender">
                <input class="checkbox" type="checkbox" name="Checkboxes" id="Checkboxes_Gender Bender" value="Gender Bender">
                Gender Bender
              </label>
              <label class="checkbox-inline" for="Checkboxes_Harem">
                <input class="checkbox" type="checkbox" name="Checkboxes" id="Checkboxes_Harem" value="Harem">
                Harem
              </label>
              <label class="checkbox-inline" for="Checkboxes_Historical">
                <input class="checkbox" type="checkbox" name="Checkboxes" id="Checkboxes_Historical" value="Historical">
                Historical
              </label>
              <label class="checkbox-inline" for="Checkboxes_Horror">
                <input class="checkbox" type="checkbox" name="Checkboxes" id="Checkboxes_Horror" value="Horror">
                Horror
              </label>
              <label class="checkbox-inline" for="Checkboxes_Josei">
                <input class="checkbox" type="checkbox" name="Checkboxes" id="Checkboxes_Josei" value="Josei">
                Josei
              </label>
              <label class="checkbox-inline" for="Checkboxes_Martial Arts">
                <input class="checkbox" type="checkbox" name="Checkboxes" id="Checkboxes_Martial Arts" value="Martial Arts">
                Martial Arts
              </label>
              <label class="checkbox-inline" for="Checkboxes_Mature">
                <input class="checkbox" type="checkbox" name="Checkboxes" id="Checkboxes_Mature" value="Mature">
                Mature
              </label>
              <label class="checkbox-inline" for="Checkboxes_Mystery">
                <input class="checkbox" type="checkbox" name="Checkboxes" id="Checkboxes_Mystery" value="Mystery">
                Mystery
              </label>
              <label class="checkbox-inline" for="Checkboxes_Psychological">
                <input class="checkbox" type="checkbox" name="Checkboxes" id="Checkboxes_Psychological" value="Psychological">
                Psychological
              </label>
              <label class="checkbox-inline" for="Checkboxes_Romance">
                <input class="checkbox" type="checkbox" name="Checkboxes" id="Checkboxes_Romance" value="Romance">
                Romance
              </label>
              <label class="checkbox-inline" for="Checkboxes_School Life">
                <input class="checkbox" type="checkbox" name="Checkboxes" id="Checkboxes_School Life" value="School Life">
                School Life
              </label>
              <label class="checkbox-inline" for="Checkboxes_Sci-fi">
                <input class="checkbox" type="checkbox" name="Checkboxes" id="Checkboxes_Sci-fi" value="Sci-fi">
                Sci-fi
              </label>
              <label class="checkbox-inline" for="Checkboxes_Seinen">
                <input class="checkbox" type="checkbox" name="Checkboxes" id="Checkboxes_Seinen" value="Seinen">
                Seinen
              </label>
              <label class="checkbox-inline" for="Checkboxes_Shoujo">
                <input class="checkbox" type="checkbox" name="Checkboxes" id="Checkboxes_Shoujo" value="Shoujo">
                Shoujo
              </label>
              <label class="checkbox-inline" for="Checkboxes_Shounen">
                <input class="checkbox" type="checkbox" name="Checkboxes" id="Checkboxes_Shounen" value="Shounen">
                Shounen
              </label>
              <label class="checkbox-inline" for="Checkboxes_Slice of Life">
                <input class="checkbox" type="checkbox" name="Checkboxes" id="Checkboxes_Slice of Life" value="Slice of Life">
                Slice of Life
              </label>
              <label class="checkbox-inline" for="Checkboxes_Smut">
                <input class="checkbox" type="checkbox" name="Checkboxes" id="Checkboxes_Smut" value="Smut">
                Smut
              </label>
              <label class="checkbox-inline" for="Checkboxes_Sports">
                <input class="checkbox" type="checkbox" name="Checkboxes" id="Checkboxes_Sports" value="Sports">
                Sports
              </label>
              <label class="checkbox-inline" for="Checkboxes_Supernatural">
                <input class="checkbox" type="checkbox" name="Checkboxes" id="Checkboxes_Supernatural" value="Supernatural">
                Supernatural
              </label>
              <label class="checkbox-inline" for="Checkboxes_Tragedy">
                <input class="checkbox" type="checkbox" name="Checkboxes" id="Checkboxes_Tragedy" value="Tragedy">
                Tragedy
              </label>
              <label class="checkbox-inline" for="Checkboxes_Webtoons">
                <input class="checkbox" type="checkbox" name="Checkboxes" id="Checkboxes_Webtoons" value="Webtoons">
                Webtoons
              </label>
              <label class="checkbox-inline" for="Checkboxes_Yaoi">
                <input class="checkbox" type="checkbox" name="Checkboxes" id="Checkboxes_Yaoi" value="Yaoi">
                Yaoi
              </label>
              <label class="checkbox-inline" for="Checkboxes_Yuri">
                <input class="checkbox" type="checkbox" name="Checkboxes" id="Checkboxes_Yuri" value="Yuri">
                Yuri
              </label>

            </div>
          </div>
          <div class="md-form form-group" onclick="searchForByGenres()">
            <a class="btn btn-default btn-lg purple">go!</a>
          </div>
        </form>
      </div>
      <!--/.Panel 2-->

  </div>`
}
