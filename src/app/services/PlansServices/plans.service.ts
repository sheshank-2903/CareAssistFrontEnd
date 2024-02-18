import { HttpClient } from '@angular/common/http';
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

  getPlansById(planId:number):Observable<Plans>{
    return this._http.get<Plans>(this.baseUrl+`getById/${planId}`)
  }

  getAllPlans():Observable<Plans[]>{
    return this._http.get<Plans[]>(this.baseUrl+"getAll");
  }

  getPlansByName(planName:string):Observable<Plans[]>{
    return this._http.get<Plans[]>(this.baseUrl+`getByName/${planName}`)
  }

  getPlansByCompanyName(companyName:string):Observable<Plans[]>{
    return this._http.get<Plans[]>(this.baseUrl+`getByCompanyName/${companyName}`)
  }

  getByCoverageAmountLessThan(coverageAmount:number):Observable<Plans[]>{
    return this._http.get<Plans[]>(this.baseUrl+`getByCoverageAmountLessThan/${coverageAmount}`)
  }

  getByPatientId(patientId:number):Observable<Plans[]>{
    return this._http.get<Plans[]>(this.baseUrl+`getByPatientId/${patientId}`)
  }

  deletePlanById(planId:number):Observable<boolean>{
    return this._http.delete<boolean>(this.baseUrl+`delete/${planId}`)
  }


}
