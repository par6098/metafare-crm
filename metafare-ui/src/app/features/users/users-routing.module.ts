import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from '../../core/auth.guard';
import { AddUsersComponent } from './add-users/add-users.component';
import { ViewUsersComponent } from './view-users/view-users.component';

const routes: Routes = [
    {
      path: '',
      children: [
        { path: 'add', component: AddUsersComponent },
        { path: 'view', component: ViewUsersComponent }
      ]
    }
  ];

  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class LeadsRoutingModule { }  