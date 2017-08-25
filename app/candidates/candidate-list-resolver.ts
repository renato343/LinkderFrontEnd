import { Injectable} from "@angular/core";
import {Resolve} from "@angular/router";
import {CandidateService} from "./shared/candidate-service";

@Injectable()
export class CandidateListResolver implements Resolve<any>{

    constructor (private candidateService: CandidateService){

    }

    resolve(){

        return this.candidateService.getCandidates();
    }
}