import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from "app/user/user-list/user-list.component";
import { UserCreateComponent } from "app/user/user-create/user-create.component";
import { UserEditComponent } from "app/user/user-edit/user-edit.component";

const routes: Routes = [
  {
    path: 'users',
    component: UserListComponent,
    children: []
  },
  {
    path: 'user/create',
    component: UserCreateComponent,
    children: []
  },
  {
    path: 'user/edit/:id',
    component: UserEditComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
