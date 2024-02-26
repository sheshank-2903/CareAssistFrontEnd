import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { InsuranceCompany } from 'src/app/model/InsuranceCompany';
import { InsuranceCompanyService } from 'src/app/services/InsuranceCompanyServices/insurance-company.service';

@Component({
  selector: 'app-admin-insurance-company',
  templateUrl: './admin-insurance-company.component.html',
  styleUrls: ['./admin-insurance-company.component.css']
})
export class AdminInsuranceCompanyComponent {
  insuranceCompanyList:InsuranceCompany[]=[];
  deleteId!:number;

  constructor(private insuranceCompanyService:InsuranceCompanyService,private cookieService: CookieService){
    this.getAllInsuranceCompany();
  }
  getAllInsuranceCompany(){
    this.insuranceCompanyService.getAllInsuranceCompany(JSON.parse(this.cookieService.get('userId')).userToken)
             .subscribe(  
                    (insuranceCompany) =>
                       { 
                          this.insuranceCompanyList = insuranceCompany;
                          console.log(this.insuranceCompanyList);
                      }
            );
    }

  confirmDelete(deleteInsuranceCompanyId:number){
    this.deleteId=deleteInsuranceCompanyId;
    let content=document.getElementById('confirmDeleteDisplay');
    content?.classList.add('active');
  }

  closeDeleteModel(){
    let content=document.getElementById('confirmDeleteDisplay');
    content?.classList.remove('active');
  }

  submitConfirmDelete(){
    this.deleteInsuranceCompanyId(this.deleteId);
    alert('Delete completed');
    let content=document.getElementById('confirmDeleteDisplay');
    content?.classList.remove('active');
  }

  deleteInsuranceCompanyId(deleteId:number){
    this.insuranceCompanyService.deleteInsuranceCompanyById(JSON.parse(this.cookieService.get('userId')).userToken,deleteId)
             .subscribe(  
                    (insuranceCompany) =>
                       { 
                          this.deleteId=0;
                          console.log(insuranceCompany);
                          this.getAllInsuranceCompany();
                      }
            );
    }
}
