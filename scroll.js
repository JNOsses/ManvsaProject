/*con esta variable llamo al boton*/
buttonUp = document.getElementById("button-up");

/*Scroll up*/
function scrollUp(){
    var currentScroll = document.documentElement.scrollTop;
    if (currentScroll > 0) {
    
    window.scrollTo (0,0);
    buttonUp.style.transform ="scale(0)"
    }
}

document.getElementById("button-up").addEventListener("click",scrollUp);





/**/ 

window.onscroll = function (){

    var scroll = document.documentElement.scrollTop;

    if(scroll > 810){
        buttonUp.style.transform = "scale(1)";
    } else if (scroll < 810 )
    {
        buttonUp.style.transform = "scale(0)";
    }
}






