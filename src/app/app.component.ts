import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Employee } from './model/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  employeeForm: FormGroup;
  employees: Employee[] = [];
  ngOnInit(): void {

  }

  constructor(private fb: FormBuilder) {
    this.employeeForm = this.fb.group({
      'id': new FormControl('', Validators.required),
      'name': new FormControl('', Validators.required),
      'age': new FormControl('', Validators.required)
    });
  }

  onSubmit(){
    this.employees.push(new Employee(
      this.employeeForm.value['id'],
      this.employeeForm.value['name'],
      this.employeeForm.value['age']
    ));

    this.employeeForm.reset();

    console.log(this.employees);
  }
}
