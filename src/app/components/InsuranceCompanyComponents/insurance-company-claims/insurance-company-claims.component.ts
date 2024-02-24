import { Component } from '@angular/core';

@Component({
  selector: 'app-insurance-company-claims',
  templateUrl: './insurance-company-claims.component.html',
  styleUrls: ['./insurance-company-claims.component.css']
})
export class InsuranceCompanyClaimsComponent {

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
