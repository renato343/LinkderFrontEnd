import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Project} from "../../common/model/project.model";


@Component({
    templateUrl: 'app/Projects/projects-details/project-details.component.html',
    styles:[`
    .container { padding-left: 20px; padding-right: 20px }
    `]
})
export class ProjectDetailsComponent implements OnInit{

    project: Project;

    constructor(private route:ActivatedRoute){}

    ngOnInit() {

        this.project = this.route.snapshot.data['project'];

    }



}
