import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Employee } from '../models/employee.model';
import * as datadummy from '../../../dummy-employees.json';
import { MatSnackBar } from '@angular/material/snack-bar';

const httpOptions = {
  headers: new HttpHeaders(
    {
      'Content-Type': 'application/json'
    }
  )
};

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiUrl = 'http://localhost:3000/employees';

  constructor(private http: HttpClient,
    private _snackBar: MatSnackBar
  ) { }

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

  getData() {
    // return this.http.get<any>('dummy-eemployees.json');
    return datadummy;
  }

  addEmployee(employee: Employee): Observable<Employee> {
    console.log(JSON.stringify(employee));
    return this.http.post<Employee>(this.apiUrl + '/add', JSON.stringify(employee), httpOptions).pipe(
      tap((item: Employee) => this._snackBar.open('Success', 'Employee successfully added', { duration: 2000 })),
      catchError(error => {
        this.openErrorSnackBar('Error di addEmployee');
        return throwError(error);
      })
    );
  }

  openErrorSnackBar(message: string) {
    this._snackBar.open(message, 'Close', {
      duration: 5000, // Durasi notifikasi (dalam milidetik)
      panelClass: ['mat-toolbar', 'mat-warn'], // Kelas panel notifikasi
    });
  }
}
