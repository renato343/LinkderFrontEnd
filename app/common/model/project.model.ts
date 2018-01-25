import {Language} from "./language.model";
import {Framework} from "./framework.model";

export interface Project {

    name: string;
    projectId: string,
    languages: Language[];
    frameworks: Framework[];


}