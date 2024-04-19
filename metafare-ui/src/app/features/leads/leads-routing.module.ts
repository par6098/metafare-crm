import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from '../../core/auth.guard';
import { AddLeadsComponent } from './add-leads/add-leads.component';
import { ViewLeadsComponent } from './view-leads/view-leads.component';

const routes: Routes = [
    {
      path: 'leads',
      children: [
        { path: 'add', component: AddLeadsComponent },
        { path: 'view', component: ViewLeadsComponent }
      ]
    }
  ];

  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class LeadsRoutingModule { }  