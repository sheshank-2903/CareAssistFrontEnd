import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Claims } from 'src/app/model/Claims';
import { Patient } from 'src/app/model/Patient';
import { Plans } from 'src/app/model/Plans';
import { ClaimsService } from 'src/app/services/ClaimsServices/claims.service';
import { PlansService } from 'src/app/services/PlansServices/plans.service';

@Component({
  selector: 'app-insurance-company-claims',
  templateUrl: './insurance-company-claims.component.html',
  styleUrls: ['./insurance-company-claims.component.css']
})
export class InsuranceCompanyClaimsComponent {

  plan:Plans={
    "planId":0,
    "planName":'',
    "dateOfIssue":new Date(),
    "coverageAmount":0,
    "description":''
  }

  patient:Patient={
    "patientId": 0,
    'dob': new Date(),
    "contact": "",
    "address": "",
    "patientName": "",
    "descriptionOfTreatment": "",
    "email": "",
    "password": "",
    "patientGender":"",
  }


  comapnyClaimsList:Claims[]=[];
  
  
  constructor(private claimService:ClaimsService,private cookieService: CookieService,private planService:PlansService){

    this.getClaimsByCompanyId();
  }

  getClaimsByCompanyId(){
    this.claimService.getClaimsByCompanyId(JSON.parse(this.cookieService.get('userId')).userId,JSON.parse(this.cookieService.get('userId')).userToken)
    .subscribe(claims=>this.comapnyClaimsList=claims);
  }

  showPatientModel(claimId:number){
    this.claimService.getPatientByClaimId(claimId,JSON.parse(this.cookieService.get('userId')).userToken)
    .subscribe(data=>this.patient=data);

    let content=document.getElementById('showPatientModel');
    content?.classList.add('active');
  }

  closePatientModel(){
    let content=document.getElementById('showPatientModel');
    content?.classList.remove('active');
  }

  showPlanModel(claimId:number){
    this.claimService.getPlanByClaimId(claimId,JSON.parse(this.cookieService.get('userId')).userToken)
    .subscribe(data=>
      this.plan=data);
  
    let content=document.getElementById('showPlanModel');
    content?.classList.add('active');
  }

  closePlanModel(){
    let content=document.getElementById('showPlanModel');
    content?.classList.remove('active');
  }

  showInvoiceModel(){
    let content=document.getElementById('showInvoiceModel');
    content?.classList.add('active');
  }

  closeInvoiceModel(){
    let content=document.getElementById('showInvoiceModel');
    content?.classList.remove('active');
  }

}
