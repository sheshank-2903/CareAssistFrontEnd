import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Plans } from 'src/app/model/Plans';
import { PlansService } from 'src/app/services/PlansServices/plans.service';

@Component({
  selector: 'app-patient-purchased-plans',
  templateUrl: './patient-purchased-plans.component.html',
  styleUrls: ['./patient-purchased-plans.component.css']
})
export class PatientPurchasedPlansComponent {

  purchasedPlansList:Plans[]=[];

  constructor(private plansService:PlansService,private cookieService: CookieService){
    this.getPlansByPatientid();

  }

  getPlansByPatientid(){
    this.plansService.getByPatientId(JSON.parse(this.cookieService.get('userId')).userId,JSON.parse(this.cookieService.get('userId')).userToken)
    .subscribe(plans=>this.purchasedPlansList=plans);
  }


  generateClaim(){
    let content=document.getElementById('generateClaimRequestDisplay');
    content?.classList.add('active');
  }

  closegenerateClaim(){
    let content=document.getElementById('generateClaimRequestDisplay');
    content?.classList.remove('active');
  }

  submitgenerateClaim(){
    alert('Congratulations Claim request generated');
    let content=document.getElementById('generateClaimRequestDisplay');
    content?.classList.remove('active');
  }

}
