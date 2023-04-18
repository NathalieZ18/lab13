function start () {
var button = document .getElementById('tChange');
button.onclick = change;
}

function change(){
    var changeInFontSize= 60;
document.getElementById('change').style.fontSize= changeInFontSize +'px';
document.getElementById('change').style.font='helvetica'
document.getElementById('change').style.color='blue';

}

window.onload = start;