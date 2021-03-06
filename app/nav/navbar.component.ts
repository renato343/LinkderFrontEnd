import {Component} from "@angular/core";
import {AuthService} from "../user/auth.service";
import {User} from "../user/user.model";
import {Router} from "@angular/router";

@Component({
    selector: 'nav-bar',
    templateUrl: 'app/nav/navbar.html',
    styles: [`
        .nav.navbar-nav {
            font-size: 15px
        }

        #searchForm {
            margin-right: 100px
        }

        @media (max-width: 1200px) {
            #searchForm {
                display: none
            }
            
        }
        li > a.active {color: #F97924}
    `
    ]
})

export class NavbarComponent {

    constructor(private auth: AuthService, private route: Router){}

    logout(){
        this.auth.logout().subscribe(() =>{
            this.route.navigate(['user/login']);
        })
    }
}