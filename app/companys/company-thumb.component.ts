import {Component, Input} from "@angular/core";
import {Company} from "./shared/company.model";

@Component({
    selector:'company-thumb',
    template:`
        <div [routerLink]="['/companies', company.company_id]" class="well hoverwell thumbnail">
            <h2>{{company.name}}</h2> 
            <div>"{{company.motto}}"</div>
        </div>
    `

})
export class CompanysThumbComponent{

    @Input() company:Company;
}