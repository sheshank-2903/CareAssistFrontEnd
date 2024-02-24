import { Component } from '@angular/core';
import { HomeComponent } from '../HomeComponents/home/home.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  goToRegistration() {
    new HomeComponent().openTab("register");
  }

}
