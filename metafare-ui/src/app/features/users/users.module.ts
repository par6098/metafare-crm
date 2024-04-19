import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddUsersComponent } from './add-users/add-users.component';
import { ViewUsersComponent } from './view-users/view-users.component';



@NgModule({
  declarations: [
    AddUsersComponent,
    ViewUsersComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UsersModule { }
