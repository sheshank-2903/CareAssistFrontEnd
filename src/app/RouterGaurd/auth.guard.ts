// import { CanActivateFn } from '@angular/router';

import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { JwtServiceService } from "../services/LoginServices/jwt-service.service";

// export const authGuard: CanActivateFn = (route, state) => {
//   return true;
// };

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {



  constructor(private router: Router,private jwtService:JwtServiceService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const expectedRole = route.data['expectedRole'];

    // Get the user's role from the decoded token 
    const userRole = this.jwtService.getUserRole();

    // Check if the user's role matches the expected role
    if (userRole === expectedRole) {
      console.log("page change success", userRole)
      return true;
    } else {
      // Navigate to the login page or a forbidden page
      this.router.navigate(['/homePage']); // navigate back to the admin login page
      return false;
    }
  }
  
}