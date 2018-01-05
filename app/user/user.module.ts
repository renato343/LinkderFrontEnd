import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {userRoutes} from './user.routes'
import {ProfileComponent} from "./profile.component";
import {LoginComponent} from "./login.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LoginComponentCandidate} from "./Candidate/loginCandidate.component";
import {LoginComponentCompany} from "./Company/loginCompany.component";
import {CreateCandidateComponent} from "../candidates/create-candidate.component";

@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(userRoutes)
    ],
    declarations:[
        ProfileComponent,
        LoginComponent,
        LoginComponentCandidate,
        LoginComponentCompany,

    ],
    providers: [],
})
export class UserModule{}