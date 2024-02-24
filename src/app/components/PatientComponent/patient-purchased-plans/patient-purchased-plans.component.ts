import { Component } from '@angular/core';

@Component({
  selector: 'app-patient-purchased-plans',
  templateUrl: './patient-purchased-plans.component.html',
  styleUrls: ['./patient-purchased-plans.component.css']
})
export class PatientPurchasedPlansComponent {

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
