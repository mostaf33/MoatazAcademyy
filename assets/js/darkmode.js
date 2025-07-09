var icon =document.getElementById("icon");
icon.onclick = function(){
    document.body.classList.toggle("darkmode");
    if(document.body.classList.contains("darkmode")){
        icon.src ="images/sun.png";
        }else{
            icon.src ="images/moon.png";
        }
}
