console.log("Launching scrips");
const anchors = document.querySelectorAll (".thambnails-ancor");
const detailsImage = document.querySelector (".image-title");
const detailsTitle = document.querySelector (".details-title");
const mainClass = document.querySelector (".main-class");
const detailContainer = document.querySelector (".detail-container");
const detailAudio = document.querySelector (".detail-audio");
const HIDDEN = "hidden";
const IS_POINT = "is-point";
function setDetails (anchor){
    detailsImage.setAttribute ('src', anchor.getAttribute('data-details-image'));
    detailsTitle.innerHTML = anchor.getAttribute ('data-details-title');
    detailAudio.setAttribute ('src', anchor.getAttribute('data-details-audio'));
    
}
for(let i=0; i<anchors.length; i++){
    anchors[i].addEventListener ("click", function (){
        console.log ("event-click on", anchors [i]);
        setDetails (anchors[i]);
        showDetails ();        
    })
}
function showDetails (){
mainClass.classList.remove ("hidden");
detailContainer.classList.add (IS_POINT);
setTimeout(function(){
    detailContainer.classList.remove (IS_POINT);   
},1);
detailAudio.play ();
setTimeout (function () {
    detailAudio.pause ();
   /* detailAudio.currentTime=0;*/
 },5000);
}
function hideDetails () { 
mainClass.classList.add (HIDDEN);
detailAudio.pause ();
}
