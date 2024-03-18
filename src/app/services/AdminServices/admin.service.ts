import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from 'src/app/model/Admin';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private _http:HttpClient) { }

  baseUrl:string = 'http://localhost:8080/api/v1/admin/'

  addAdmin(admin: Admin,profile_picture_file:File|string): Observable<Admin> {
    const formData = new FormData();
    formData.append('file', profile_picture_file);
    formData.append('adminDtoStringified', JSON.stringify(admin));
    return this._http.post<Admin>(this.baseUrl + 'register', formData);
  }

  updateAdmin(body:Admin,token:string):Observable<Admin>{
    let tokenString = "Bearer " + token;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200'
    }).set("Authorization", tokenString);
    return this._http.put<Admin>(this.baseUrl+"update",body, { headers, responseType: 'json' })
  }

  getAdminByName(adminName:string,token:string):Observable<Admin[]>{
    let tokenString = "Bearer " + token;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200'
    }).set("Authorization", tokenString);
    return this._http.get<Admin[]>(this.baseUrl+`getAdminByName/${adminName}`, { headers, responseType: 'json' })
  }

  getAdminById(adminId:number,token:string):Observable<Admin>{
    let tokenString = "Bearer " + token;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200'
    }).set("Authorization", tokenString);
    return this._http.get<Admin>(this.baseUrl+`get/${adminId}`, { headers, responseType: 'json' })
  }

  deleteAdminById(token:string,adminId:number){
    let tokenString = "Bearer " + token;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200'
    }).set("Authorization", tokenString);
    return this._http.delete<boolean>(this.baseUrl+`delete/`+adminId, { headers, responseType: 'json' })
  }


  getAllAdmin(token:string){
    let tokenString = "Bearer " + token;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200'
    }).set("Authorization", tokenString);
    return this._http.get<Admin[]>(this.baseUrl+`getAll`, { headers, responseType: 'json' })
  }
}

