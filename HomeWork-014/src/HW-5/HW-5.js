export default function getRandomArray(length, min, max){
    const arrLength = [];
    for(let i = 0; i < length; i++){
        arrLength[i] = Math.floor(Math.random()*(max - min)+min);
    }
    return arrLength;
};