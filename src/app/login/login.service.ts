import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public _http: HttpClient) { }

  registeruser(username, emailID, phoneno, selectedJob) {
    var data = { "Username": username, "EamilId": emailID, "Phone": phoneno, "Job": selectedJob };
    let url = parseInt(sessionStorage.getItem("selectedProject")) + "/";
    return this._http.post(url, data, { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + sessionStorage.getItem('api-access-token') }) }).toPromise();
  }
}
