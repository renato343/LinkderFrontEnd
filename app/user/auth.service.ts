import {Injectable} from "@angular/core";
import {User} from "./user.model";
import {Headers, Http, RequestOptions} from "@angular/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class AuthService {

    constructor(private http: Http) {
    }

    currentUser: User


    loginUser(userName: string, password: string) {

        let headers = new Headers({'Content-type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        let user = {email: userName, password: password};

        return this.http.post('http://localhost:9090/candidate/auth', JSON.stringify(user), options).do(resp => {

            if (resp) {
                this.currentUser = <User>resp.json();

            }
        }).catch(error => {
            return Observable.of(false);
        });
    }

    isAuthenticated() {
        return !!this.currentUser;
    }

    checkAuthenticationStatus() {

    }
}