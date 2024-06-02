import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeNewComponent } from './models/employee-new/employee-new.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ]
})
export class EmployeeRoutingModule { }
