import {Component, OnInit} from "@angular/core";
import {CandidateService} from "../shared/candidate-service";
import {ActivatedRoute} from "@angular/router";
import {Candidate} from "../shared/candidate.model";

@Component({
    templateUrl: '/app/candidates/candidates-details/candidate-details.component.html',
    styles:[`
    .container { padding-left: 20px; padding-right: 20px }
    `]
})
export class CandidateDetailsComponent implements OnInit{

    candidate: Candidate

    constructor(private candidateService: CandidateService,
                private route:ActivatedRoute){}

    ngOnInit() {

        this.candidate = this.route.snapshot.data['candidate'];

    }



}
