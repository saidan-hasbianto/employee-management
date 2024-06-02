import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiUrl = 'http://localhost:3000/employees';

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiUrl).pipe(
      map((data: any[]) => data.map(item => ({
        id: item.id,
        username: item.username,
        firstName: item.firstName,
        lastName: item.lastName,
        email: item.email,
        birthDate: new Date(item.birthDate),
        basicSalary: item.basicSalary,
        status: item.status,
        group: item.group,
        description: item.description
      }))));
  }
}
