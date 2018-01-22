import {Component, Input} from "@angular/core";
import {Candidate} from "./shared/candidate.model";

@Component({
    selector:'candidate-thumb',
    template:`
        <div [routerLink]="['/candidates', candidate.candidate_Id]" class="well hoverwell thumbnail">
            <h2>{{candidate.name}}</h2> 
            <div>"{{candidate.motto}}"</div>
            <br/>
            LANGUAGES
            <div *ngFor="let language of candidate.languages">"{{language.name}}"</div>
            <br/>
            FRAMEWORKS
            <li *ngFor="let framework of candidate.frameworks">"{{framework.name}}"</li>
        </div>
    `

})
export class CandidatesThumbComponent{

    @Input() candidate:Candidate
}