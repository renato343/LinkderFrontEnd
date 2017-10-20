import {
    CandidateDetailsComponent,
    CandidateListResolver,
    CandidatesListComponent,
    CreateCandidateComponent
} from './candidates/index'
import {Routes} from "@angular/router";
import {Error404Component} from "./errors/404.component";
import {CandidateResolver} from "./candidates/candidate.resolver";


export const appRoutes: Routes = [

    {path: 'candidates/new', component: CreateCandidateComponent},
    {path: 'candidates', component: CandidatesListComponent, resolve: {candidates: CandidateListResolver}},
    {path: 'candidates/:id', component: CandidateDetailsComponent, resolve: {candidate: CandidateResolver}},
    {path: '404', component: Error404Component},
    {path: '', redirectTo: '/user/login', pathMatch: 'full'},
    {path: 'user', loadChildren: 'app/user/user.module#UserModule'}
];

