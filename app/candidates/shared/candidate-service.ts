import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from 'rxjs/Rx';
import {Candidate} from "./candidate.model";


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

    private handleError(error: Response) {
        return Observable.throw(error.statusText);
    }
}


