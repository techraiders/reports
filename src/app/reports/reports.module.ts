import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportRoutingModule } from './reports-routing.module';
import { ReportsComponent } from './reports.component';


@NgModule({
  declarations: [
    ReportsComponent
  ],
  imports: [
    CommonModule,
    ReportRoutingModule
  ]
})
export class ReportsModule { }
