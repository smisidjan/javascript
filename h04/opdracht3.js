var ogen = [1, 2, 3, 4, 5];
var neus = [1, 2, 3, 4, 5];
var kin = [1, 2, 3, 4, 5];

var tellerOog = 0;
var tellerNeus = 0;
var tellerKin = 0;

var crookAppOgen = document.getElementById("crookAppOgen" );
crookAppOgen.style.backgroundImage = "url('../images/ogen1.jpg')";

var crookAppNeus = document.getElementById("crookAppNeus" );
crookAppNeus.style.backgroundImage = "url('../images/neus1.jpg')";

var crookAppKin = document.getElementById("crookAppKin" );
crookAppKin.style.backgroundImage = "url('../images/kin1.jpg')";

crookAppOgen.addEventListener("click", function () {
    crookAppOgen.style.backgroundImage = "url('../images/ogen" + nextOog() + ".jpg')";
} );

crookAppNeus.addEventListener("click", function () {
    crookAppNeus.style.backgroundImage = "url('../images/neus" + nextNeus() + ".jpg')";
} );

crookAppKin.addEventListener("click", function () {
    crookAppKin.style.backgroundImage = "url('../images/kin" + nextKin() + ".jpg')";
} );

function nextOog() {
    if (tellerOog >= ogen.length) {
        tellerOog = 1;
    } else {
        tellerOog++;
    }
    return tellerOog;
}

function nextNeus() {
    if (tellerNeus >= neus.length) {
        tellerNeus = 1;
    } else {
        tellerNeus++;
    }
    return tellerNeus;

}function nextKin() {
    if (tellerKin >= kin.length) {
        tellerKin = 1;
    } else {
        tellerKin++;
    }
    return tellerKin;
}