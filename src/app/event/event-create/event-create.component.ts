import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { EventService } from "app/event/event-service";

@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.css']
})
export class EventCreateComponent {

  isDirty:boolean = true
  event:any = { location: { } }

  constructor(private router: Router, private eventService: EventService) {
  }

  saveEvent(formValues) {
   this.eventService.saveEvent(formValues).subscribe(event => {
    this.router.navigate(['/events']) 
    this.isDirty = false
   })
  }

  cancel() {
    this.router.navigate(['/events'])
  }

}
