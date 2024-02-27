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

  logout(){
    this.cookieService.delete('userId', '/', 'localhost');
    this.router.navigate(['/homePage']);
  }
}
