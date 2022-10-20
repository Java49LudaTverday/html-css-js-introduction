console.log("Launching scrips");
const anchors = document.querySelectorAll (".thambnails-ancor");
const detailsImage = document.querySelector (".image-title");
const detailsTitle = document.querySelector (".details-title");
const mainClass = document.querySelector (".main-class");
const HIDDEN = "hidden";
function setDetails (anchor){
    detailsImage.setAttribute ('src', anchor.getAttribute('data-details-image'));
    detailsTitle.innerHTML = anchor.getAttribute ('data-details-title');
}
for(let i=0; i<anchors.length; i++){
    anchors[i].addEventListener ("click", function (){
        console.log ("event-click on", anchors [i]);
        showDetails ();
        setDetails (anchors[i]);
    })
}
function showDetails (){
mainClass.classList.remove ("hidden");
}
function hideDetails () {
mainClass.classList.add (HIDDEN);
}