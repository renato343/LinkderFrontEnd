import {Injectable} from "@angular/core";
import {User} from "./user.model";
import {Http} from "@angular/http";

@Injectable()
export class AuthService {

    constructor(private http: Http) {
    }

    currentUser: User

    loginUser(userName: string, password: string) {

        this.http.get("http://localhost:9090/candidate/auth?email=" + userName + "&pass=" + password).subscribe()

        this.currentUser = {
            id: 1,
            userName: userName,
            firstName: 'John',
            lastName: 'Lopes'
        }
    }

    isAuthenticated() {
        return !!this.currentUser;
    }
}