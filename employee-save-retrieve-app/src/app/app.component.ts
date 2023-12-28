import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Employee } from './model/employee';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  employeeForm: FormGroup;
  employees: Employee[] = [];
  ngOnInit(): void {
    this.getEmployees();
  }

  constructor(private fb: FormBuilder, private empService: EmployeeService) {
    this.employeeForm = this.fb.group({
      'id': new FormControl('', Validators.required),
      'name': new FormControl('', Validators.required),
      'age': new FormControl('', Validators.required)
    });
  }

  onSubmit(){
    let employeeInfo = new Employee(this.employeeForm.value['id'], this.employeeForm.value['name'], this.employeeForm.value['age']);
    console.log(employeeInfo);
    this.empService.save(employeeInfo).subscribe(()=>{
      this.getEmployees();
    });

    this.employeeForm.reset();
  }

  getEmployees(){
    this.empService.getAll().subscribe((response)=>{
      this.employees = response;
    });
  }
}
