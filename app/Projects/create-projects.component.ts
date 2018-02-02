import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {Language} from "../common/model/language.model";
import {Framework} from "../common/model/framework.model";
import {CompanyService} from "../companys/shared/company-service";

@Component({
    templateUrl: 'app/Projects/create-project.component.html',
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
export class CreateProjectsComponent implements OnInit{

    isDirty: boolean = true;
    languages:Language[];
    frameworks:Framework[];

    constructor(private router: Router,
                private companyService: CompanyService,) {
    }

    ngOnInit(){

        this.companyService.getLanguages().subscribe(resp =>{
            this.languages = resp;
    })

        this.companyService.getFrameworks().subscribe(resp => {
            this.frameworks = resp;
        })
    }

    saveProject(formvalues) {

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

