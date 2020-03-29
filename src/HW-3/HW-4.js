
let students = ["Саша", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
function pairsOfStudents(students) {  
    return `
    1)${[students[0], students[5]]}
    2)${[students[1], students[3]]}
    3)${[students[4], students[2]]}
    `;
}

let resStud = pairsOfStudents(students);
export default resStud;