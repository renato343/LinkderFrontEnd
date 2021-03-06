import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {Language} from "../common/model/language.model";
import {Framework} from "../common/model/framework.model";
import {CompanyService} from "./shared/company-service";

@Component({
    templateUrl: 'app/companys/create-company.component.html',
    styles: [`
        em {
            float: right;
            color: #E05C65;
            padding-left: 10px
        }

        .error input {
            background-color: #E3C3C5;
        }

        .error ::-webkit-input-placeholder {
            color: #999;
        }

        .error ::-moz-placeholder {
            color: #999
        }

        .error :-moz-placeholder {
            color: #999
        }

        .error :-ms-input-placeholder {
            color: #999
        }
    `]
})
export class CreateCompanyComponent implements OnInit{

    isDirty: boolean = true;
    languages:Language[];
    frameworks:Framework[];

    constructor(private router: Router,
                private companyService: CompanyService,) {
    }

    ngOnInit(){
    }

    saveCompany(formvalues) {

        this.companyService.registercompany(formvalues).subscribe(resp=>{

            if(resp.text() == "Profile Created"){

                window.alert(resp.text())
                this.router.navigate(['/companys'])

            }else{
                window.alert(resp.text())
            }
        });
    }

    cancel() {
        this.router.navigate(['/companys'])
    }

}

