document.getElementById("clicker").addEventListener("click", mImage);

function mImage() {
    const lightImage = document.getElementById("image");
    const buttonclick = document.getElementById("clicker");

    const isImageOff = lightImage.src.endsWith("bulb-off.png");

    lightImage.src = isImageOff ? "https://i.postimg.cc/6QyTynzr/bulb-on.png" : "https://i.postimg.cc/KjK1wL3c/bulb-off.png";
    buttonclick.textContent = isImageOff ? "Apagar" : "Acender";
    document.body.style.backgroundColor = isImageOff ? "white" : "black"; 
}
