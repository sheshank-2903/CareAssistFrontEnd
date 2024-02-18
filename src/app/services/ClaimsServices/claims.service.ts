import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Claims } from 'src/app/model/Claims';

@Injectable({
  providedIn: 'root'
})
export class ClaimsService {
  
  constructor(private _http:HttpClient) { }

  baseUrl:string = 'http://localhost:8080/api/v1/claims/'

  addClaims(body:Claims,patientId:number,planId:number,invoiceId:number):Observable<Claims>{
    return this._http.post<Claims>(this.baseUrl+`add/${patientId}/${planId}/${invoiceId}`,body)
  }

  updateClaims(claimId:number,newStatus:string):Observable<Claims>{
    return this._http.put<Claims>(this.baseUrl + `update/${claimId}/${newStatus}`,{})
  }

  getClaimsById(ClaimsId:number):Observable<Claims>{
    return this._http.get<Claims>(this.baseUrl+`get/${ClaimsId}`)
  }

  getAllClaims():Observable<Claims[]>{
    return this._http.get<Claims[]>(this.baseUrl+`getAll`)
  }

  deleteClaimsById(ClaimsId:number):Observable<boolean>{
    return this._http.delete<boolean>(this.baseUrl+`delete/${ClaimsId}`)
  }

  getClaimsByPatientId(patientId:number):Observable<Claims[]>{
    return this._http.get<Claims[]>(this.baseUrl+`getByPatientId/${patientId}`)
  }

  getClaimsByStatus(status:string,patientId:number):Observable<Claims[]>{
    return this._http.get<Claims[]>(this.baseUrl+`getByStatus/${status}/${patientId}`)
  }

  getClaimsByPlanId(planId:number):Observable<Claims[]>{
    return this._http.get<Claims[]>(this.baseUrl+`getByPlanId/${planId}`)
  }
}
