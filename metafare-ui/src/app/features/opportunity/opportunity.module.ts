import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddOpportunityComponent } from './add-opportunity/add-opportunity.component';
import { ViewOpportunityComponent } from './view-opportunity/view-opportunity.component';



@NgModule({
  declarations: [
    AddOpportunityComponent,
    ViewOpportunityComponent
  ],
  imports: [
    CommonModule
  ]
})
export class OpportunityModule { }
