memory = document.getElementById("memory");

createMemoryHolders();
createMemoryImages();

function createMemoryHolders() {
    for (var i = 0; i < 18; i++) {
        var memoryHolder = document.createElement("div");
        memoryHolder.className = "memory-holder";
        memoryHolder.id = "memory-holder-" + i;
        memory.appendChild(memoryHolder);
    }
}

function createMemoryImages(memoryHolder) {
    memoryNumbers = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9];
    memoryHolder = document.getElementsByClassName("memory-holder");

    for (var i = 0; i < memoryHolder.length; i++) {

        var memoryPlaatje = document.createElement("img");
        memoryPlaatje.src = "images/memory" + memoryNumbers[i] + ".jpg";
        memoryHolder[i].appendChild(memoryPlaatje);

        memoryPlaatje.addEventListener("click", function () {
            memoryPlaatje.style.backgroundImage = "url('images/memory" 
        })

    }
}


slideholder.addEventListener("click", function () {
    slideholder.style.backgroundImage = "url('../images/aap" + nextAap() + ".jpg')";
} );

