import {Component, OnInit} from '@angular/core'
import {FormControl, FormGroup} from "@angular/forms";

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


    ngOnInit() {
        let firstName = new FormControl()
        let lastName = new FormControl()
        this.profileForm = new FormGroup({
            firstName: firstName,
            lastName: lastName,
        })
    }

}