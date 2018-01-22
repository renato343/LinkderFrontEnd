import {Component, Input} from "@angular/core";
import {Company} from "./shared/company.model";

@Component({
    selector:'company-thumb',
    template:`
        <!--<div [routerLink]="['/company', company.company_id]" class="well hoverwell thumbnail">-->
        <collapsible-well [title] = "company.name">
            <div>"{{company.motto}}"</div>
            <li *ngFor="let project of company.projectsList">{{project.name}}</li>
        </collapsible-well>
        <!--</div>-->
    `
})
export class CompanysThumbComponent{

    @Input() company:Company;
}