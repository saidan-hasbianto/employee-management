import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeNewComponent } from './models/employee-new/employee-new.component';
import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

const routes: Routes = [{
  path: '',
  component: EmployeeComponent,
  children: [
    {
      path: 'employee-detail',
      component: EmployeeDetailComponent,
    }, {
      path: 'employee-new',
      component: EmployeeNewComponent,
    }, {
      path: 'employee-list',
      component: EmployeeListComponent,
    },
  ],
}];


@NgModule({
  declarations: [
    EmployeeComponent,
    EmployeeDetailComponent,
    EmployeeNewComponent,
    EmployeeListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    FormsModule,
    BrowserModule, 
    MatSelectModule,
    MatFormFieldModule,
    MatPaginatorModule
  ]
})
export class EmployeeModule { }
