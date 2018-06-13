import {Component, OnInit} from "@angular/core";
import {Project} from "../common/model/project.model";
import {ActivatedRoute} from "@angular/router";
import {AuthService} from "../user/auth.service";
import {MitchModel} from "../common/model/mitch.model";
import {CandidateService} from "../candidates/shared/candidate-service";


@Component({
    template: ` 
        <div>
            <h1>PROJECTS</h1>
            <hr>
            <div class="row">
                <div class="col-md-5">
                    <project-thumb [project] = "projects[index]"></project-thumb>
                </div>
            </div>
            <hr>
            <div>
                <button type="button" (click)="match()" class="btn btn-default">MATCH</button>
                <button type="button" (click)="next()" class="btn btn-default">NEXT</button>
            </div>

        </div>
    `
})


export class ProjectsListComponent implements OnInit{

    index = 0;
    projects: Project[];

    constructor(private route: ActivatedRoute,
                private authService: AuthService,
                private candidateService: CandidateService)
                 {
    }

    ngOnInit() {
        this.projects = this.route.snapshot.data['projects'];
    }

    match() {
        let mitch = {

            candidate_id : this.authService.currentUser.candidate_Id,
            candidate_bol : true,
            project_id : this.projects[this.index].project_id,
            project_bol : false
        };

        this.candidateService.mitch(mitch);
    }

    next() {

        if (this.index == this.projects.length-1) {
            this.index = 0;
        } else {
            this.index++;
        }
    }
}