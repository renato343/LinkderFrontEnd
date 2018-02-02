import {Project} from "./project.model";

export interface Company{

    company_id: number;
    email: string,
    motto: string,
    name: string,
    password: string,
    projectsList: Project[];

    github: string,
    linkedin: string,
    languages: string[];
    frameworks: string[];
}