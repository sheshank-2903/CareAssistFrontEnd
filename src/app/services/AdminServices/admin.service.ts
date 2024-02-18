import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from 'src/app/model/Admin';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private _http:HttpClient) { }

  baseUrl:string = 'http://localhost:8080/api/v1/admin/'

  addAdmin(body:Admin):Observable<Admin>{
    return this._http.post<Admin>(this.baseUrl+"register",body)
  }

  updateAdmin(body:Admin):Observable<Admin>{
    return this._http.put<Admin>(this.baseUrl+"update",body)
  }

  getAdminById(adminId:number):Observable<Admin>{
    return this._http.get<Admin>(this.baseUrl+`get/${adminId}`)
  }
}
