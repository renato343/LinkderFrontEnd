import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {AuthService} from "../auth.service";

@Component({
    templateUrl: 'app/user/Company/loginCompany.component.html',
    styles: [`
    em{ float:right; color: #E05C65; padding-left: 10px; }
    
    `]
})

export class LoginCompanyComponent{

    loginInvalid = false;
    userNotFound = false;

    constructor(private authService:AuthService, private router:Router){}

    login(formValues){
        this.authService.loginCompany(formValues.userName, formValues.password).subscribe(resp => {

            if(!resp){
                this.loginInvalid = true;
            }else{
                this.router.navigate(['candidates'])
            }
        })

    }

    cancel(){
        this.router.navigate(['/'])
    }
}