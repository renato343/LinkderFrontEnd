import {Component, OnInit} from "@angular/core";
import {Project} from "../common/model/project.model";
import {ActivatedRoute} from "@angular/router";
import {CompanyService} from "../companys/shared/company-service";

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
                private companyService: CompanyService) {
    }

    ngOnInit() {
        this.projects = this.route.snapshot.data['projects'];
        console.log(this.projects);
    }

    match() {

    }

    next() {

        if (this.index == this.projects.length-1) {
            this.index = 0;
        } else {
            this.index++;
        }
    }

}