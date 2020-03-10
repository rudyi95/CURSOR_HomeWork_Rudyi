
function getRandomColor(){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let colorRes = `rgb(${r},${g},${b})`;
    return colorRes;
}
document.addEventListener('keypress', function(event){
    let button = document.getElementById(event.key.toUpperCase());
    console.log('button: ', button);
    button.style.border = `5px ${getRandomColor()} solid`;
    let music = document.getElementById(`${button.id}-sound`);
    music.currentTime = 0;
    music.play();
})
document.addEventListener('click', function(event){
    let button = document.getElementById(event.srcElement.id.toUpperCase());
    button.style.border = `5px ${getRandomColor()} solid`;
    let music = document.getElementById(`${button.id}-sound`);
    music.currentTime = 0;
    music.play();
})