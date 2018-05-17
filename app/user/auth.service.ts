import {Injectable} from "@angular/core";
import {User} from "./user.model";
import {Headers, Http, RequestOptions} from "@angular/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class AuthService {

    constructor(private http: Http) {
    }

    currentUser: User;

    server = "http://localhost:9090/";
    //server = "http://192.168.1.75:9090/";

    loginCandidate(userName: string, password: string) {

        let headers = new Headers({'Content-type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        let user = {email: userName, password: password};

        return this.http.post(this.server + 'candidate/auth', JSON.stringify(user), options).do(resp => {

            if (resp) {

                this.currentUser = <User>resp.json();
                this.currentUser.isCandidate = true;
                this.currentUser.isCompany = false;
            }
        }).catch(error => {
            return Observable.of(false);
        });
    }

    loginCompany(userName: string, password: string) {

        let headers = new Headers({'Content-type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        let user = {email: userName, password: password};


        return this.http.post(this.server + 'company/auth', JSON.stringify(user), options).do(resp => {

            if (resp) {

                this.currentUser = <User>resp.json();
                this.currentUser.isCandidate = false;
                this.currentUser.isCompany = true;
            }
        }).catch(error => {

            return Observable.of(false);
        });
    }

    logout(){

        let add = (this.currentUser.isCompany ? 'company' : 'candidate');
        this.currentUser = undefined;

        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});

        return this.http.post(this.server + add + '/logout', JSON.stringify({}), options);
    }

    isAuthenticated() {
        return !!this.currentUser;
    }

    isCompany(){
        return this.currentUser.isCompany;
    }

    isCandidate(){
        return this.currentUser.isCandidate;
    }

    checkAuthenticationStatus() {

    }
}