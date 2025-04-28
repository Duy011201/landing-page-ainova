import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "@app/core/environment/develop.environment";

@Injectable({
  providedIn: 'root'
})
export class RequestApiService {
  constructor(private _http: HttpClient) {
  }

  postApi(url: string, body: any = {}): Observable<any> {
    return this._http.post(`${environment.API_URL}/${url}`, body);
  }

  getApi(url: string, param: any = {}): Observable<any> {
    return this._http.get(`${environment.API_URL}/${url}`, { params: param });
  }
}
