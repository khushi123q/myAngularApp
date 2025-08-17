import { Component } from '@angular/core';

interface Student {
  name: string;
  rollNo: number;
  class: string;
  section: string;
}


@Component({
  selector: 'app-dash-board',
  imports: [],
  templateUrl: './dash-board.component.html',
  styleUrl: './dash-board.component.css'
})
export class DashBoardComponent {
  students: Student[] = [
    { name: 'Rahul Sharma', rollNo: 101, class: '10', section: 'A' },
    { name: 'Priya Verma', rollNo: 102, class: '10', section: 'B' },
    { name: 'Aman Singh', rollNo: 103, class: '9', section: 'A' },
  ];

  addStudent() {
    const newStudent: Student = { name: 'New Student', rollNo: 104, class: '9', section: 'C' };
    this.students.push(newStudent);
  }
}
