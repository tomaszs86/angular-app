import { Component, OnInit } from '@angular/core';
import { UserService } from "app/user/user-service";
import { Router } from "@angular/router";
import { User } from "app/user/user";

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent {

    id: number;
    username: string;
    isActive: boolean;
    created: string;
    user: User;
    errorMessage: string;

    constructor( private userService: UserService, private router: Router  ){}

    createUser(){
        console.log("createUser");
        this.user = new User ( 
            this.id,
            this.username, 
            this.isActive, 
            this.created
        );

        this.userService.create(this.user)
            .subscribe(
              () => this.onSaveComplete(),
              (error: any) => this.errorMessage = <any>error
        );
    }  

    onSaveComplete(): void {
        this.router.navigate(['/users']);
    }

}
