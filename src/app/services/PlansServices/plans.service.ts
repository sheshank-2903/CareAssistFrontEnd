import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Plans } from 'src/app/model/Plans';

@Injectable({
  providedIn: 'root'
})
export class PlansService {

  constructor(private _http:HttpClient) { }

  baseUrl:string = 'http://localhost:8080/api/v1/plans/'

  addPlans(body:Plans,insuranceCompanyId:number):Observable<Plans>{
    return this._http.post<Plans>(this.baseUrl+`add/${insuranceCompanyId}`,body)
  }

  updatePlans(planName:string,description:string,coverageAmount:number,planId:number):Observable<Plans>{
    return this._http.put<Plans>(this.baseUrl+`update/${planName}/${description}/${coverageAmount}/${planId}`,{})
  }

  getPlansById(planId:number,token:string):Observable<Plans>{
    let tokenString = "Bearer " + token;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200'
    }).set("Authorization", tokenString);
    return this._http.get<Plans>(this.baseUrl+`getById/${planId}`,{ headers, responseType: 'json' })
  }

  getAllPlans(token:string):Observable<Plans[]>{
    let tokenString = "Bearer " + token;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200'
    }).set("Authorization", tokenString);
    return this._http.get<Plans[]>(this.baseUrl+"getAll", { headers, responseType: 'json' });
  }

  getPlansByName(planName:string):Observable<Plans[]>{
    return this._http.get<Plans[]>(this.baseUrl+`getByName/${planName}`)
  }

  getPlansByCompanyName(companyName:string):Observable<Plans[]>{
    return this._http.get<Plans[]>(this.baseUrl+`getByCompanyName/${companyName}`)
  }

  getPlansByCompanyId(insuranceCompanyId:number,token:string):Observable<Plans[]>{
    let tokenString = "Bearer " + token;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200'
    }).set("Authorization", tokenString);
    return this._http.get<Plans[]>(this.baseUrl+`getByCompanyId/${insuranceCompanyId}`,{headers,responseType: 'json'})
  }

  getByCoverageAmountLessThan(coverageAmount:number):Observable<Plans[]>{
    return this._http.get<Plans[]>(this.baseUrl+`getByCoverageAmountLessThan/${coverageAmount}`)
  }

  getByPatientId(patientId:number,token:string):Observable<Plans[]>{
    let tokenString = "Bearer " + token;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200'
    }).set("Authorization", tokenString);
    return this._http.get<Plans[]>(this.baseUrl+`getByPatientId/${patientId}`,{headers,responseType:'json'});
  }

  deletePlanById(token:string,planId:number):Observable<boolean>{
    let tokenString = "Bearer " + token;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200'
    }).set("Authorization", tokenString);
    return this._http.delete<boolean>(this.baseUrl+`delete/${planId}`,{ headers, responseType: 'json' })
  }


}
