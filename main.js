img = "";
Status = "";

function preload(){
     img = loadImage("fruits_img.jpg");
}
function setup() {
    canvas = createCanvas(380, 380);
    canvas.center();
    object = ml5.objectDetector("cocossd", modals);
     document.getElementById("status").innerHTML = "Status : Detecting objects";

}
function modals(){
   console.log("model is loaded");
   Status = true;
}

function gotresult(error, results) {
    if (error) {
         console.error(error);
    }
    else {
         console.log(results);
         objects = results;
    }
}