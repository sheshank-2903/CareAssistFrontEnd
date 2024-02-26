import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Claims } from 'src/app/model/Claims';
import { ClaimsService } from 'src/app/services/ClaimsServices/claims.service';

@Component({
  selector: 'app-patient-claims',
  templateUrl: './patient-claims.component.html',
  styleUrls: ['./patient-claims.component.css']
})
export class PatientClaimsComponent {

  claimsList:Claims[]=[];

  constructor(private claimService:ClaimsService,private cookieService: CookieService){
    this.getClaimsByPatientId();

  }

  getClaimsByPatientId(){
    this.claimService.getClaimsByPatientId(JSON.parse(this.cookieService.get('userId')).userId,JSON.parse(this.cookieService.get('userId')).userToken)
    .subscribe(claims=>this.claimsList=claims);
  }

  showPlanDetails(){
    let content=document.getElementById('planDetailsDisplay');
    content?.classList.add('active');
  }

  closePlanDetails(){
    let content=document.getElementById('planDetailsDisplay');
    content?.classList.remove('active');
  }

}
