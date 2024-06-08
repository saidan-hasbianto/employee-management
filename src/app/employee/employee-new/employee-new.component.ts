import { Component } from '@angular/core';
import { Employee } from '../models/employee.model';
import { v4 as uuidv4 } from 'uuid';
import { Router } from '@angular/router';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee-new',
  templateUrl: './employee-new.component.html',
  styleUrls: ['./employee-new.component.scss']
})
export class EmployeeNewComponent {
  employee: Employee = {
    id: '',
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    birthDate: new Date(),
    basicSalary: 0,
    status: '',
    group: '',
    description: ''
  };

  constructor(private employeeService: EmployeeService, private router: Router) { }

  onSubmit() {
    this.employee.id = uuidv4();
    this.employeeService.addEmployee(this.employee).subscribe(() => {
      this.router.navigate(['/employee/list']);
    });
  }
}
