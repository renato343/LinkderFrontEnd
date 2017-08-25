import {Component, OnInit} from "@angular/core";
import {CandidateService} from "./shared/candidate-service";
import {ActivatedRoute} from "@angular/router";
import {Candidate} from "./shared/candidate.model";

@Component({
    template: `
        <div>
            <h1>LinkDer</h1>
            <hr>
            <div class="row">
                <div *ngFor="let candidate of candidates" class="col-md-5">
                    <candidate-thumb [candidate]="candidate"></candidate-thumb>
                </div>
            </div>

        </div>`,
})
export class CandidatesListComponent implements OnInit{

    candidates: Candidate[]

    constructor(private route:ActivatedRoute) {
    }

    ngOnInit() {
        this.candidates = this.route.snapshot.data['candidates'];
    }


}