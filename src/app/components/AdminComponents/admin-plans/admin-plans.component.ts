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
        this.planList=[];
        this.planService.getPlansById(this.search,JSON.parse(this.cookieService.get('userId')).userToken)
        .subscribe((plan)=>{
          console.log(plan);
          
          this.planList = this.planList.concat(plan);
        })
      }
    }
}
