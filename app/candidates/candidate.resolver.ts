import { Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve} from "@angular/router";
import {CandidateService} from "./shared/candidate-service";

@Injectable()
export class CandidateResolver implements Resolve<any>{

    constructor (private candidateService: CandidateService){

    }

    resolve(route: ActivatedRouteSnapshot){

        return this.candidateService.getCandidate(route.params['id']);
    }
}