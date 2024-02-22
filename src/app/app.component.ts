import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router) {}
  navigateTo(role:string) {
  if(role=="ADMIN")
    this.router.navigate(['/admin/home']);
  else if(role == "PATIENT")
    this.router.navigate(['/patient/browsePlans']);
  else if(role=="INSURANCE_COMPANY")
    this.router.navigate(['/insuranceCompany/home']);
  else if(role=="HEALTH_CARE_PROVIDER")
    this.router.navigate(['/healthCareProvider/home']);
}
  title = 'CareAssist';
}
