import { Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve} from "@angular/router";
import {CompanyService} from "../companys/shared/company-service";

@Injectable()
export class ProjectResolver implements Resolve<any>{

    constructor (private companyService: CompanyService){

    }

    resolve(route: ActivatedRouteSnapshot){

        return this.companyService.getProject(route.params['id']);
    }
}