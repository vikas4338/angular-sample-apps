import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from './model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private url = '';

  constructor(private http: HttpClient)  {

  }

  save(employee: Employee){
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');

    this.http.post(this.url, employee, { headers: headers }).subscribe((response)=> {
        console.log('Successfully saved to db');
    });
  }

  getAll(): Employee[] {
    let employees: Employee[] = [];
    this.http.get<Employee[]>(this.url).subscribe((response)=> {
        employees = response;
    });

    return employees;
  }
}
