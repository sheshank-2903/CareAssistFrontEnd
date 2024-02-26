import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Plans } from 'src/app/model/Plans';
import { PlansService } from 'src/app/services/PlansServices/plans.service';

@Component({
  selector: 'app-patient-plans',
  templateUrl: './patient-plans.component.html',
  styleUrls: ['./patient-plans.component.css']
})
export class PatientPlansComponent {


  plansList:Plans[]=[];


  constructor(private plansService:PlansService,private cookieService: CookieService){
    this.getAllPlans();
  }

  getAllPlans(){
    this.plansService.getAllPlans(JSON.parse(this.cookieService.get('userId')).userToken).subscribe((plans)=>{this.plansList=plans});
  }


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
