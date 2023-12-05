console.log("main.js uploaded");
const infoCard = document.getElementById("info-card-layer");
const sidebar = document.getElementById("sidebar");
const mapContainer = document.getElementById("map");
const ARViewer = document.getElementById("arviewer-layer");
const cardTitle = document.getElementById("card-title");
const cardDescription = document.getElementById("card-description");
const story = document.getElementById("story");
/* EDIT20230531A*/
const storyWebp = document.getElementById("story-webp");
console.log(storyWebp);
/* END EDIT20230531A*/
const videoElem = document.getElementById('video');
const errorElem = document.getElementById('error');
const ARviewbtn = document.getElementById('show-ARViewer');

// PLACEHOLDERS FOR CARD CONTENT - DEVELOPMENT ONLY
const dummyTitle = "Piazza della Repubblica"
const dummyDescription = "The first place to go to, in order to immediately immerse yourself into the medieval atmosphere of Foligno, is Piazza della Repubblica. Here there is a monument which reminds us that in this place San Francesco got rid of his goods and put on sale his horse and his possessions to restore the Church of San Damiano, in Assisi. In the square there re the most important buildings of Foligno: the Cathedral, Palazzo Comunale, Palazzo dei Podestà and Palazzo Trinci. Many remember Palazzo Comunale because of the tower collapse caught on live tv during the earthquake of 1997. The building is from 13th century, but it was rebuilt between 1546 and 1642. Palazzo del Podestà hosted popular gatherings by the time of Comuni, together with Palazzo Orsini, which houses a beautiful Museum of Printing, an unmissable historica place. Here, Johannes Numeister, pupil of Gutenberg, printed the first edition of Divine Comedy by Dante Alighieri in 1472. Under a glass next to Palazzo del Podestà you can see the “pozzo dei miracoli”, a holy well built in the Middle Ages."


//Declare the MediaStreamConstraints object
const constraints = {
    audio: false,
    video: true
}

const hideInfoCard = () => {
    console.log("Hide info card");
    infoCard.setAttribute("hidden", "hidden");
    sidebar.removeAttribute("hidden");
    mapContainer.removeAttribute("hidden");
};

const showInfoCard = (title, description,spritemap) => {
    console.log("Show info card");
    //MODIFY WITH DATA FROM MAPBOX
    cardTitle.innerText = title;
    cardDescription.innerText = description;
    //------
    infoCard.removeAttribute("hidden");
    sidebar.setAttribute("hidden", "hidden");
    mapContainer.setAttribute("hidden", "hidden");
    ARviewbtn.addEventListener("click",showARViewer(spritemap));
};

const hideSidebar = () => {
    console.log("Hide sidebar");
    sidebar.setAttribute("hidden", "hidden");
};

const showSidebar = () => {
    console.log("Show sidebar");
    sidebar.removeAttribute("hidden");
};

const back2Index = () => {
    console.log("Show sidebar");
    window.location.href = "index.html"
};

const back2Map = () => {
    //history.back();
    location.reload();
}

const hideARViewer = () => {
    console.log("Hide AR Viewer");
    sidebar.removeAttribute("hidden");
    mapContainer.removeAttribute("hidden");
    ARViewer.setAttribute("hidden", "hidden");
    video.setAttribute("hidden", "hidden");
    closeCamera();
    // Must also stop the camera
};

const showARViewer = (spritemap) => {
    console.log("Show AR Viewer");
    story.setAttribute("src", `./assets/img/sprites/${spritemap}.png`);
    /* EDIT20230531A*/
    storyWebp.setAttribute("srcset", `./assets/img/sprites/${spritemap}.webp`);
    /* END EDIT20230531A*/
    //ARViewer.setAttribute("width", "70vw"); /*EDITED: REMOVE */
    openCamera()
    
    ARViewer.removeAttribute("hidden");
    video.removeAttribute("hidden");
    infoCard.setAttribute("hidden", "hidden");
    
}


function openCamera() {
//Ask the User for the access of the device camera and microphone
    navigator.mediaDevices.getUserMedia({video: {
        audio: false,
        facingMode: 'environment'
      }},constraints)
    .then(mediaStream => {
        /* The received mediaStream contains both the
        video and audio media data*/

        /*Add the mediaStream directly to the source of the video element using the srcObject attribute*/
        videoElem.srcObject = mediaStream;

    }).catch(err => {
        // handling the error if any
        errorElem.innerHTML = err;
        errorElem.style.display = "block";
    });

}
function closeCamera(){
    videoElem.srcObject = null;
}