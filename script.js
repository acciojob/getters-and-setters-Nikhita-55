//complete this code
class Person {
	constructor(name,age){
		this.name=name
this.age=age
	}
get name(){
	return this.name;
}
	set age(age){
		if(age>0)
			this.age=age;
	}
	else {
            throw new Error("Age must be positive.");
        }
    }

    get age() {
        return this.age;
    }
}

class Student extends Person {
	 study() {
        console.log(`${this.name} is studying.`);
    }
}

class Teacher extends Person {
	  teach() {
        console.log(`${this.name} is teaching.`);
    }
}
const student = new Student("Alice", 20);
student.study();  // Output: Alice is studying.

const teacher = new Teacher("Mr. Smith", 40);
teacher.teach();

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
