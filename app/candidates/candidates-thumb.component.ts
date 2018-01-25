import {Component, Input} from "@angular/core";
import {Candidate} from "../common/model/candidate.model";

@Component({
    selector:'candidate-thumb',
    template:`
        <collapsible-well [title] = "candidate.name + ' - ' + candidate.motto">
            <div>
             LANGUAGES
                <li *ngFor="let language of candidate.languages">"{{language.name}}"</li>
                <br/>
             FRAMEWORKS
                <li *ngFor="let framework of candidate.frameworks">"{{framework.name}}"</li>
            </div>
       
        </collapsible-well>
    `

})
export class CandidatesThumbComponent{

    @Input() candidate:Candidate
}