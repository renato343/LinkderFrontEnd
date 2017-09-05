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
        CandidatesThumbComponent,
        CandidateDetailsComponent,
        NavbarComponent,
        CreateCandidateComponent,
        Error404Component,
    ],
    providers: [CandidateService,
        CandidateResolver,
        CandidateListResolver,
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
