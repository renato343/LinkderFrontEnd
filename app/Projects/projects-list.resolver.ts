import { Injectable} from "@angular/core";
import {Resolve} from "@angular/router";
import {CompanyService} from "../companys/shared/company-service";


@Injectable()
export class ProjectsListResolver implements Resolve<any>{

    constructor (private companyService: CompanyService){

    }

    resolve(){
        return this.companyService.getProjects();
    }
}