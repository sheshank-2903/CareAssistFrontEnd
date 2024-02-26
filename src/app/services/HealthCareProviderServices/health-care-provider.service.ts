import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HealthCareProvider } from 'src/app/model/HealthCareProvider';

@Injectable({
  providedIn: 'root'
})
export class HealthCareProviderService {

  constructor(private _http:HttpClient) { }

  baseUrl:string = 'http://localhost:8080/api/v1/healthcareprovider/'

  addAdmin(body:HealthCareProvider):Observable<HealthCareProvider>{
    return this._http.post<HealthCareProvider>(this.baseUrl+"register",body)
  }

  updateHealthCareProvider(body:HealthCareProvider):Observable<HealthCareProvider>{
    return this._http.put<HealthCareProvider>(this.baseUrl+"update",body)
  }

  getHealthCareProviderById(HealthCareProviderId:number):Observable<HealthCareProvider>{
    return this._http.get<HealthCareProvider>(this.baseUrl+`get/${HealthCareProviderId}`)
  }

  deleteHealthCareProvider(HealthCareProviderId:number):Observable<boolean>{
    return this._http.delete<boolean>(this.baseUrl+`delete/${HealthCareProviderId}`)
  }

  getAllHealthCareProvider(token:string):Observable<HealthCareProvider[]>{
    let tokenString = "Bearer " + token;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200'
    }).set("Authorization", tokenString);
    return this._http.get<HealthCareProvider[]>(this.baseUrl+`getAll`,{headers,responseType: 'json'});
  }
}
