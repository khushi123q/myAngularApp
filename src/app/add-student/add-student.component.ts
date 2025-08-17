import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-student',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {
  studentForm: FormGroup;
  editIndex: number | null = null;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.studentForm = this.fb.group({
      name: ['', Validators.required],
      rollNo: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      class: ['', Validators.required],
      section: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['index'] !== undefined) {
        this.editIndex = +params['index'];
        const storedStudents = localStorage.getItem('students');
        if (storedStudents) {
          const students = JSON.parse(storedStudents);
          const student = students[this.editIndex];
          if (student) {
            this.studentForm.patchValue(student);
          }
        }
      }
    });
  }

  onSubmit() {
    if (this.studentForm.valid) {
      const storedStudents = localStorage.getItem('students');
      let students = storedStudents ? JSON.parse(storedStudents) : [];

      if (this.editIndex !== null) {
        // Update existing student
        students[this.editIndex] = this.studentForm.value;
      } else {
        // Add new student
        students.push(this.studentForm.value);
      }

      localStorage.setItem('students', JSON.stringify(students));
      alert(this.editIndex !== null ? 'Student Updated Successfully!' : 'Student Added Successfully!');
      this.router.navigate(['/dashboard']);
    }
  }

  onCancel() {
    this.router.navigate(['/dashboard']);
  }
}
