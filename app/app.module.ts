import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {LinkDerAppComponent} from "./LinkDer-app.component";
import {
    CandidateDetailsComponent,
    CandidateListResolver,
    CandidateService,
    CandidatesListComponent,
    CandidatesThumbComponent,
    CreateCandidateComponent
} from './candidates/index'
import {NavbarComponent} from "./nav/navbar.component";
import {RouterModule} from "@angular/router";
import {appRoutes} from "./routes";
import {Error404Component} from "./errors/404.component";
import {HttpModule} from "@angular/http";
import {AuthService} from "./user/auth.service";
import {CandidateResolver} from "./candidates/candidate.resolver";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RegisterComponent} from "./register.component";
import {CreatecompanyComponent} from "./companys/create-company.component";
import {CompanyService} from "./companys/shared/company-service";
import {CompanyListComponent} from "./companys/company-list.component";
import {CompanyListResolver} from "./companys/company-list-resolver";
import {CompanysThumbComponent} from "./companys/company-thumb.component";
import {CompanyDetailsComponent} from "./companys/company-details/company-details.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(appRoutes, {useHash: true}),
        HttpModule,

    ],

    declarations: [
        LinkDerAppComponent,
        CandidatesListComponent,
        CompanyListComponent,
        CandidatesThumbComponent,
        CompanysThumbComponent,
        CandidateDetailsComponent,
        CompanyDetailsComponent,
        NavbarComponent,
        CreateCandidateComponent,
        CreatecompanyComponent,
        Error404Component,
        RegisterComponent,

    ],
    providers: [
        CandidateService,
        CompanyService,
        CandidateResolver,
        CandidateListResolver,
        CompanyListResolver,
        AuthService,
        {
            provide: 'canDeactivateCreateCandidate',
            useValue: checkDirtyState
        }
    ],
    bootstrap: [LinkDerAppComponent]
})
export class AppModule {
}

function checkDirtyState(component: CreateCandidateComponent) {

    if (component.isDirty)
        return window.confirm('You have not saved...Sure wanna Cancel?')
    return false;

}
