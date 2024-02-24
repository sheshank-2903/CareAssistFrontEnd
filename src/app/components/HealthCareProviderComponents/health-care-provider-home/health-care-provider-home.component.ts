import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-health-care-provider-home',
  templateUrl: './health-care-provider-home.component.html',
  styleUrls: ['./health-care-provider-home.component.css']
})
export class HealthCareProviderHomeComponent {
  isAddAdminModelVisible: boolean=false;

toggleChangeStatus() {
 let statusModel=document.getElementById("changeStatusModel");4
 if(this.isAddAdminModelVisible){
    statusModel?.classList.remove("active");
   console.log("Remove")
   this.isAddAdminModelVisible=false;
 }
 else{
    statusModel?.classList.add("active");
   console.log("show")
   this.isAddAdminModelVisible=true;
 }
}
}
