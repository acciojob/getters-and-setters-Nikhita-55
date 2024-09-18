//complete this code
class Person {
    constructor(name, age) {
        this._name = name; // Use a private variable for name
        this._age = age;   // Use a private variable for age
    }

    // Getter for name
    get name() {
        return this._name; // Return the private variable _name
    }

    // Setter for age
    set age(age) {
        if (age > 0) {
            this._age = age; // Set the private variable _age
        } else {
            throw new Error("Age must be positive.");
        }
    }

    // Getter for age
    get age() {
        return this._age; // Return the private variable _age
    }
}

// Subclass Student extends Person
class Student extends Person {
    study() {
        console.log(`${this.name} is studying.`);
    }
}

// Subclass Teacher extends Person
class Teacher extends Person {
    teach() {
        console.log(`${this.name} is teaching.`);
    }
}

const student = new Student("Alice", 20);
student.study();  // Output: Alice is studying.

const teacher = new Teacher("Mr. Smith", 40);
teacher.teach();  // Output: Mr. Smith is teaching.

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;


