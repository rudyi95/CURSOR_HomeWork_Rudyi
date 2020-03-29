export default function getMaxDigit(number){
    number = number.toString();
    let maxDigit = 0;
    for (let i = 0; i < number.length; i++) {
        if(maxDigit < number[i]){
            maxDigit = number[i];
        }
    }
    return number + ' => ' + maxDigit;
}

