import { Component } from '@angular/core';

@Component({
  selector: 'app-patient-claims',
  templateUrl: './patient-claims.component.html',
  styleUrls: ['./patient-claims.component.css']
})
export class PatientClaimsComponent {


  showPlanDetails(){
    let content=document.getElementById('planDetailsDisplay');
    content?.classList.add('active');
  }

  closePlanDetails(){
    let content=document.getElementById('planDetailsDisplay');
    content?.classList.remove('active');
  }

}
