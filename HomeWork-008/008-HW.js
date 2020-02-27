class Student{
    marks = [5, 4, 4, 5];
    newMarks = [];
    constructor (university, course, fullName){
        this.university = university;
        this.course = course;
        this.fullName = fullName;
    }
    get getUserInfo() {
        return 'Студент:' + this.fullName + '; Університет:' + this.university + '; Курс:' + this.course + ';';
    }

    set setUserMark(mark){
        if(isNaN(mark)){
            return console.log('None');
        } else{
            this.marks.push(mark);
            return this.marks;
        }
    } 

    get getUserMarks(){
        if(this.newMarks == null){
            return null;
        }else{
        this.newMarks = this.marks;
        return this.newMarks;
    }
}
    get getAverageMark(){
        if(this.newMarks == null){
            return null;
        }else{
            return this.marks.reduce((average,number) => average += number) / this.marks.length;
    }
}

    dismissStudent(){
        this.marks = this.newMarks;
        this.newMarks = null;
        return '- виключено';
    }

    recoverStudent(){
        this.newMarks = this.marks
        return '- включено';
    }

    
}
let student = new Student('Львівська політехніка', 2, 'Рудий Назар');

class BudjetStudent extends Student {
    constructor (university, course, fullName){
        super(university, course, fullName)
        setInterval(()=> this.getScholarship(), 30000);
    }

    getScholarship(){
        if(this.getAverageMark >= 4){
            return console.log('Ви отримали стипендію : 1400грн.')
        }else{
            return console.log('Студента виключено.Не можливо получити стипендію!')
        }
    }
}
let student2 = new BudjetStudent('Львівська політехніка', 2, 'Клон Назар');


//2)
console.log('1)', student.getUserInfo);

//3)
console.log('2) Масив оцінок студента: ', student.marks);

//4)
console.log('3) Доставили оцінку : ' ,student.setUserMark = 5);
console.log('Тепер у студента такі оцінки: ',student.getUserMarks);
console.log('Доставили ще одну оцінку : ' ,student.setUserMark = 6);
console.log('Тепер у студента такі оцінки: ',student.getUserMarks);

//5)
console.log('4) Середня оцінка',student.getAverageMark.toFixed(2));

//6)
console.log('5) Виключити студента', student.dismissStudent());
console.log('Студента виключено! Оцінки:', student.getUserMarks);
console.log('6) Студента прийнято назад на навчання: ',student.recoverStudent());
console.log('Студента прийнято! Оцінки: ',student.getUserMarks);

//Advansed
 
console.log(student2.getUserInfo);
console.log(student2.getScholarship());


