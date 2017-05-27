import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventListComponent } from "app/event/event-list/event-list.component";
import { EventListResolver } from "app/event/event-list/event-list-resolver";
import { EventDetailComponent } from "app/event/event-detail/event-detail.component";
import { EventResolver } from "app/event/event-resolver";
import { EventCreateComponent } from "app/event/event-create/event-create.component";

const routes: Routes = [
  {
    path: 'events',
    component: EventListComponent,
    resolve: {events: EventListResolver}
  },
   {
    path: 'event/details/:id',
    component: EventDetailComponent,
    resolve: {event: EventResolver}
  },
  {
    path: 'event/create',
    component: EventCreateComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventRoutingModule { }
