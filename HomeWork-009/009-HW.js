
let square = document.getElementById("square");

function getRandomColor(){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let colorRes = `rgb(${r},${g},${b})`;
    return colorRes;
}

function generateBlocks(){
    for(let i = 0; i < 25; i++){
    let miniBox = document.createElement("div");
    miniBox.className = 'miniBlocks';
    miniBox.style.height = "50px";
    miniBox.style.width = "50px";
    miniBox.style.background = getRandomColor();
    square.append(miniBox);
    }
}

function generateBlocksInterval(){
generateBlocks();
    function repeatSquare(){
        square.innerHTML = "";
        generateBlocks();
    }
    setInterval(() => {
        repeatSquare();
    }, 1000);
}

generateBlocksInterval();