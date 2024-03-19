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

  addHealthCareProvider(body:HealthCareProvider,profile_picture_file:File|string):Observable<HealthCareProvider>{
    const formData = new FormData();
    formData.append('file', profile_picture_file);
    formData.append('healthCareProviderDtoStringified', JSON.stringify(body));
    return this._http.post<HealthCareProvider>(this.baseUrl+"register",formData)
  }

  updateHealthCareProvider(token:string, body:HealthCareProvider):Observable<HealthCareProvider>{
    let tokenString = "Bearer " + token;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200'
    }).set("Authorization", tokenString);
    return this._http.put<HealthCareProvider>(this.baseUrl+"update",body, { headers, responseType: 'json' })
  }

  getHealthCareProviderById(token:string,HealthCareProviderId:number):Observable<HealthCareProvider>{
    let tokenString = "Bearer " + token;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200'
    }).set("Authorization", tokenString);
    return this._http.get<HealthCareProvider>(this.baseUrl+`get/${HealthCareProviderId}`, { headers, responseType: 'json' })
  }

  getHealthCareProviderByName(HealthCareProviderName:string,token:string):Observable<HealthCareProvider[]>{
    let tokenString = "Bearer " + token;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200'
    }).set("Authorization", tokenString);
    return this._http.get<HealthCareProvider[]>(this.baseUrl+`getHealthCareProviderByName/${HealthCareProviderName}`, { headers, responseType: 'json' })
  }



  deleteHealthCareProviderById(token:string,HealthCareProviderId:number):Observable<boolean>{
    let tokenString = "Bearer " + token;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200'
    }).set("Authorization", tokenString);
    return this._http.delete<boolean>(this.baseUrl+`delete/${HealthCareProviderId}`,{ headers, responseType: 'json' })
  }

  getAllHealthCareProvider(token:string):Observable<HealthCareProvider[]>{
    let tokenString = "Bearer " + token;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200'
    }).set("Authorization", tokenString);
    return this._http.get<HealthCareProvider[]>(this.baseUrl+`getAll`,{headers,responseType: 'json'});
  }

  updateProfilePicture(healthCareProviderId:number,healthCareProviderProfilePicture:File,token:string):Observable<HealthCareProvider>{
    let tokenString = "Bearer " + token;
    const formData = new FormData();
    formData.append('healthCareProviderProfilePicture', healthCareProviderProfilePicture);
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Authorization': tokenString 
    });
    return this._http.put<any>(`${this.baseUrl}updateProfilePicture/${healthCareProviderId}`, formData, { headers: headers})
  }
}
