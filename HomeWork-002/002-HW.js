let numberN, numberM, verN, verM, verIntN, verIntM, missNum, numbers = 0, answer;

numberN = prompt("Write number N ", 1);
verN = +numberN;
while(isNaN(verN)){
    numberN = prompt("Write number N again", );
    verN = +numberN;
}
verIntN = Number.isInteger(verN);

numberM = prompt("Write number M ", 10);
verM = +numberM;
while(isNaN(verM)){
    numberM = prompt("Write number M again", );
    verM = +numberM;
}
verIntM = Number.isInteger(verM);

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
    
document.write(`
Number N: ${numberN} </br>
Number M: ${numberM} </br>
Miss even numbers: ${answer} </br>
Summ of numbers is: ${numbers} </br>
`)