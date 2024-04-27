
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';
import { ViewLeadsComponent } from './view-leads/view-leads.component';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { AddLeadsComponent } from './add-leads/add-leads.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ViewLeadsComponent,
    AddLeadsComponent
  ],
  imports: [
    CommonModule,
    AgGridModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [ViewLeadsComponent],
  exports: [ViewLeadsComponent] // If you plan to use this component outside of this module
})
export class LeadsModule { }
