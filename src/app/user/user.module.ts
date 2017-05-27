import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { SharedModule } from "app/shared/shared.module";
import { UserService } from "app/user/user-service";

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule
  ],
  declarations: [UserListComponent, UserEditComponent, UserCreateComponent],
  providers: [UserService]
})
export class UserModule { }
