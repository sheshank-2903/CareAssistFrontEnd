import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Admin } from 'src/app/model/Admin';
import { AdminService } from 'src/app/services/AdminServices/admin.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent {
  isAddAdminModelVisible: boolean=false;
   addAdminForm !: FormGroup;

toggleAddAdmin() {
  let addModel=document.getElementById("addAdminFormModel");
  if(this.isAddAdminModelVisible){
    addModel?.classList.remove("active");
    this.isAddAdminModelVisible=false;
  }
  else{
    addModel?.classList.add("active");
    this.isAddAdminModelVisible=true;
  }
}

  adminList:Admin[]=[];

  constructor(private adminService:AdminService, private formBuilder:FormBuilder){
  
  }

  ngOnInit(){
    
    this. addAdminForm=this.formBuilder.group({
      adminName:['',[Validators.required,Validators.pattern('^[a-zA-Z ]{3,20}$')]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.pattern('^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&./+]{8,}$')]],
      confirm_password: ['', Validators.required] 
    },{validator: this.passwordMatchValidator});
  }


  get getAdminForm(){
  
    return this. addAdminForm.controls;
  }

  onSubmit(){

    if(this. addAdminForm.invalid){
      return;
  }
  
  alert('Form submitted successfully');
  console.log(this. addAdminForm);
  this. addAdminForm.reset();
  
  }

  passwordMatchValidator(control: AbstractControl) {
    const password = control.get('password')?.value;
    const confirm_password = control.get('confirm_password')?.value;

    if (password !== confirm_password) {
      control.get('confirm_password')?.setErrors({ passwordMismatch: true });
      return { passwordMismatch: true };
    } else {
      return null;
    }
  }


}
