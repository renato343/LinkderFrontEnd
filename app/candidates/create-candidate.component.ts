import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {CandidateService} from "./shared/candidate-service";
import {Language} from "./shared/language.model";
import {Framework} from "./shared/framework.model";

@Component({
    templateUrl: 'app/candidates/create-candidate.component.html',
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
export class CreateCandidateComponent implements OnInit{

    isDirty: boolean = true;
    languages:Language[];
    frameworks:Framework[];

    constructor(private router: Router, private candidateService: CandidateService) {
    }

    ngOnInit(){

        this.candidateService.getLanguages().subscribe(resp =>{
            this.languages = resp;
        })

        this.candidateService.getFrameworks().subscribe(resp =>{
            this.frameworks = resp;
        })
    }

    saveCandidate(formvalues) {

        this.candidateService.registerCandidate(formvalues);
    }

    cancel() {
        this.router.navigate(['/candidates'])
    }

}

