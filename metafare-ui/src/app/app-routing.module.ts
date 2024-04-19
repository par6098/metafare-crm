import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './core/auth.guard';
import { DashboardComponent } from './features/dashboard/dashboard/dashboard.component';
import { AddLeadsComponent } from './features/leads/add-leads/add-leads.component';
import { ViewLeadsComponent } from './features/leads/view-leads/view-leads.component';
import { AddOpportunityComponent } from './features/opportunity/add-opportunity/add-opportunity.component';
import { ViewOpportunityComponent } from './features/opportunity/view-opportunity/view-opportunity.component';
import { AddUsersComponent } from './features/users/add-users/add-users.component';
import { ViewUsersComponent } from './features/users/view-users/view-users.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  {
    path: 'leads',
    children: [
      { path: 'add', component: AddLeadsComponent },
      { path: 'view', component: ViewLeadsComponent }
    ]
  },
  {
    path: 'users',
    children: [
      { path: 'add', component: AddUsersComponent },
      { path: 'view', component: ViewUsersComponent }
    ]
  },
  {
    path: 'opportunity',
    children: [
      { path: 'add', component: AddOpportunityComponent },
      { path: 'view', component: ViewOpportunityComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
