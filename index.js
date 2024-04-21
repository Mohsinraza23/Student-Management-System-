#!/usr/bin/env node
import chalk from 'chalk';
// Define a class to manage students
class StudentManager {
    students;
    constructor() {
        this.students = [];
    }
    // Add a new student
    addStudent(student) {
        this.students.push(student);
    }
    // Update student information
    updateStudent(studentId, updatedInfo) {
        const studentIndex = this.students.findIndex(student => student.id === studentId);
        if (studentIndex !== -1) {
            this.students[studentIndex] = { ...this.students[studentIndex], ...updatedInfo };
        }
        else {
            console.log(chalk.red(`Student with ID ${studentId} not found.`));
        }
    }
    // Get student by ID
    getStudentById(studentId) {
        return this.students.find(student => student.id === studentId);
    }
    // Get all students
    getAllStudents() {
        return this.students;
    }
}
// Example usage
const studentManager = new StudentManager();
const student1 = { id: 1, name: "Alishba", age: 20, courses: [] };
const student2 = { id: 2, name: "Mohsin", age: 21, courses: [] };
studentManager.addStudent(student1);
studentManager.addStudent(student2);
console.log(chalk.bgBlue("All students:"));
console.log(studentManager.getAllStudents());
studentManager.updateStudent(1, { age: 21 });
console.log(chalk.bgBlue("Updated student:"));
console.log(studentManager.getStudentById(1));
