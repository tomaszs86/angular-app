import { Component, OnInit, Input } from '@angular/core';
import { Event } from "app/event/event";

@Component({
  selector: 'app-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css']
})
export class EventThumbnailComponent {

  @Input() event:Event;

  public getStartTimeStyle(event: Event):any {
    
    if (event && event.time === '8:00 am')
      return {color: '#003300', 'font-weight': 'bold'}
    return {}
  }

}
