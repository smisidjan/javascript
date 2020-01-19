pics = document.getElementById("pics");
createPicsHolders();
createAapImages();

function createPicsHolders() {
    for (var i = 0; i < 9; i++) {
        pictureHolder = document.createElement("div");
        pictureHolder.className = "picture-holder";
        pictureHolder.id = "picture-holder-" + i;
        pics.appendChild(pictureHolder);
    }
}

function createAapImages() {
    pictureHolder = document.getElementsByClassName("picture-holder");

    for (var i = 0; i < pictureHolder.length; i++) {

        favoriet = document.createElement("div");
        favoriet.className = "favoriet";
        favoriet.id = "favoriet_" + (i + 1);

        aapPlaatje = document.createElement("img");
        aapPlaatje.src = "../images/aap" + (i + 1) + ".jpg";

        aapPlaatje.id = (i + 1);
        aapPlaatje.addEventListener("click", function () {
            maakFavoriet(this.id);
        })
        pictureHolder[i].appendChild(favoriet);
        pictureHolder[i].appendChild(aapPlaatje);
    }
}

function maakFavoriet(id) {
    notsoFavoriet = document.getElementsByClassName("favoriet");

    for (var i = 0; i < notsoFavoriet.length; i++) {
        notsoFavoriet[i].style.backgroundImage = "none";
    }

    favoriet = document.getElementById("favoriet_" + id);
    favoriet.style.backgroundImage = "url('../images/hart.png')";
}