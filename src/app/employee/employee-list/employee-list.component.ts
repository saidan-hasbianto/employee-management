import { Component, OnInit, ViewChild } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../models/employee.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  displayedColumns: string[] = ['username', 'firstName', 'lastName', 'email', 'birthDate', 'basicSalary', 'status', 'group', 'description', 'actions'];
  dataSource: MatTableDataSource<Employee>;
  pageSize = 10;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private employeeService: EmployeeService) {
    this.dataSource = new MatTableDataSource<Employee>([]);
   }

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe(data => {
      this.dataSource.data = data;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  applyPaging() {
    this.dataSource.paginator._changePageSize(this.pageSize);
  }

  deleteEmployee(employee: Employee) {
    this.dataSource.data = this.dataSource.data.filter(e => e !== employee);
  }

  editEmployee(employee :any) {
    // Logika untuk mengedit employee
  }

  deleteEmployee(employee:any) {
    
  }
}
