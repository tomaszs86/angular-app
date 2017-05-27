import { Component, OnInit } from '@angular/core';
import { Event } from "app/event/event";
import { EventService } from "app/event/event-service";
import { ActivatedRoute, Router  } from '@angular/router';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']  
})
export class EventListComponent implements OnInit {

 public events:Event[]
  
  constructor(
    private eventService: EventService,
    private route: ActivatedRoute
    ) { }  

  ngOnInit() {
    this.events = this.route.snapshot.data['events']
  }
}
