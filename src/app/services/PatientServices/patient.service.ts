import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from 'src/app/model/Patient';
import { Plans } from 'src/app/model/Plans';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private _http:HttpClient) { }

  baseUrl:string = 'http://localhost:8080/api/v1/patient/'

  addPatient(body:Patient):Observable<Patient>{
    return this._http.post<Patient>(this.baseUrl+"register",body);
  }

  updatePatient(body:Patient):Observable<Patient>{
    return this._http.put<Patient>(this.baseUrl+"update",body);
  }

  getPatientById(patientId:number):Observable<Patient>{
    return this._http.get<Patient>(this.baseUrl+`getById/${patientId}`);
  }


  deletePatientById(patientId:number):Observable<boolean>{
    return this._http.delete<boolean>(this.baseUrl+`delete/${patientId}`);
  }

  getAllPatients(token:string):Observable<Patient[]>{
    let tokenString = "Bearer " + token;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200'
    }).set("Authorization", tokenString);
    return this._http.get<Patient[]>(this.baseUrl+"getAll", { headers, responseType: 'json' });
  }

  getPatientByName(patientName:string):Observable<Patient[]>{
    return this._http.get<Patient[]>(this.baseUrl+`getByName/${patientName}`);
  }

  getAllPurchasedPlans(patientId:number):Observable<Plans[]>{
    return this._http.get<Plans[]>(this.baseUrl+`getAllPurchasedPlans/${patientId}`);
  }

  
  purchasePlan(patientId:number,planId:number):Observable<string>{
    return this._http.put<string>(this.baseUrl+`purchasePlan/${patientId}/${planId}`,{});
  }
  

}
