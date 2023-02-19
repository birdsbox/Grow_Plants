window.onload=function(){

    const plant = document.getElementById("plant");
    plant.innerHTML = "<img src=\"download.png\">";

    const plantImages = ["download (1).png", "download (2).png",  "download (3).png", "download (4).png",  "download (5).png"];

    const addWater = document.getElementById("water");

    let counter =0;
    let imageCounter = 1;
    addWater.addEventListener("click", function() {
        counter =counter +1;
        if (counter >=5){
            plant.innerHTML = "<img src=\"download (" + imageCounter + ").png\">";
            counter =0;
            imageCounter =1+imageCounter;

        }

    });

}