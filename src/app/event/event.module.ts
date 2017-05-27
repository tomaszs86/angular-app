import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventRoutingModule } from './event-routing.module';
import { EventListComponent } from './event-list/event-list.component';
import { EventService } from "app/event/event-service";
import { EventListResolver } from "app/event/event-list/event-list-resolver";
import { EventThumbnailComponent } from "app/event/event-thumbnail/event-thumbnail.component";
import { EventDetailComponent } from './event-detail/event-detail.component';
import { EventResolver } from "app/event/event-resolver";
import { SessionModule } from "app/session/session.module";
import { EventCreateComponent } from './event-create/event-create.component';
import { SharedModule } from "app/shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    EventRoutingModule,
    SessionModule,
    SharedModule
  ],  
  declarations: [EventListComponent, EventDetailComponent, EventThumbnailComponent, EventCreateComponent],
  providers: [EventService, EventListResolver, EventResolver]
})
export class EventModule { }
