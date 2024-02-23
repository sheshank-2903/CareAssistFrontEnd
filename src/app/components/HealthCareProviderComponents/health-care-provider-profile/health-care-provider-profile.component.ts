import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-health-care-provider-profile',
  templateUrl: './health-care-provider-profile.component.html',
  styleUrls: ['./health-care-provider-profile.component.css']
})
export class HealthCareProviderProfileComponent {
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
      healthCareProviderName:['',[Validators.required,Validators.pattern('^[a-zA-Z ]{3,20}$')]],
      contact:['',[Validators.required,Validators.pattern('\\d{10}')]],
      address:['',[Validators.required]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.pattern('^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&./+]{8,}$')]],
      confirm_password: ['', Validators.required] 
    },{validator: this.passwordMatchValidator});
  }


  get getHealthCareProvider(){
  
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
  console.log(this.getHealthCareProvider['companyName'].value);
  
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