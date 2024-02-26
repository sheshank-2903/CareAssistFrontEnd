import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Claims } from 'src/app/model/Claims';
import { ClaimsService } from 'src/app/services/ClaimsServices/claims.service';

@Component({
  selector: 'app-insurance-company-claims',
  templateUrl: './insurance-company-claims.component.html',
  styleUrls: ['./insurance-company-claims.component.css']
})
export class InsuranceCompanyClaimsComponent {

  comapnyClaimsList:Claims[]=[];
  
  constructor(private claimService:ClaimsService,private cookieService: CookieService){

    this.getClaimsByCompanyId();
  }

  getClaimsByCompanyId(){
    this.claimService.getClaimsByCompanyId(JSON.parse(this.cookieService.get('userId')).userId,JSON.parse(this.cookieService.get('userId')).userToken)
    .subscribe(claims=>this.comapnyClaimsList=claims);
  }

  showPatientModel(){
    let content=document.getElementById('showPatientModel');
    content?.classList.add('active');
  }

  closePatientModel(){
    let content=document.getElementById('showPatientModel');
    content?.classList.remove('active');
  }

  showPlanModel(){
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
