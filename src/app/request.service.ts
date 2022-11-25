import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) { 

  }
  baseURL: string = "http://localhost:3030/";

  getSensorStatus() {
    console.log("get sensor status!");
    const url = this.baseURL;
    return this.http.get<any[]>(url);
  }

  getSensor(): Observable <any> {
    console.log("get sensor status");
    const url = this.baseURL + "getSensor";
    return this.http.get<any>(url);
  }

  command(state: string) {
    console.log("post");
    const url = this.baseURL + "command";
    return this.http.post(url, {command: state});
  }
  ///bulb/<number>/<state>
  setLight(bulb: number, state: number) {
    console.log("post");
    const url = this.baseURL + "setLight/"+ bulb + "/" + state;
    return this.http.post(url, null);
  }
}