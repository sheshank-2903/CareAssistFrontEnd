import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InsuranceCompany } from 'src/app/model/InsuranceCompany';

@Injectable({
  providedIn: 'root'
})
export class InsuranceCompanyService {

  constructor(private _http:HttpClient) { }

  baseUrl:string = 'http://localhost:8080/api/v1/insurancecompany/'

  addInsuranceCompany(body:InsuranceCompany):Observable<InsuranceCompany>{
    return this._http.post<InsuranceCompany>(this.baseUrl+"register",body)
  }

  updateInsuranceCompany(body:InsuranceCompany):Observable<InsuranceCompany>{
    return this._http.put<InsuranceCompany>(this.baseUrl+"update",body)
  }

  getInsuranceCompanyById(InsuranceCompanyId:number):Observable<InsuranceCompany>{
    return this._http.get<InsuranceCompany>(this.baseUrl+`get/${InsuranceCompanyId}`)
  }

  getAllInsuranceCompany():Observable<InsuranceCompany[]>{
    return this._http.get<InsuranceCompany[]>(this.baseUrl+`get`);
  }

  deleteInsuranceCompanyById(insuranceCompanyId:number):Observable<boolean>{
    return this._http.delete<boolean>(this.baseUrl+`delete/${insuranceCompanyId}`)
  }

  getInsuranceCompanyByName(insuranceCompanyName:string):Observable<InsuranceCompany[]>{
    return this._http.get<InsuranceCompany[]>(this.baseUrl+`getByName/${insuranceCompanyName}`)
  }
}
