#!/usr/bin/env node

import inquirer from "inquirer";

import chalk from 'chalk';

// Define interfaces for Student and Course
interface Student {
  id: number;
  name: string;
  age: number;
  courses: Course[];
}

interface Course {
  id: number;
  name: string;
  credits: number;
}

// Define a class to manage students
class StudentManager {
  private students: Student[];

  constructor() {
    this.students = [];
  }

  // Add a new student
  addStudent(student: Student): void {
    this.students.push(student);
  }

  // Update student information
  updateStudent(studentId: number, updatedInfo: Partial<Student>): void {
    const studentIndex = this.students.findIndex(student => student.id === studentId);
    if (studentIndex !== -1) {
      this.students[studentIndex] = { ...this.students[studentIndex], ...updatedInfo };
    } else {
      console.log(chalk.red(`Student with ID ${studentId} not found.`));
    }
  }

  // Get student by ID
  getStudentById(studentId: number): Student | undefined {
    return this.students.find(student => student.id === studentId);
  }

  // Get all students
  getAllStudents(): Student[] {
    return this.students;
  }
}

// Example usage
const studentManager = new StudentManager();

const student1: Student = { id: 1, name: "Alishba", age: 20, courses: [] };
const student2: Student = { id: 2, name: "Mohsin", age: 21, courses: [] };

studentManager.addStudent(student1);
studentManager.addStudent(student2);

console.log(chalk.bgBlue("All students:"));
console.log(studentManager.getAllStudents());

studentManager.updateStudent(1, { age: 21 });

console.log(chalk.bgBlue("Updated student:"));
console.log(studentManager.getStudentById(1));
