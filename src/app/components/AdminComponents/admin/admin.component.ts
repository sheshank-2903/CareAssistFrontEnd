import { Component } from '@angular/core';
import { Route, Router, RouterConfigOptions } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  constructor(private cookieService: CookieService,private router:Router) { }

  logout(): void {
    const cookieNames: string[] = Object.keys(this.cookieService.getAll());
    for (const cookieName of cookieNames) {
      this.cookieService.delete(cookieName);
    }
    this.router.navigate(['/homePage']);
  }
}
