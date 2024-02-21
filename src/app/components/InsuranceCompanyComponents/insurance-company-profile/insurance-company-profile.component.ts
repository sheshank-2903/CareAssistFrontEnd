import { Component } from '@angular/core';

@Component({
  selector: 'app-insurance-company-profile',
  templateUrl: './insurance-company-profile.component.html',
  styleUrls: ['./insurance-company-profile.component.css']
})
export class InsuranceCompanyProfileComponent {
  editable:boolean=true;
  name:string="shgeshank"

  constructor(){

  }

  toggleEditable(){
    this.editable=!this.editable;
    console.log("new value ", this.editable);
  }
}
