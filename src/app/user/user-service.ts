import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/of';
import { Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/Rx';
import { User } from "app/user/user";

@Injectable()
export class UserService {

constructor(private _http: Http) {}

    getUsers() {   
        return this._http.get(`api/users`)
        .map(this.extractData)
        .catch(this.handleError);
    }

    getUser(id: string) {   
        return this._http.get(`api/users/${id}`)
        .map(this.extractData)
        .catch(this.handleError);
    }

     create(user: User) {
        
        return this._http.post(`api/users`, user)
            .map(this.extractData)
            .catch(this.handleError);
    }

// po co dziedziczyc po Observable?!
    update(user: User): Observable<User> {
        console.log(user.id);
        return this._http.put(`api/users/${user.id}`, user)
            .map(() => user)
            .catch(this.handleError);
    }

    private extractData(response: Response) {
        let body = response.json();
        return body.data || {};
    }

        private handleError(error: Response): Observable<any> {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}


