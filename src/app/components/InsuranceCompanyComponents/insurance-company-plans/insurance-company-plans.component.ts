import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-insurance-company-plans',
  templateUrl: './insurance-company-plans.component.html',
  styleUrls: ['./insurance-company-plans.component.css']
})
export class InsuranceCompanyPlansComponent {
  isAddPlanModelVisible: boolean = false;
  isEditPlanModelVisible:boolean=false;
  addPlanForm !: FormGroup;

  constructor(private formBuilder: FormBuilder){
    
  }
  
  ngOnInit(){
    this.addPlanForm=this.formBuilder.group({
      PlanName:['',[Validators.required,Validators.pattern('^[a-zA-Z ]{3,20}$')]],
      PlanAmount:['',[Validators.required,Validators.pattern('^[1-9]\\d{4,}$')]],
      descriptionOfPlan:['',[Validators.required]],
  })}


  toggleAddPlan() {
    let addModel = document.getElementById("addPlanFormModel"); 4
    if (this.isAddPlanModelVisible) {
      addModel?.classList.remove("active");
      this.isAddPlanModelVisible = false;
    }
    else {
      addModel?.classList.add("active");
      this.isAddPlanModelVisible = true;
    }
  }

  
  toggleEditPlan() {
    let addModel = document.getElementById("editPlanFormModel"); 4
    if (this.isEditPlanModelVisible) {
      addModel?.classList.remove("active");
      this.isEditPlanModelVisible = false;
    }
    else {
      addModel?.classList.add("active");
      this.isEditPlanModelVisible = true;
    }
  }

  get getPlanForm(){
    return this.addPlanForm.controls;
  }



  SubmitPlan(){
    if(this.addPlanForm.invalid){
      return;
  }
  alert('Form submitted successfully');
  this.addPlanForm.reset();
  }

  SubmitEditedPlan(){
    if(this.addPlanForm.invalid){
      return;
  }
  alert('Form Edited successfully');
  this.addPlanForm.reset();
  
  }
}


