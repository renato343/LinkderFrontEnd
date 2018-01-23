import {Component, Input} from "@angular/core";
import {Company} from "./shared/company.model";

@Component({
    selector:'company-thumb',
    template:`        
        <collapsible-well [title] = "company.name + ' - ' + company.motto">
            <li *ngFor="let project of company.projectsList" [routerLink]="['/project', project.projectId]">{{project.name}}</li>
        </collapsible-well>
    `
})
export class CompanysThumbComponent{

    @Input() company:Company;
}