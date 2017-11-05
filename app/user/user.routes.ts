import {ProfileComponent} from "./profile.component";
import {LoginComponent} from "./login.component";
import {LoginCandidateComponent} from "./Candidate/loginCandidate.component";
import {LoginCompanyComponent} from "./Company/loginCompany.component";
import {CreateCandidateComponent} from "../candidates/create-candidate.component";
import {CreatecompanyComponent} from "../companys/create-company.component";

export const userRoutes = [

    {path: 'profile', component: ProfileComponent},
    {path: 'login', component: LoginComponent},
    {path: 'logincandidate', component: LoginCandidateComponent},
    {path: 'logincompany', component: LoginCompanyComponent},

]