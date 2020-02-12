
const students = ["Саша", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференціальні рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

function pairsOfStudents(students) {
    return [
        [students[0], students[5]].join(" і "),
        [students[1], students[3]].join(" і "),
        [students[4], students[2]].join(" і ")
    ];
}
const pairs = pairsOfStudents(students);

function studentsThemes(pairs, themes) {
    const pairThemes = [];

    for (let i = 0; i < pairs.length; i++) {
        pairThemes[i] = [pairs[i], themes[i]].join(" - ");
    }
    return pairThemes;
}
const studentsAndThemes = studentsThemes(pairs, themes);

function studentsMarks(students, marks) {
    const studentsAndMarks = [];

    for (let i = 0; i < students.length; i++) {
        studentsAndMarks[i] = [students[i], marks[i]].join(" - ");
    }
    return studentsAndMarks;

}
const studentsWithMarks = studentsMarks(students, marks);

function randomPairsMarks(studentsAndThemes) {
    const pairsAndMarks = [];
    let randomMark = [];

    for (let i = 0; i < studentsAndThemes.length; i++) {
        pairsAndMarks[i] = [studentsAndThemes[i], randomMark[i] = Math.round(Math.random() * (5 - 1) + 1)].join(". Оцінка: ");
    }
    return pairsAndMarks;
}

const pairsWithRandomMarks = randomPairsMarks(studentsAndThemes);


document.write(`
<br><br>
<b>Список студентів:</b> <u>${students}</u> <br>
<b>Список тем:</b> <u>${themes}</u> <br>
<b>Оцінки:</b> <u>${marks}</u> <br><br><br>
1)<b>Студенти поділені на пари:</b> ${pairs.join(" , ")} <br><br>
2)<b>Студенти та їх теми:</b> ${studentsAndThemes} <br><br>
3)<b>Оцінки студентів:</b> ${studentsWithMarks} <br><br>
4)<b>Оцінка пари студентів:</b> ${pairsWithRandomMarks.join(" , ")}
`);
