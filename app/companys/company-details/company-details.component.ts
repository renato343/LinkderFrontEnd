import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Company} from "../../common/model/company.model";



@Component({
    templateUrl: '/app/companys/company-details/company-details.component.html',
    styles:[`
    .container { padding-left: 20px; padding-right: 20px }
    `]
})
export class CompanyDetailsComponent implements OnInit{

    company: Company;

    constructor(private route:ActivatedRoute){}

    ngOnInit() {

        this.company = this.route.snapshot.data['company'];

    }



}
