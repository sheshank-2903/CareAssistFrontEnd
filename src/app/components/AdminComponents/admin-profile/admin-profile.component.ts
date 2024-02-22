import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent {
  
  editable:boolean=true;
  name:string="shgeshank"

  constructor(){

  }

  toggleEditable(){
    this.editable=!this.editable;
    console.log("new value ", this.editable);
  }

}
