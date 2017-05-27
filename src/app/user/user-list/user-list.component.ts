import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Rx";
import { ActivatedRoute, Router  } from '@angular/router';
import { UserService } from "app/user/user-service";
import { User } from "app/user/user";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  public users: Observable<any>;
  
  constructor(public userService: UserService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.users = this.userService.getUsers();
  }

}
