import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';
import { ViewLeadsComponent } from './view-leads/view-leads.component';

@NgModule({
  declarations: [ViewLeadsComponent],
  imports: [
    CommonModule,
    AgGridModule
  ],
  exports: [ViewLeadsComponent] // If you plan to use this component outside of this module
})
export class LeadsModule { }
