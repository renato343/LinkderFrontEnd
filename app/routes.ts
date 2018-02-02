import {
    CandidateDetailsComponent,
    CandidateListResolver,
    CandidatesListComponent,

} from './candidates/index'
import {Routes} from "@angular/router";
import {Error404Component} from "./errors/404.component";
import {CandidateResolver} from "./candidates/candidate.resolver";
import {CreateCandidateComponent} from "./candidates/create-candidate.component";
import {RegisterComponent} from "./register.component";
import {CompanyListComponent} from "./companys/company-list.component";
import {CompanyListResolver} from "./companys/company-list-resolver";
import {CompanyResolver} from "./companys/company.resolver";
import {CompanyDetailsComponent} from "./companys/company-details/company-details.component";
import {CreateCompanyComponent} from "./companys/create-company.component";
import {CreateProjectsComponent} from "./Projects/create-projects.component";
import {ProjectsListComponent} from "./Projects/projects-list.component";
import {ProjectsListResolver} from "./Projects/projects-list.resolver";
import {ProjectDetailsComponent} from "./Projects/projects-details/project-details.component";
import {ProjectResolver} from "./Projects/project.resolver";



export const appRoutes: Routes = [

    {path: 'register', component: RegisterComponent},

    {path: 'candidates/new', component: CreateCandidateComponent},
    {path: 'candidates', component: CandidatesListComponent, resolve: {candidates: CandidateListResolver}},
    {path: 'candidates/:id', component: CandidateDetailsComponent, resolve: {candidate: CandidateResolver}},

    {path: 'company/new', component: CreateCompanyComponent},
    {path: 'company/newproject', component: CreateProjectsComponent},
    {path: 'companies', component: CompanyListComponent, resolve: {companies: CompanyListResolver}},
    {path: 'company/:id', component: CompanyDetailsComponent, resolve: {company: CompanyResolver}},

    {path: 'project/:id', component: ProjectDetailsComponent, resolve: {project: ProjectResolver}},
    {path: 'projects', component: ProjectsListComponent, resolve: {projects: ProjectsListResolver}},


    {path: '404', component: Error404Component},
    {path: '', redirectTo: '/user/login', pathMatch: 'full'},
    {path: 'user', loadChildren: 'app/user/user.module#UserModule'},


];

