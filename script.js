let Body_color;
let isDark = true;

function toggleDarkAndWhite(){
    if(isDark == true){
        Body_color = document.getElementById('container').style.backgroundColor = "black";
        isDark = false;
    } else {
        Body_color = document.getElementById('container').style.backgroundColor = "white";
        isDark = true;
    }
}