import {Injectable} from "@angular/core";
import {Headers, Http, RequestOptions, Response} from "@angular/http";
import {Observable} from 'rxjs/Rx';
import {Candidate} from "../../common/model/candidate.model";
import {Language} from "../../common/model/language.model";
import {Framework} from "../../common/model/framework.model";
import {MitchModel} from "../../common/model/mitch.model";

@Injectable()
export class CandidateService {


    server = "http://localhost:9090/";
    //server = "http://192.168.1.75:9090/";

    constructor(private http: Http) {
    }

    getCandidates(): Observable<Candidate[]> {

        return this.http.get(this.server + "candidate/allCandidates").map((response: Response) => {

            return <Candidate[]> response.json();
        }).catch(this.handleError);
    }

    getCandidate(id: number): Observable<Candidate> {

        return this.http.get(this.server + "candidate/id?id=" + id).map((response: Response) => {
            return <Candidate> response.json();
        }).catch(this.handleError);
    }

    registerCandidate(formvalues: any) {

        let headers = new Headers({'Content-type': 'application/json'});
        let options = new RequestOptions({headers: headers});

        return this.http.post("http://localhost:9090/candidate/addCandidate", JSON.stringify(formvalues), options)

    }

    getLanguages(): Observable<Language[]> {

        return this.http.get(this.server + "candidate/allLanguages").map((response: Response) => {
            return <Language[]> response.json();
        }).catch(this.handleError);
    }

    getFrameworks(): Observable<Framework[]> {

        return this.http.get(this.server + "candidate/allFrameworks").map((response: Response) => {
            return <Framework[]> response.json();
        }).catch(this.handleError);
    }

    mitch(mitch: MitchModel) {

        let headers = new Headers({'Content-type': 'application/json'});
        let options = new RequestOptions({headers: headers});

        this.http.post(this.server + "/match/addMatch", JSON.stringify(mitch), options).subscribe(data =>{

            console.log(data);


        })

    }

    private handleError(error: Response) {
        return Observable.throw(error.statusText);
    }
}


