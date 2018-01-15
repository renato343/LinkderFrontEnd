import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {userRoutes} from './user.routes'
import {ProfileComponent} from "./profile.component";
import {LoginComponent} from "./login.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LoginCompanyComponent} from "./Company/loginCompany.component";
import {CreateCandidateComponent} from "../candidates/create-candidate.component";
import {LoginCandidateComponent} from "./Candidate/loginCandidate.component";



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
        LoginCandidateComponent,
        LoginCompanyComponent
    ],
    providers: [],
})
export class UserModule{}