let numberN, numberM, verN, verM, verIntN, verIntM, missNum, numbers = 0, answer;

//1)
numberN = prompt("Write number N ", 1);

if(numberN == null){
    numberN = 'sda';
    alert("You clicked cancel!");
}else if(numberN == ''){
    numberN = 'sda'
    alert("You didn't write anything!");
}

verN = +numberN;
    while(!Number.isInteger(verN)){
        alert("Write integer please!!!");
        numberN = prompt("Write number N again", 1);

        if(numberN == null){
            numberN = 'sda';
            alert("You clicked cancel!");
        }else if(numberN == ''){
            numberN = 'sda'
            alert("You didn't write anything!");
        }
        verN = +numberN;
    }

/*-------------------------------------------------------*/

//2)
numberM = prompt("Write number M ", 10);

if(numberM == null){
    numberM = 'sda';
    alert("You clicked cancel!");
}else if(numberM == ''){
    numberM = 'sda'
    alert("You didn't write anything!");
}

verM = +numberM;
while(!Number.isInteger(verM)){
    alert("Write integer please!!!");
    numberM = prompt("Write number M again", 10);

    if(numberM == null){
        numberM = 'sda';
        alert("You clicked cancel!");
    }else if(numberM == ''){
        numberM = 'sda'
        alert("You didn't write anything!");
    }
    verM = +numberM;
}

/*-------------------------------------------------------*/

//3)
missNum = confirm("Miss even numbers? ");
if(missNum == true){
    answer = "YES!";
}else{
    answer = "NO!";
}
if(missNum == false){
    for(let i = verN; i <= verM; i++){
            numbers += i;
        }       
    }else{
        for(let j = verN; j <= verM; j++){
            if(j % 2 != 0) {
                numbers += j;
            }
        }
    }


/*-------------------------------------------------------*/
document.write(`
Number N: ${numberN} </br>
Number M: ${numberM} </br>
Miss even numbers: ${answer} </br>
Summ of numbers is: ${numbers} </br>
`)