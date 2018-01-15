import {Component} from "@angular/core";
import {AuthService} from "./auth.service";
import {Router} from "@angular/router";

@Component({
    templateUrl: 'app/user/login.component.html',
    styles: [`
    em{ float:right; color: #E05C65; padding-left: 10px; }
    
    `]
})
export class LoginComponent{


    constructor(private authService:AuthService, private router:Router){}

    loginAsCandidate(){

        this.router.navigate(['user/loginCandidate'])
    }

    loginAsCompany(){

        this.router.navigate(['user/loginCompany'])

    }

}