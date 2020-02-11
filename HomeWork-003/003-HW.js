

//1)
function getMaxDigit(number){
    number = number.toString();
    let maxDigit = 0;
    for (let i = 0; i < number.length; i++) {
        if(maxDigit < number[i]){
            maxDigit = number[i];
        }
    }
    return number + ' => ' + maxDigit;
}
//2)
function power(number, numPow){
    let result = number;
    for (let i = 1; i < numPow; i++) {
        result *= number;
    }
    return 'Число:' + number + ' Степень:' + numPow + ' => ' +  result;
}
//3)
function upFirstWord(word){
    let rightWord = word.toLowerCase();
    rightWord = rightWord[0].toUpperCase() + rightWord.slice(1);
    return word + ' => ' + rightWord;
}
//4)
function salaryAfterTax(mainTax, secondTax, salary){
    let taxTogether = mainTax + secondTax;
    let salaryAfterTax = salary - (salary/100*taxTogether);
    return 'Налог: ' + taxTogether + '%' + ' из: ' + salary + ' => ' + 'З/п: ' + salaryAfterTax;
}
//5)
function getRandomInteger(N, M){
    let randomInteger = Math.floor(Math.random()*(M - N)+N);
    return '<b>от</b> <u>' + N + '</u> <b>до</b> <u>' + M + '</u> => ' + '<u>' + randomInteger + '</u>';
}
//6)
function countLetter(letter,word){
    let wordInLowerCase = word.toLowerCase(), letterInLowerCase = letter.toLowerCase();
    let searchLetter = 0;
    for( let i = 0; i < wordInLowerCase.length; i++){
        if(letterInLowerCase == wordInLowerCase[i]){
            searchLetter += 1;
        }
    }
    return "<b>'" + letter + "'" + ' в слове ' + "'" + word + "'" + ' повторяется</b> ' + ' => <u>' + searchLetter + ' раза</u>';
}
//7)
function convertCurrency(summ, currency){
    let exchangeRateHrvToDollar = 25, hryvnya, dollar, uppCaseCur = currency.toUpperCase();

    if(uppCaseCur === "UAH"){
        dollar = summ/exchangeRateHrvToDollar;
        return summ + 'UAH' + ' по курсу: ' + exchangeRateHrvToDollar + ' => ' + dollar + '$';
    }else if(uppCaseCur === "$"){
        hryvnya = summ*exchangeRateHrvToDollar;
        return summ + '$' + ' по курсу: ' + exchangeRateHrvToDollar + ' => ' + hryvnya + 'UAH';
    }else{
        return "Write ONLY $ or UAH!!!";
    }
}
//8)
function getRandomPassword(numbers){
    let password = '';

    if(numbers == undefined){
        for(let i = 0; i < 8; i++){
            password += Math.floor(Math.random()*10);
        }
        return 'Длина не указанна' + '(по умолчанию длина = 8) ' + ' => ' + password;
    }else if(0 < numbers){
        for(let j = 0; j < numbers; j++){
            password += Math.floor(Math.random()*10);
        }
        return 'Указанная длина: ' + numbers + ' => ' + password;
    }else{
        return 'Write ONLY positive number!!!';
    }
}
//9)
function deleteLetters(letter, word){
    let find = letter, str = word;

    let re = new RegExp(find.toLowerCase(), 'g');
    let newStr = str.replace(re, '');

    let reUpp = new RegExp(find.toUpperCase(), 'g');
    let newStrStrUpp = newStr.replace(reUpp, '');

    return 'Буква: ' + "'" + letter + "'" + ' из слова: ' + "'" + word + "'" + ' => ' + newStrStrUpp;
}
//10)
function isPalyndrom(str){
    let originalStr = str;
    str = str.toLowerCase();
    let result = true;
    for(let i = 0; i < str.length; i++){
        let left = str[i];
        let right = str[str.length - (i + 1)];
        if(left !== right){
           result = false;
           return 'Слово ' + "'" + originalStr + "'" + ' => ' +' не является палиндромом!'
        }else{
           return 'Слово ' + "'" + originalStr + "'" + ' => ' +' является палиндромом!'
        }
    }
    return result;
}
//11)
function deleteDuplicateLetter(str){
    let originalStr = str;
    str = str.toLowerCase();
    let letter ='';
    for(i = 0; i < str.length; i++){
        let count = 0;
        for(let j = 0; j < str.length; j++){
            if(str[i] === str[j]){
                count += 1;
            }
        }
        if(count == 1){
            letter += str[i];
        }
    }
    return 'Предложение: ' + originalStr + ' => ' + letter;
}


document.write(`
1)<b>Самая большая цифра в этом числе:</b> <u>${getMaxDigit(183206)}</u> </br></br>
2)<b>Степень числа:</b> <u>${power(121, 5)}</u> </br></br>
3)<b>Первая буква заглавная:</b> <u>${upFirstWord('naZaR')}</u> </br></br>
4)<b>Сумма оставшаяся после оплаты налога от заработной платы:</b> <u>${salaryAfterTax(18, 1.5, 1000)}</u> </br></br>
5)<b>Целое число в диапазоне</b> ${getRandomInteger(900, 1000)} </br></br>
6)<b>Буква</b> ${countLetter('а','Асталависта')} </br></br>
7)<b>Конвертация денег:</b> <u>${convertCurrency(2500, 'UAH')}</u> </br></br>
8)<b>Генерации случайного пароля (только числа):</b> <u>${getRandomPassword(4)}</u> </br></br>
9)<b>Удалить все указанные буквы из предложения:</b> <u>${deleteLetters('a', 'NazAr')}</u> </br></br>
10)<b>Является ли слово палиндромом:</b> <u>${isPalyndrom('Аргентина манит негра')}</u> </br></br>
11)<b>Удалить из предложения буквы, которые встречаются более 1 раза:</b> <u>${deleteDuplicateLetter('Бисквит был очень нежный')}</u>
`)