import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from '../../core/auth.guard';
import { AddOpportunityComponent } from './add-opportunity/add-opportunity.component';
import { ViewOpportunityComponent } from './view-opportunity/view-opportunity.component';

const routes: Routes = [
    {
      path: '',
      children: [
        { path: 'add', component: AddOpportunityComponent },
        { path: 'view', component: ViewOpportunityComponent }
      ]
    }
  ];

  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class LeadsRoutingModule { }  