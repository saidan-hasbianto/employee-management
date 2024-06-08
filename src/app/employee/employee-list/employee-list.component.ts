import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../models/employee.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import * as datadummy from '../../../dummy-employees.json';

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

  constructor(
    private cdr: ChangeDetectorRef,
    private svc: EmployeeService

  ) {
    this.dataSource = new MatTableDataSource<Employee>([]);
  }

  ngOnInit(): void {
    console.log('disiniiiiiiiiiiiii', datadummy);
    // this.dataSource.data = (datadummy as any).default; 
    this.dataSource.data = (this.svc.getData() as any).default;
    this.cdr.detectChanges();
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator; // For pagination
    this.dataSource.sort = this.sort; // For sort
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  applyPaging() {
    if (this.paginator) {
      this.paginator.pageSize = this.pageSize;
      this.paginator.firstPage();
    }
  }

  deleteEmployee(employee: Employee) {
    this.dataSource.data = this.dataSource.data.filter(e => e !== employee);
  }

  editEmployee(employee: any) {
    // Logika untuk mengedit employee
  }
}
