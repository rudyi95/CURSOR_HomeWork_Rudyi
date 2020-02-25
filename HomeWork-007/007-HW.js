const ukraine = { 
    tax: 0.195, 
    middleSalary: 1789, 
    vacancies: 11476 
};
const latvia = { 
    tax: 0.25, 
    middleSalary: 1586, 
    vacancies: 3921 
};
const litva = { 
    tax: 0.15, 
    middleSalary: 1509, 
    vacancies: 1114 
};

//1)
function country(salary){
return this.tax * salary + " грн.";
};

//2)
function getMiddleTaxes(){
    return this.tax * this.middleSalary + " грн.";
};

//3)
function getTotalTaxes(){
    return this.tax * this.middleSalary * this.vacancies + " грн.";
};


//4)
function getMySalary(){
let mySalary = {};
mySalary.salary = Math.floor(Math.random()*500+1500);
mySalary.taxes = (this.tax * mySalary.salary).toFixed(2);
mySalary.profit = (mySalary.salary - mySalary.taxes).toFixed(2);

return JSON.stringify(mySalary);
};
setInterval(()=> console.log(getMySalary.call(ukraine)), 10000);


console.log(`
1)Ви заплатите податку: 
${country.call(ukraine, 1000)}
----------------------------------
2)В середньому сплачують податку: 
${getMiddleTaxes.call(ukraine)}
----------------------------------
3)Всі працівники IT-сфери загалом сплачують: 
${getTotalTaxes.call(ukraine)}
----------------------------------
4)Моя зарплата: 
${getMySalary.call(ukraine)}
`);