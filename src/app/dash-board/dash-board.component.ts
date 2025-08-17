import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

interface Student {
  name: string;
  rollNo: number;
  class: string;
  section: string;
}

@Component({
  selector: 'app-dash-board',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent {
  students: Student[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    this.loadStudents();
  }

  loadStudents() {
    const storedStudents = localStorage.getItem('students');
    this.students = storedStudents ? JSON.parse(storedStudents) : [];
  }

  addStudent() {
    this.router.navigate(['/add-student']);
  }

  editStudent(index: number) {
    // Pass index in queryParams so AddStudent knows we are editing
    this.router.navigate(['/add-student'], { queryParams: { index } });
  }

  deleteStudent(index: number) {
    if (confirm('Are you sure you want to delete this student?')) {
      this.students.splice(index, 1);
      localStorage.setItem('students', JSON.stringify(this.students));
    }
  }
}
