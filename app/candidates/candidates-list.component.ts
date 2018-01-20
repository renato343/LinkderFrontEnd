import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Candidate} from "./shared/candidate.model";

@Component({
    template: `
        <div>
            <h1>LinkDer</h1>
            <hr>
            <div class="row">
                <div class="col-md-5">
                    <candidate-thumb [candidate]="candidates[index]"></candidate-thumb>
                </div>
            </div>
            <hr>
            <div>
                <button type="button" (click)="match()" class="btn btn-default">MATCH</button>
                <button type="button" (click)="next()" class="btn btn-default">NEXT</button>
            </div>

        </div>`,
})
export class CandidatesListComponent implements OnInit {


    index = 0;
    candidates: Candidate[]

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.candidates = this.route.snapshot.data['candidates'];
        console.log(this.candidates);
    }

    match() {

    }

    next() {

        if (this.index == this.candidates.length-1) {
            this.index = 0;
        } else {
            this.index++;
        }
    }


}