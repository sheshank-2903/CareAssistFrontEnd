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

  logout(): void {
    const cookieNames: string[] = Object.keys(this.cookieService.getAll());
    for (const cookieName of cookieNames) {
      this.cookieService.delete(cookieName, '/', 'localhost');
    }
    this.router.navigate(['/homePage']);
  }

}
