//set varibles
let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let mountains3 = document.getElementById("mountains3");
let mountains4 = document.getElementById("mountains4");
let river = document.getElementById("river");
let boat = document.getElementById("boat");
let noval = document.querySelector(".noval");
let mainbg = document.querySelector(".main");
//main code
window.onscroll = function() {
    let value = scrollY;
    stars.style.left = value + 'px';
    moon.style.top = value*2.5 + 'px';
    mountains3.style.top = value*1.5 +'px';
    mountains4.style.top = value*1.2 + 'px';
    river.style.top = value + 'px';
    boat.style.top = value/1.8 +'px';
    boat.style.left = value*3+'px';
    noval.style.fontSize = value +'px';
    if(scrollY >=65){
        noval.style.fontSize = 65 +'px';
        noval.style.position = 'fixed';
        if(scrollY >= 360){
            noval.style.display= 'none';
        }
        else{
            noval.style.display= "block";
        }
        if(scrollY >= 129){
            mainbg.style.background = "linear-gradient(#376281,#10001f)";
        }else{
            mainbg.style.background = "linear-gradient(#200016,#10001f)";
        }
    }
};
