import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';``
import { ViewOpportunityComponent } from './view-opportunity/view-opportunity.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    ViewOpportunityComponent
  ],
  imports: [
    CommonModule,
    BrowserModule
  ],
  bootstrap: [ViewOpportunityComponent]
})
export class OpportunityModule { }
