import {Injectable} from "@angular/core";
import {Headers, Http, RequestOptions, Response} from "@angular/http";
import {Observable} from 'rxjs/Rx';
import {AuthService} from "../../user/auth.service";
import {Company} from "../../common/model/company.model";
import {Project} from "../../common/model/project.model";
import {Language} from "../../common/model/language.model";
import {Framework} from "../../common/model/framework.model";

@Injectable()
export class CompanyService {

    // server = "http://localhost:9090/";
    server = "http://192.168.1.75:9090/";

    constructor(private http: Http,
                private authService: AuthService) {
    }

    getcompanys(): Observable<Company[]> {

        return this.http.get(this.server + "company/allCompanies").map((response: Response) => {
            return <Company[]> response.json();

        }).catch(this.handleError);
    }

    getcompany(id: number): Observable<Company> {

        return this.http.get(this.server + "company/id?id=" + id).map((response: Response) => {
            return <Company> response.json();
        }).catch(this.handleError);
    }

    registercompany(formvalues: any) {

        let headers = new Headers({'Content-type': 'application/json'});
        let options = new RequestOptions({headers: headers});

        return this.http.post(this.server + "company/addCompany", JSON.stringify(formvalues), options)
    }

    matchCompany(company: Company){

        //TODO: change company to project
        let headers = new Headers({'Content-type': 'application/json'});
        let options = new RequestOptions({headers: headers});

        return this.http.post(this.server + "candidate/match", JSON.stringify(company), options)
    }

    getProjects(): Observable<Project[]>{

        return this.http.get(this.server + "company/allProjects").map((response: Response) => {
            return <Project[]> response.json();

        }).catch(this.handleError);
    }

    getProject(id: number) : Observable<Project> {

        return this.http.get(this.server + "company/id?id=" + id).map((resp: Response) => {
            return <Project> resp.json();
        }).catch(this.handleError);

    }

    getLanguages(): Observable<Language[]> {

        return this.http.get(this.server + "company/allLanguages").map((response: Response) => {
            return <Language[]> response.json();
        }).catch(this.handleError);
    }

    getFrameworks(): Observable<Framework[]> {

        return this.http.get(this.server + "company/allFrameworks").map((response: Response) => {
            return <Framework[]> response.json();
        }).catch(this.handleError);
    }

    private handleError(error: Response) {
        return Observable.throw(error.statusText);
    }




}


