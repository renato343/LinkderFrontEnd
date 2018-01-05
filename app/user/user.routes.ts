import {ProfileComponent} from "./profile.component";
import {LoginComponent} from "./login.component";
import {LoginComponentCandidate} from "./Candidate/loginCandidate.component";
import {LoginComponentCompany} from "./Company/loginCompany.component";

export const userRoutes = [

    {path: 'profile', component: ProfileComponent},
    {path: 'login', component: LoginComponent},
    {path: 'loginCandidate', component: LoginComponentCandidate},
    {path: 'loginCompany', component: LoginComponentCompany},

]