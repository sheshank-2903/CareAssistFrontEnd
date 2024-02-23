import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent {
  
  editable:boolean=true;

  constructor(){

  }

  toggleEditable(){
    if(this.editable){
      this.editable=false;
    }
    else{
      this.editable=true;
    }
    // console.log("new value ", this.editable);
  }

}
