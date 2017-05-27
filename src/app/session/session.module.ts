import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SessionRoutingModule } from './session-routing.module';
import { SessionListComponent } from './session-list/session-list.component';
import { SessionCreateComponent } from './session-create/session-create.component';
import { SharedModule } from "app/shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    SessionRoutingModule,
    SharedModule
  ],
  exports: [
    SessionListComponent,
    SessionCreateComponent
  ],
  declarations: [SessionListComponent, SessionCreateComponent]
})
export class SessionModule { }
