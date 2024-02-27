import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-health-care-provider',
  templateUrl: './health-care-provider.component.html',
  styleUrls: ['./health-care-provider.component.css']
})
export class HealthCareProviderComponent {
  constructor(private cookieService: CookieService,private router:Router) { }

  logout(): void {
    const cookieNames: string[] = Object.keys(this.cookieService.getAll());
    for (const cookieName of cookieNames) {
      this.cookieService.delete(cookieName);
    }
    this.router.navigate(['/homePage']);
  }
}