import {Component, Input} from "@angular/core";
import {Project} from "../common/model/project.model";

@Component({
    selector:'project-thumb',
    template:`
        <collapsible-well [title] = "project.name + ' - ' + project.motto">
            <div>
             LANGUAGES
                <li *ngFor="let language of project.languages">"{{language.name}}"</li>
                <br/>
             FRAMEWORKS
                <li *ngFor="let framework of project.frameworks">"{{framework.name}}"</li>
            </div>
       
        </collapsible-well>
    `

})
export class ProjectThumbComponent{

    @Input() project : Project;
}