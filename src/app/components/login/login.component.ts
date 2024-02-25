import { Component } from '@angular/core';
import { HomeComponent } from '../HomeComponents/home/home.component';
import { AuthRequest } from 'src/app/model/AuthRequest';
import { JwtServiceService } from 'src/app/services/LoginServices/jwt-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  response:any;
  token:any;
  role:string="PATIENT";
  authRequest: AuthRequest={
    email:"",
    password:""
  };

  goToRegistration() {
    new HomeComponent().openTab("register");
  }
    
    
    constructor(private jwtService:JwtServiceService){}
    readFormData(formData: any) {
      this.authRequest.email = formData.form.value.email;
      this.authRequest.password = formData.form.value.password;
      this.getAccessToken(this.authRequest);
    }

  public getAccessToken(authRequest: any) {
    let response =  this.jwtService.getGeneratedToken(authRequest,this.role);

    response.subscribe( (genToken:any)=> {
         this.token = genToken ;console.log(genToken); 
        this.accessApi(this.token) });

  }

  public accessApi(token: any) {
    let responseBody = this.jwtService.authorizationTest(token,this.authRequest.email);
    console.log(responseBody)
    responseBody.subscribe(responseData => {
      this.response = responseData;
      console.log('responseData ' + responseData)
    }, error => { console.log('myerror ' + error) });
  }

}
