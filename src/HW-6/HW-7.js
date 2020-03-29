const ukraine = { 
    tax: 0.195, 
    middleSalary: 1789, 
    vacancies: 11476 
};
function getMySalary(){
    let mySalary = {};
    mySalary.salary = Math.floor(Math.random()*500+1500);
    mySalary.taxes = (this.tax * mySalary.salary).toFixed(2);
    mySalary.profit = (mySalary.salary - mySalary.taxes).toFixed(2);
    
    return JSON.stringify(mySalary);
    };

    export default getMySalary.call(ukraine);