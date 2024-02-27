import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Plans } from 'src/app/model/Plans';
import { PlansService } from 'src/app/services/PlansServices/plans.service';

@Component({
  selector: 'app-admin-plans',
  templateUrl: './admin-plans.component.html',
  styleUrls: ['./admin-plans.component.css']
})
export class AdminPlansComponent {

  planList:Plans[]=[];
  deleteId!:number;
  search:any;
  constructor(private planService:PlansService,private cookieService: CookieService){
    this.getAllPlans();
  }
  getAllPlans(){
    this.planService.getAllPlans(JSON.parse(this.cookieService.get('userId')).userToken)
             .subscribe(  
                    (plans) =>
                       { 
                          this.planList = plans 
                      }
            );
    }

  confirmDelete(deletePlanId:number){
    this.deleteId=deletePlanId;
    let content=document.getElementById('confirmDeleteDisplay');
    content?.classList.add('active');
  }

  closeDeleteModel(){
    let content=document.getElementById('confirmDeleteDisplay');
    content?.classList.remove('active');
  }

  submitConfirmDelete(){
    this.deletePlanId(this.deleteId);
    alert('delete completed');
    let content=document.getElementById('confirmDeleteDisplay');
    content?.classList.remove('active');
  }

  deletePlanId(deleteId:number){
    this.planService.deletePlanById(JSON.parse(this.cookieService.get('userId')).userToken,deleteId)
             .subscribe(  
                    (plan) =>
                       { 
                          this.deleteId=0;
                          console.log(plan);
                          this.getAllPlans();
                      }
            );
    }

    searchPlanByName(){
      if(this.search==null || typeof this.search !== 'string') alert("invalid Input for search by name");
      else{
        this.planService.getPlansByName(JSON.parse(this.cookieService.get('userId')).userToken,this.search)
        .subscribe((planList)=>{
          console.log(planList);
          this.planList=planList;
        })
      }
  
    }
    searchPlanById(){
      const parsedNumber: number = parseInt(this.search, 10);
      if(this.search==null || isNaN(parsedNumber)) alert("invalid Input for search by Id");
      else{
        this.planService.getPlansById(this.search,JSON.parse(this.cookieService.get('userId')).userToken)
        .subscribe((plan)=>{
          console.log(plan);
          this.planList=[];
          this.planList = this.planList.concat(plan);
        })
      }
    }
}
