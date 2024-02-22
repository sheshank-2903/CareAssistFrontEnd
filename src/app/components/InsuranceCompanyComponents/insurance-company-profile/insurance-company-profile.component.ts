import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-insurance-company-profile',
  templateUrl: './insurance-company-profile.component.html',
  styleUrls: ['./insurance-company-profile.component.css']
})
export class InsuranceCompanyProfileComponent {
  editable:boolean=true;

  updateForm !: FormGroup;

  constructor(private formBuilder: FormBuilder){

  }

  ngOnInit(){
    
    this.updateForm=this.formBuilder.group({
  
      insuranceCompanyDescription:['',[Validators.required,Validators.minLength(20)]],
      companyName:['',[Validators.required,Validators.pattern('^[a-zA-Z ]{5,20}$')]],
      companyContactNumber:['',[Validators.required,Validators.pattern('\\d{10}')]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.pattern('^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&./+]{8,}$')]],
      confirm_password: ['', Validators.required] 
    },{ validator: this.passwordMatchValidator });
  }


  get f(){
  
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
  console.log(this.f['companyName'].value);
  
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
