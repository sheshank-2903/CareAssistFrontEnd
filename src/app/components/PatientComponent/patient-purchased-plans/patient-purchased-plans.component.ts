import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Claims } from 'src/app/model/Claims';
import { Plans } from 'src/app/model/Plans';
import { ClaimsService } from 'src/app/services/ClaimsServices/claims.service';
import { PlansService } from 'src/app/services/PlansServices/plans.service';

@Component({
  selector: 'app-patient-purchased-plans',
  templateUrl: './patient-purchased-plans.component.html',
  styleUrls: ['./patient-purchased-plans.component.css']
})
export class PatientPurchasedPlansComponent {

  purchasedPlansList: Plans[] = [];
  selectedPlanId!: number;
  coverageAmount!: number;
  selectedInvoiceId!: number;

  patientId = JSON.parse(this.cookieService.get('userId')).userId;

  constructor(private plansService: PlansService, private claimService: ClaimsService, private cookieService: CookieService) {
    this.getPlansByPatientid();

  }

  getPlansByPatientid() {
    this.plansService.getByPatientId(JSON.parse(this.cookieService.get('userId')).userId, JSON.parse(this.cookieService.get('userId')).userToken)
      .subscribe(plans => this.purchasedPlansList = plans);
  }


  generateClaim(planId: number) {
    this.selectedPlanId = planId;
    let content = document.getElementById('generateClaimRequestDisplay');
    content?.classList.add('active');
  }

  closegenerateClaim() {
    let content = document.getElementById('generateClaimRequestDisplay');
    content?.classList.remove('active');
  }

  submitgenerateClaim() {
    const claim: Claims = {
      claimId: 0,
      claimAmount: this.coverageAmount,
      claimStatus: "PENDING"

    }
    console.log(claim);
    
    this.claimService.addClaims(claim, JSON.parse(this.cookieService.get('userId')).userId, this.selectedPlanId, this.selectedInvoiceId, JSON.parse(this.cookieService.get('userId')).userToken)
      .subscribe((claimResponse) => {

        alert('Congratulations Claim request generated');
        this.coverageAmount=0;
        this.selectedInvoiceId=0;
        let content = document.getElementById('generateClaimRequestDisplay');
        content?.classList.remove('active');
      }, (error) => {
        console.error('Error occurred:', error);
        alert('Error occured while generating Claim request');

      });


  }

}
