function cardMaker(manga) {
  return`  <!--Card-->
            <div class="card">

                <!--Card image-->
                <div class="view overlay hm-white-slight">
                    <img src="https://cdn.mangaeden.com/mangasimg/${manga.im}" class="img-fluid" alt="">

                </div>

                <!--Card content-->
                <div class="card-body">
                    <!--Title-->
                    <h4 class="card-title">${manga.t}</h4>
                    <a href="#" onclick="getMangaChapters()" id="${manga.i}" class="btn btn-primary">click to read</a>
                </div>

            </div>
          <!--/.Card-->`
}
