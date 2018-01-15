import {Component} from "@angular/core";
import {Router} from "@angular/router";

@Component({
    templateUrl: 'app/register.component.html',
    styles: [`
    em{ float:right; color: #E05C65; padding-left: 10px; }
    
    `]
})
export class RegisterComponent{


    constructor(private router:Router){}

    registerAsCandidate(){
        this.router.navigate(['candidates/new'])
    }

    registerAsCompany(){

        this.router.navigate(['company/new'])

    }

}