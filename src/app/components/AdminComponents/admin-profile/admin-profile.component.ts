import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent {
  editable:boolean=true;

  updateForm !: FormGroup;
  selectedGender: string="";

  genderOptions = ['Male', 'Female'];

  selectGender(gender: string): void {
    this.selectedGender = gender;
  }
  constructor(private formBuilder: FormBuilder){
  }

  ngOnInit(){
    
    this.updateForm=this.formBuilder.group({
      adminName:['',[Validators.required,Validators.pattern('^[a-zA-Z ]{3,20}$')]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.pattern('^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&./+]{8,}$')]],
      confirm_password: ['', Validators.required] 
    },{validator: this.passwordMatchValidator});
  }


  get getAdminForm(){
  
    return this.updateForm.controls;
  }


  toggleEditable(){
    this.editable=!this.editable;
    // console.log("new value ", this.editable);
  }

  onSubmit(){

    if(this.updateForm.invalid){
      return;
  }
  
  alert('Form submitted successfully');
  console.log(this.getAdminForm['companyName'].value);
  
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
