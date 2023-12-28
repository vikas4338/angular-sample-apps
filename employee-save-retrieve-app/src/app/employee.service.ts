import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from './model/employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private url = 'https://78trnx3o9b.execute-api.us-east-1.amazonaws.com/EmployeeApi';

  constructor(private http: HttpClient)  {

  }

  save(employee: Employee) : Observable<any> {
    let headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json');
    headers.set('Access-Control-Allow-Origin', '*');

    return this.http.post(this.url + "/save", employee, { headers: headers });
  }

  getAll(): Observable<Employee[]> {
    let employees: Employee[] = [];
    return this.http.get<Employee[]>(this.url + "/getAll");
  }
}
