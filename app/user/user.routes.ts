import {ProfileComponent} from "./profile.component";
import {LoginComponent} from "./login.component";
import {LoginCandidateComponent} from "./Candidate/loginCandidate.component";
import {LoginCompanyComponent} from "./Company/loginCompany.component";


export const userRoutes = [

    {path: 'profile', component: ProfileComponent},
    {path: 'login', component: LoginComponent},
    {path: 'loginCandidate', component: LoginCandidateComponent},
    {path: 'loginCompany', component: LoginCompanyComponent},

]