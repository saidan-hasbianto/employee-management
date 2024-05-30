import { Component } from '@angular/core';

interface Employee {
  id: number;
  name: string;
  position: string;
}

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent {
  employees = [
    {
      username: 'jdoe',
      firstName: 'John',
      lastName: 'Doe',
      email: 'jdoe@example.com',
      birthDate: new Date(1990, 1, 1),
      basicSalary: 50000,
      status: 'Active',
      group: 'A',
      description: 'Senior Developer'
    },
    // Tambahkan data employee lainnya di sini
  ];

  isAddEmployeeFormVisible = false;

  newEmployee = {
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    birthDate: '',
    basicSalary: 0,
    status: '',
    group: '',
    description: ''
  };

  showAddEmployeeForm() {
    this.isAddEmployeeFormVisible = true;
  }

  hideAddEmployeeForm() {
    this.isAddEmployeeFormVisible = false;
  }

  onSubmit() {
    this.employees.push({...this.newEmployee, birthDate: new Date(this.newEmployee.birthDate)});
    this.newEmployee = {
      username: '',
      firstName: '',
      lastName: '',
      email: '',
      birthDate: '',
      basicSalary: 0,
      status: '',
      group: '',
      description: ''
    };
    this.isAddEmployeeFormVisible = false;
  }

  editEmployee(employee :any) {
    // Logika untuk mengedit employee
  }

  deleteEmployee(employee:any) {
    const index = this.employees.indexOf(employee);
    if (index > -1) {
      this.employees.splice(index, 1);
    }
  }
}
