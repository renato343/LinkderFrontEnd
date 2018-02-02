import {Component, OnInit} from '@angular/core'
import {FormControl, FormGroup} from "@angular/forms";
import {AuthService} from "./auth.service";
import {Router} from "@angular/router";
import {CandidateService} from "../candidates/shared/candidate-service";
import {Language} from "../common/model/language.model";
import {Framework} from "../common/model/framework.model";

@Component({
    templateUrl: 'app/user/profile.component.html',
    styles: [`
    em {float:right; color: #E05C65; padding-left: 10px}
    .error input {background-color: #E3C3C5;}
    .error ::-webkit-input-placeholder{ color: #999;}
    .error ::-moz-placeholder {color: #999}
    .error :-moz-placeholder {color: #999}
    .error :-ms-input-placeholder {color: #999}
    `]
})
export class ProfileComponent implements OnInit {

    profileForm:FormGroup;

    languages:Language[];
    frameworks:Framework[];

    constructor(private auth:AuthService,
                private route:Router,
                private candidateService:CandidateService){
    }


    ngOnInit() {

        this.candidateService.getLanguages().subscribe(resp =>{
            this.languages = resp;
        })

        this.candidateService.getFrameworks().subscribe(resp =>{
            this.frameworks = resp;
        })

        let firstName = new FormControl();
        let lastName = new FormControl();
        let languages = new FormControl();

        this.profileForm = new FormGroup({
            firstName: firstName,
            lastName: lastName,
            languages: languages,
                 })
    }

    logout(){
        this.auth.logout().subscribe(() =>{
          this.route.navigate(['user/login']);
        })
    }
}