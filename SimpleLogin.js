function yourFunction(){

setInterval(() => {

window.location.href = "Website link here";
}, 5000);


    {
        setTimeout(() => {console.log("5 sec timeout")}, 5000);
    }
    var itv = setInterval(() => {
var textFields = document.getElementsByClassName("logintextbox");
for (var i = 0; i < textFields.length; i++) {
    textFields[i].value = generateRandStr();

}}, 1000);


function generateRandStr() {
    var candidates = "ABCDEFGHIJKLMNOPQRSTUVWXY123456789";
    var result = "", rand;
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            rand = Math.floor(Math.random() * candidates.length);
            result += candidates.charAt(rand);
        }
        if (i != 3) {
            result += "-";
        }
    }
    return result;
}

var itv = setInterval(() => {
    var btn = document.getElementsByClassName("loginbutton");
    if (btn !== null) {
        btn[0].click();
    } else {
        clearInterval(itv);
    }
}, 1000);


}
setInterval(yourFunction(), 10000);
