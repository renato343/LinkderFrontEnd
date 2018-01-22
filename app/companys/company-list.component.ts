import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Company} from "./shared/company.model";


@Component({
    template: `
        <div>
            <h1>LinkDer</h1>
            <hr>
            <div class="row">
                <div class="col-md-5">
                    <company-thumb [company]="companies[index]"></company-thumb>
                </div>
            </div>
            <hr>
            <div>
                <button type="button" (click)="match()" class="btn btn-default">MATCH</button>
                <button type="button" (click)="next()" class="btn btn-default">NEXT</button>
            </div>

        </div>`,
})
export class CompanyListComponent implements OnInit {


    index = 0;
    companies: Company[];

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.companies = this.route.snapshot.data['companies'];
        console.log(this.companies);

    }

    match() {

    }

    moreInfo() {

    }

    next() {

        if (this.index == this.companies.length-1) {
            this.index = 0;
        } else {
            this.index++;
        }
    }


}