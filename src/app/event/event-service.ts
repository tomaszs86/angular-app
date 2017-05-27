import { Injectable, EventEmitter } from '@angular/core';
import { Subject, Observable } from 'rxjs/Rx';
import { Http, Response, Headers, RequestOptions } from '@angular/http'
import { Event } from "app/event/event";

@Injectable()
export class EventService {

    constructor(private http: Http) {}

  getEvents():Observable<Event[]> {
    return this.http.get("/api/events")
    .map((response: Response) => {
        return <Event[]>response.json().data;
    }).catch(this.handleError);
  }

  
  searchSessions(searchTerm: string) {
    return this.http.get("/api/sessions/search?search=" + searchTerm).map((response: Response) => {
        return response.json();
    }).catch(this.handleError);
  }

  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }

  getEvent(id:number):Observable<Event> {

    return this.http.get("/api/events/" + id)
    .map((response: Response) => {
        let result = <Event>response.json().data;
        console.log("getEvent: " + result);
        return result;
    })    
    .catch(this.handleError);
  }

  saveEvent(event): Observable<Event> {
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});

    return this.http.post('/api/events', JSON.stringify(event), options).map((response: Response) => {
      return response.json();
    }).catch(this.handleError);
  }
}
