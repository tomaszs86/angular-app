import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { User } from "app/user/user";
import { UserService } from "app/user/user-service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  public user:any = {};
  public id: string;
  public errorMessage: string;

  constructor(public userService: UserService, private route:ActivatedRoute, private router: Router ) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.id = this.route.snapshot.params['id'];

      if (this.id) {
        this.userService.getUser(this.id)
          .subscribe(user => {
            this.user = user;
          });
      }
    });
  }

public update(user: User){

    this.userService.update(this.user)
            .subscribe(
              () => this.onSaveComplete(),
              (error: any) => this.errorMessage = <any>error
        );
  }

public onSaveComplete(): void {
    this.router.navigate(['/users']);
}

public cancel(){
    this.router.navigate(['/users']);
} 

}
