

//1)
function getRandomArray(length, min, max){
    const arrLength = [];
    for(let i = 0; i < length; i++){
        arrLength[i] = Math.floor(Math.random()*(max - min)+min);
    }
    return arrLength;
};

//3)
getAverage = (...numbers) => {
    let integers = numbers.filter(num => num % 2 == 0 || num % 2 == 1 && Number.isInteger(num));
    let average = integers.reduce((a,b) => a + b) / integers.length;
    return average;
};

//4)
getMedian = (...numbers) => {
    numbers.sort((a,b) => a - b);
    let leftNum = Math.ceil((numbers.length - 1)/2);
    let rightNum = Math.floor((numbers.length - 1)/2);
    let median = (numbers[rightNum] + numbers[leftNum])/2;
    return median;
};

 //5)
filterEvenNumbers = (...numbers) => numbers.filter(number => number % 2 != 0);

//6)
countPositiveNumbers = (...numbers) => numbers.filter(number => number > 0).length;

//7)
getDividedByFive = (...numbers) => numbers.filter(number => number % 5 == 0);

//8)
function replaceBadWords(string, ...words){
    let strSplitted = string.split(" ");
    let badWords = [...words];
    let result = '';

    for(let i = 0; i < strSplitted.length; i++){

       for(let j = 0; j < badWords.length; j++){
        let reUpp = new RegExp(badWords[j], 'g');
        strSplitted[i] = strSplitted[i].replace(reUpp, '***');
       }
    }

    result = strSplitted.join(' ');
    return result;
}



console.log(`
1 - 1)Масив випадкових чисел: ${getRandomArray(15, 1, 100)}
2 - 3)Середнє арифметичне: ${getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)}
3 - 4)Медіана чисел: ${getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)}
4 - 5)Не парні числа масиву: ${filterEvenNumbers(1, 2, 3, 4, 5, 6)}
5 - 6)Додатні числа масиву: ${countPositiveNumbers(1, -2, 3, -4, -5, 6)}
6 - 7)Числа кратні числу 5: ${getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)}
7 - 8)Цензура: ${replaceBadWords("Are you fucking kidding?", "fucking", "shit")}
`);