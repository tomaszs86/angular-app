import { Component, Input, OnChanges } from '@angular/core';
import { Session } from "app/session/session";

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent implements OnChanges {

  @Input() sessions: Session[];
  @Input() filterBy: string;
  @Input() sortBy: string;
  public visibleSessions: Session[] = [];

  constructor() { }

  ngOnChanges() {
    if(this.sessions) {
      this.filterSessions(this.filterBy);

      console.log(this.sortBy);
      this.sortBy === 'name' ? this.visibleSessions.sort(sortByNameAsc) : this.visibleSessions.sort(sortByVotesDesc);
    }
  }

  filterSessions(filter) {
    if(filter === 'all') {
      this.visibleSessions = this.sessions.slice(0);
    } else {
      this.visibleSessions = this.sessions.filter(session => {
        return session.level.toLocaleLowerCase() === filter;
      })
    }
  }
}

function sortByNameAsc(s1: Session, s2: Session) {
  if(s1.name > s2.name) return 1
  else if(s1.name === s2.name) return 0
  else return -1
}

function sortByVotesDesc(s1: Session, s2: Session) {
  return s2.voters.length - s1.voters.length;
}
