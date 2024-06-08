import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeNewComponent } from './employee-new/employee-new.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';


const routes: Routes = [{
  path: 'employee',
  component: EmployeeComponent,
  children: [
    {
      path: 'detail',
      component: EmployeeDetailComponent,
    }, {
      path: 'new',
      component: EmployeeNewComponent,
    }, {
      path: 'list',
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
    FormsModule,
    MatSelectModule,
    MatFormFieldModule,
    RouterModule.forChild(routes),
    MatPaginatorModule,
    MatTableModule,
    MatButtonModule
  ]
})
export class EmployeeModule { }
