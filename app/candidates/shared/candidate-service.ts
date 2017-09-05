import {Injectable} from "@angular/core";
import {Headers, Http, RequestOptions, Response} from "@angular/http";
import {Observable} from 'rxjs/Rx';
import {Candidate} from "./candidate.model";
import {Language} from "./language.model";
import {Framework} from "./framework.model";


@Injectable()
export class CandidateService {

    constructor(private http: Http) {
    }

    getCandidates(): Observable<Candidate[]> {

        return this.http.get("http://localhost:9090/candidate/allCandidates").map((response: Response) => {
            return <Candidate[]> response.json();
        }).catch(this.handleError);
    }

    getCandidate(id: number): Observable<Candidate> {

        return this.http.get("http://localhost:9090/candidate/id?id=" + id).map((response: Response) => {
            return <Candidate> response.json();
        }).catch(this.handleError);
    }

    registerCandidate(formvalues: any) {

        console.log("in Service " + JSON.stringify(formvalues));

        let headers = new Headers({'Content-type': 'application/json'});
        let options = new RequestOptions({headers: headers});

        this.http.post("http://localhost:9090/candidate/addCandidate", JSON.stringify(formvalues), options)
            .subscribe(resp => {

                console.log("this is response in register -------> " + resp.json().body)

            })
    }

    getLanguages(): Observable<Language[]> {

        return this.http.get("http://localhost:9090/candidate/allLanguages").map((response: Response) => {
            return <Language[]> response.json();
        }).catch(this.handleError);
    }

    getFrameworks(): Observable<Framework[]> {

        return this.http.get("http://localhost:9090/candidate/allFrameworks").map((response: Response) => {
            return <Framework[]> response.json();
        }).catch(this.handleError);
    }

    private handleError(error: Response) {
        return Observable.throw(error.statusText);
    }
}


