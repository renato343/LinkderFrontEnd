import {Component, OnInit} from '@angular/core'
import {FormControl, FormGroup} from "@angular/forms";
import {AuthService} from "./auth.service";
import {Router} from "@angular/router";

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

    constructor(private auth:AuthService, private route:Router){

    }


    ngOnInit() {
        let firstName = new FormControl()
        let lastName = new FormControl()
        this.profileForm = new FormGroup({
            firstName: firstName,
            lastName: lastName,
        })
    }

    logout(){
        this.auth.logout().subscribe(() =>{
          this.route.navigate(['user/login']);
        })
    }
}