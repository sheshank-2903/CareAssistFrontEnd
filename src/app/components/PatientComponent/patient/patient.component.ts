import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent {
  constructor(private cookieService: CookieService,private router:Router) { }

  logout(){
    this.cookieService.delete('userId');
    this.router.navigate(['/homePage']);
  }

}
