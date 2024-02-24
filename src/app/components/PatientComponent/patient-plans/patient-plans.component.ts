import { Component } from '@angular/core';

@Component({
  selector: 'app-patient-plans',
  templateUrl: './patient-plans.component.html',
  styleUrls: ['./patient-plans.component.css']
})
export class PatientPlansComponent {



  confirmPurchase(){
    let content=document.getElementById('confirmPurchaseDisplay');
    content?.classList.add('active');
  }

  closeConfirmPurchase(){
    let content=document.getElementById('confirmPurchaseDisplay');
    content?.classList.remove('active');
  }

  confirmPurchaseCompleted(){
    alert('Congratulations Purchase completed');
    let content=document.getElementById('confirmPurchaseDisplay');
    content?.classList.remove('active');
  }

}
