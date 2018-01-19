import {Injectable} from "@angular/core";
import {Headers, Http, RequestOptions, Response} from "@angular/http";
import {Observable} from 'rxjs/Rx';
import {Company} from "./company.model";
import {Language} from "./language.model";
import {Framework} from "./framework.model";


@Injectable()
export class CompanyService {

    constructor(private http: Http) {
    }

    getcompanys(): Observable<Company[]> {

        return this.http.get("http://localhost:9090/company/allCompanies").map((response: Response) => {
            return <Company[]> response.json();

        }).catch(this.handleError);
    }

    getcompany(id: number): Observable<Company> {

        return this.http.get("http://localhost:9090/company/id?id=" + id).map((response: Response) => {
            return <Company> response.json();
        }).catch(this.handleError);
    }

    registercompany(formvalues: any) {

        let headers = new Headers({'Content-type': 'application/json'});
        let options = new RequestOptions({headers: headers});

        return this.http.post("http://localhost:9090/company/addCompany", JSON.stringify(formvalues), options)
    }

    getLanguages(): Observable<Language[]> {

        return this.http.get("http://localhost:9090/company/allLanguages").map((response: Response) => {
            return <Language[]> response.json();
        }).catch(this.handleError);
    }

    getFrameworks(): Observable<Framework[]> {

        return this.http.get("http://localhost:9090/company/allFrameworks").map((response: Response) => {
            return <Framework[]> response.json();
        }).catch(this.handleError);
    }

    private handleError(error: Response) {
        return Observable.throw(error.statusText);
    }
}


