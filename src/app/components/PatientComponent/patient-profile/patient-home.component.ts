import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-patient-home',
  templateUrl: './patient-home.component.html',
  styleUrls: ['./patient-home.component.css']
})
export class PatientHomeComponent {

  editable:boolean=true;

  updateForm !: FormGroup;

  constructor(private formBuilder: FormBuilder){

  }

  ngOnInit(){
    
    this.updateForm=this.formBuilder.group({
  
      patientName:['',[Validators.required,Validators.pattern('^[a-zA-Z ]{3,20}$')]],
      contact:['',[Validators.required,Validators.pattern('\\d{10}')]],
      dob:['',[Validators.required]],
      address:['',[Validators.required]],
      descriptionOfTreatment:['',[Validators.required]],
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

  getYesterdayDate(): string {
    const today = new Date();
    today.setDate(today.getDate() - 1); // Subtract 1 day to get yesterday's date
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
    const yyyy = today.getFullYear();
  
    return `${yyyy}-${mm}-${dd}`;
  }



}


