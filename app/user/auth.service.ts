import {Injectable} from "@angular/core";
import {User} from "./user.model";
import {Headers, Http, RequestOptions} from "@angular/http";
import {Candidate} from "../candidates/shared/candidate.model";
import {error} from "util";
import {Observable} from "rxjs/Observable";

@Injectable()
export class AuthService {

    constructor(private http: Http) {
    }

    currentUser: User

    loginUser(userName: string, password: string) {

        let headers = new Headers({'Content-type':'applications/json'});
        let options = new RequestOptions({headers: headers});
        let loginInfo = {email: userName, pass: password };

        this.http.post('http://localhost:9090/candidate/auth',JSON.stringify(loginInfo), options).do(resp=>{
            if(resp){
                this.currentUser = <User>resp.json().user;
            }
        }).catch(error => {
            return Observable.of(false);
        });
    }

    isAuthenticated() {
        return !!this.currentUser;
    }
}