import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { Plans } from 'src/app/model/Plans';
import { PlansService } from 'src/app/services/PlansServices/plans.service';

@Component({
  selector: 'app-insurance-company-plans',
  templateUrl: './insurance-company-plans.component.html',
  styleUrls: ['./insurance-company-plans.component.css']
})
export class InsuranceCompanyPlansComponent {
  isAddPlanModelVisible: boolean = false;
  isEditPlanModelVisible:boolean=false;
  addPlanForm !: FormGroup;

  comapnyPlansList:Plans[]=[];
  deleteId!:number;

  constructor(private formBuilder: FormBuilder,private plansService:PlansService,private cookieService: CookieService){
    this.getPlansByCompanyId();
  }
  
  ngOnInit(){
    this.addPlanForm=this.formBuilder.group({
      PlanName:['',[Validators.required,Validators.pattern('^[a-zA-Z ]{3,20}$')]],
      PlanAmount:['',[Validators.required,Validators.pattern('^[1-9]\\d{4,}$')]],
      descriptionOfPlan:['',[Validators.required]],
  })}

  getPlansByCompanyId(){
    this.plansService.getPlansByCompanyId(JSON.parse(this.cookieService.get('userId')).userId,JSON.parse(this.cookieService.get('userId')).userToken)
    .subscribe(plans=>this.comapnyPlansList=plans);
  }


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

  confirmDelete(planId:number){
    this.deleteId=planId
    let content=document.getElementById('confirmDeleteDisplay');
    content?.classList.add('active');
  }

  closeDeleteModel(){
    let content=document.getElementById('confirmDeleteDisplay');
    content?.classList.remove('active');
  }

  submitConfirmDelete(){
    this.deletePlanById();

    alert('Delete Successful');
    let content=document.getElementById('confirmDeleteDisplay');
    content?.classList.remove('active');
  }

  deletePlanById(){
    this.plansService.deletePlanById(JSON.parse(this.cookieService.get('userId')).userToken,this.deleteId)
    .subscribe(message=>{
      this.deleteId=0;
      console.log("message");
      this.getPlansByCompanyId();
    }
    )
  }
}


