import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Invoices } from 'src/app/model/Invoices';

@Injectable({
  providedIn: 'root'
})
export class InvoicesService {

  constructor(private _http:HttpClient) { }

  baseUrl:string = 'http://localhost:8080/api/v1/invoice/'

  addInvoice(body:Invoices,patientId:number):Observable<Invoices>{
    return this._http.post<Invoices>(this.baseUrl+`add/${patientId}`,body);
  }

  getAllInvoices():Observable<Invoices[]>{
    return this._http.get<Invoices[]>(this.baseUrl+"getAll");
  }

  getInvoiceById(invoiceId:number):Observable<Invoices>{
    return this._http.get<Invoices>(this.baseUrl+`get/${invoiceId}`);
  }

  getInvoiceByPatientId(patientId:number,token:string):Observable<Invoices[]>{
    let tokenString = "Bearer " + token;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200'
    }).set("Authorization", tokenString);
    return this._http.get<Invoices[]>(this.baseUrl+`getByPatientId/${patientId}`,{headers,responseType: 'json'});
  }

  getInvoiceByHealthCareProviderId(healthCareProviderId:number):Observable<Invoices[]>{
    return this._http.get<Invoices[]>(this.baseUrl+`getByHealthCareProviderId/${healthCareProviderId}`);
  }

  updateInvoiceStatus(invoiceId:number, invoiceStatus:string){
    return this._http.put<Invoices>(this.baseUrl+`updateInvoiceStatus/${invoiceId}/${invoiceStatus}`,{});
  }

  deleteInvoiceById(invoiceId:number):Observable<boolean>{
    return this._http.delete<boolean>(this.baseUrl+`delete/${invoiceId}`);
  }

  }

  
