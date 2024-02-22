import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  patientRegistrationForm !: FormGroup;
  insuranceRegistrationForm !:FormGroup;

  constructor(private formBuilder: FormBuilder){
    
  }

  ngOnInit(){
    
    this.patientRegistrationForm=this.formBuilder.group({
      patientName:['',[Validators.required,Validators.pattern('^[a-zA-Z ]{3,20}$')]],
      contact:['',[Validators.required,Validators.pattern('\\d{10}')]],
      dob:['',[Validators.required]],
      address:['',[Validators.required]],
      descriptionOfTreatment:['',[Validators.required]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.pattern('^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&./+]{8,}$')]],
      confirm_password: ['', Validators.required] 
    },{validator: this.passwordMatchValidator});

    this.insuranceRegistrationForm=this.formBuilder.group({
  
      insuranceCompanyDescription:['',[Validators.required,Validators.minLength(20)]],
      companyName:['',[Validators.required,Validators.pattern('^[a-zA-Z ]{5,20}$')]],
      companyContactNumber:['',[Validators.required,Validators.pattern('\\d{10}')]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.pattern('^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&./+]{8,}$')]],
      confirm_password: ['', Validators.required] 
    },{ validator: this.passwordMatchValidator });
  }

  get getInsuranceForm(){
  
    return this.insuranceRegistrationForm.controls;
  }

  get f(){
  
    return this.patientRegistrationForm.controls;
  }

  onSubmit(){

    if(this.patientRegistrationForm.invalid){
      return;
  }
  
  alert('Form submitted successfully');
  console.log(this.f['companyName'].value);
  
  }

  registerInsuranceCompany(){

    if(this.insuranceRegistrationForm.invalid){
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

  openTab(tabId: string): void {
    // Hide all tab contents
    const tabContents: NodeListOf<Element> = document.querySelectorAll('.tab-content');
    console.log(tabContents);
    tabContents.forEach((content: Element) => {
        content.classList.remove('active');
    });
    const tab: NodeListOf<Element> = document.querySelectorAll('.tab');
    console.log(tab);
    tab.forEach((content: Element) => {
        content.classList.remove('active');
    });


    // Show the selected tab content
    const selectedTabContent: Element | null = document.getElementById(tabId);
    if (selectedTabContent) {
        selectedTabContent.classList.add('active');
    }
    const selectedTab: Element | null = document.getElementById("button-"+tabId);
    if (selectedTab) {
      selectedTab.classList.add('active');
    }
  }
}
