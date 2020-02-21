const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4]
    }
  }, {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5]
    }
  }, {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5]
    }
  }];
//1)
getSubjects = (student) => {
  let stud = Object.keys(student.subjects);
  let res = stud.map(element => {
    if(element.includes('_')){
      element = element.replace('_', ' ');
    };
    return element[0].toUpperCase() + element.slice(1);
  });
  return res;
};

//2)
getAverageMark = (student) => {
  let arrMark = Object.values(student.subjects);
  let count = 0, len = 0;
  for(let i = 0; i < arrMark.length; i++){
    for(let j = 0; j < arrMark[i].length; j++){
      count += arrMark[i][j];
      len += 1;
    };
  };
  return (count/len).toFixed(2);
};

//3)
getStudentInfo = (student) => {
  let inf = {};
  inf.name = student.name;
  inf.course = student.course;
  inf.averageMark = getAverageMark(student);
  return  ' Name : '+ inf.name + '; Course :' + inf.course + ';  Average Mark:' + inf.averageMark + ';';
};

//4)
getStudentsNames = (students) => students.map(student => student.name).sort();

//5)
getBestStudent = (students) => {
  let bestStudent = {};
  bestStudent = students[0];
  let bestMark = getAverageMark(students[0]);

  for (let i = 0; i < students.length; i++){

    if(bestMark <= getAverageMark(students[i])){
      bestStudent = students[i];
    };

  };
return bestStudent.name;
};

//6)
calculateWordLetters = (string) => {
  stringInLowCase = string.toLowerCase();
  let countLet = {};

  for(let i = 0; i < stringInLowCase.length; i++){
    if(!Object.keys(countLet).includes(stringInLowCase[i])){
      countLet[stringInLowCase[i]] = 1;
    }else{
      countLet[stringInLowCase[i]] += 1;
    };
  };
  
  return  JSON.stringify(countLet);
};

document.write(`
1)<b>Список предметів студента ${students[0].name}:</b> <u>${getSubjects(students[0])}</u><br><br>
2)<b>Середня оцінка по всіх предметах студента ${students[0].name}:</b> <u>${getAverageMark(students[0])}</u><br><br>
3)<b>Інформація про студента ${students[0].name}:</b> <u>${getStudentInfo(students[0])}</u><br><br>
4)<b>Список студентів в алфавітному порядку:</b> <u>${getStudentsNames(students)}</u><br><br>
5)<b>Найкращий студент серед усіх по середній оцінці:</b> <u>${getBestStudent(students)}</u><br><br>
6)<b>Кількість повторень букв у слові:</b> <u>${calculateWordLetters("тест")}</u>
`);
