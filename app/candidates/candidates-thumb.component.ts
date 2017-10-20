import {Component, Input} from "@angular/core";
import {Candidate} from "./shared/candidate.model";

@Component({
    selector:'candidate-thumb',
    template:`
        <div [routerLink]="['/candidates', candidate.candidate_Id]" class="well hoverwell thumbnail">
            <h2>{{candidate.cadet_Id}}</h2>
            <h2>{{candidate.name}}</h2> 
            <div>"{{candidate.motto}}"</div>
        </div>
    `

})
export class CandidatesThumbComponent{

    @Input() candidate:Candidate
}