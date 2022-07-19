//var elemento = document.querySelector("#textBox");
//elemento.parentNode.removeChild(elemento);

  
function keyPressed(evt){
    evt = evt || window.event;
    var key = evt.keyCode || evt.which;
    return String.fromCharCode(key); 
}

document.onkeypress = function(evt) {
    var str = Number(keyPressed(evt));
    // MAX 17
    cslen = document.getElementById("screen").innerText
    if(str == str && cslen.length < 18)
    document.getElementById("screen").innerText += typeof str == number ? str : str
};

function addNumber(number) {
    alert(number)
}
function arith(arithm) {
    alert(arithm)
}
function warnScreen() {
    alert("The maximum is 18 characters")
}
