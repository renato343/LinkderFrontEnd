import {Language} from "./language.model";
import {Framework} from "./framework.model";
import {Company} from "./company.model";

export interface Project {

    project_id: number,
    name: string;
    motto: string,
    languages: Language[];
    frameworks: Framework[];
    company: Company;


}