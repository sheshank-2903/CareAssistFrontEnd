import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JwtServiceService {

  constructor(private http: HttpClient) { } 

  baseURLAdmin: string = 'http://localhost:8080/api/v1/admin/'; 
  baseURLPatient: string = 'http://localhost:8080/api/v1/patient/'; 
  baseURLHealthCare: string = 'http://localhost:8080/api/v1/healthcareprovider/'; 
  baseURLInsuranceCompany: string = 'http://localhost:8080/api/v1/insurancecompany/'; 
  finalBaseURL:string="";

  getGeneratedToken(requestBody: any,role:string) {
    let response:any;
    if(role==="PATIENT"){
      this.finalBaseURL=this.baseURLPatient;
      response= this.http.post(this.baseURLPatient + "login", requestBody, { responseType: 'text' as 'json' });
    }
    else if(role==="HEALTH_CARE_PROVIDER"){
      this.finalBaseURL=this.baseURLHealthCare;
      response= this.http.post(this.baseURLHealthCare + "login", requestBody, { responseType: 'text' as 'json' });
    }
    else if(role==="INSURANCE_COMPANY"){
      this.finalBaseURL=this.baseURLInsuranceCompany;
      response= this.http.post(this.baseURLInsuranceCompany + "login", requestBody, { responseType: 'text' as 'json' });
    }
    else if(role==="ADMIN"){
      this.finalBaseURL=this.baseURLAdmin;
      response= this.http.post(this.baseURLAdmin + "login", requestBody, { responseType: 'text' as 'json' });
    }
    return response;
  }


  authorizationTest(token: any,email:string) {
    let tokenString = "Bearer " + token;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200'
    }).set("Authorization", tokenString);
    return this.http.get(this.finalBaseURL + "getByEmail/"+email, { headers, responseType: 'text' as 'json' });
  }

}
