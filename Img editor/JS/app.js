//filters
let saturate = document.getElementById("saturate");
let contrast = document.getElementById("contrast");
let brightness = document.getElementById("brightness");
let sepia = document.getElementById("sepia");
let grayscale = document.getElementById("grayscale");
let blur = document.getElementById("blur");
let hueRotate = document.getElementById("hue-rotate");
//bottons myImg
let img = document.getElementById("img");
let upload = document.getElementById("upload");
let download = document.getElementById("download");

let reset = document.querySelector("span");
let imgBox = document.querySelector(".img-box");

const canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
//main code
window.onload = function (){
    download.style.display = "none";
    reset.style.display = "none";
    imgBox.style.display = "none";
};

function resetValue(){
    img.style.filter = 'none';
    saturate.value = '100';
    brightness.value = '100';
    contrast.value = '100';
    sepia.value = '0';
    grayscale.value = '0';
    hueRotate.value = '0';
    blur.value = '0';
}

upload.onchange = function (){
    resetValue();
    download.style.display = "block";
    reset.style.display = "block";
    imgBox.style.display = "block";
    let file = new FileReader();
    file.readAsDataURL(upload.files[0]);
    file.onload = function (){
        img.src = file.result;
    }

const canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

img.onload = function(){
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img,0,0,canvas.width,canvas.height);
    img.style.display = "none";
}

};
//code of filters
let filters = document.querySelectorAll("ul li input");
filters.forEach( filter => {
    filter.addEventListener('input',function(){
        ctx.drawImage(img,0,0,canvas.width,canvas.height);
        ctx.filter =`
        saturate(${saturate.value}%)
        brightness(${brightness.value}%)
        sepia(${sepia.value}%)
        blur(${blur.value}px)
        grayscale(${grayscale.value})
        hue-rotate(${hueRotate.value}deg)
        `

    })
})

download.onclick = function(){
    download.href = canvas.toDataURL();
}