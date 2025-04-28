import { Injectable } from "@angular/core";
import { RequestApiService } from "@app/core/service/request-service";

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private _requestApiService: RequestApiService) {}

  apiAuthLogin(body: any) {
    return this._requestApiService.postApi('api/auth/login', body);
  }

  apiAuthRegister(body: any) {
    return this._requestApiService.postApi('api/auth/register', body);
  }
}
