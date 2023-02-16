const imageContainerEl = document.querySelector(".image-container");
const prevEl = document.getElementById("prev");
const nextEl = document.getElementById("next");
let x = 0;
let timer;
document.onkeydown = checkKey;
// derecha = 39
// izqueirda = 37

function checkKey(e){
    e = e || window.event;
    if (e.keyCode == '37') {
        x = x+45;
        clearTimeout(timer);
        updateGallery();
    }else if(e.keyCode == '39'){
        x = x-45;
        clearTimeout(timer);
        updateGallery();
    }
}

prevEl.addEventListener("click", ()=>{
    x = x+45;
    clearTimeout(timer);
    updateGallery();
});
nextEl.addEventListener("click", ()=>{
    x = x-45;
    clearTimeout(timer);
    updateGallery();
});
function updateGallery(){
    imageContainerEl.style.transform = `perspective(1000px) rotateY(${x}deg)`;
    timer = setTimeout(()=>{
        x = x - 45;
        updateGallery();
    },8000);
};
updateGallery();