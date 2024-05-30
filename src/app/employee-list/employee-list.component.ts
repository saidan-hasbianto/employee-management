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
  employees: Employee[] = [
    { id: 1, name: 'John Doe', position: 'Developer' },
    { id: 2, name: 'Jane Smith', position: 'Designer' }
  ];

  addEmployee() {
    const newId = this.employees.length ? Math.max(...this.employees.map(e => e.id)) + 1 : 1;
    const newName = prompt('Enter employee name:');
    const newPosition = prompt('Enter employee position:');

    if (newName && newPosition) {
      this.employees.push({ id: newId, name: newName, position: newPosition });
    }
  }

  editEmployee(employee: Employee) {
    const newName = prompt('Edit employee name:', employee.name);
    const newPosition = prompt('Edit employee position:', employee.position);

    if (newName !== null && newPosition !== null) {
      employee.name = newName;
      employee.position = newPosition;
    }
  }

  deleteEmployee(employee: Employee) {
    const index = this.employees.indexOf(employee);
    if (index !== -1) {
      this.employees.splice(index, 1);
    }
  }
}
