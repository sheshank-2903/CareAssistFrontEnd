import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-insurance-company',
  templateUrl: './insurance-company.component.html',
  styleUrls: ['./insurance-company.component.css']
})
export class InsuranceCompanyComponent {
  constructor(private cookieService: CookieService,private router:Router) { }

  logout(){
    this.cookieService.delete('userId');
    this.router.navigate(['/homePage']);
  }

}
