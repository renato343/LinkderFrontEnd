import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {AuthService} from "../auth.service";

@Component({
    templateUrl: 'app/user/Candidate/loginCandidate.component.html',
    styles: [`
    em{ float:right; color: #E05C65; padding-left: 10px; }
    
    `]
})

export class LoginCandidateComponent{


    loginInvalid = false;
    userNotFound = false;

    constructor(private authService:AuthService, private router:Router){}

    login(formValues){
        this.authService.loginCandidate(formValues.userName, formValues.password).subscribe(resp => {

            if(!resp){
                this.loginInvalid = true;
            }else{
                this.router.navigate(['companies'])
            }
        })

    }

    cancel(){
        this.router.navigate(['/'])
    }
}