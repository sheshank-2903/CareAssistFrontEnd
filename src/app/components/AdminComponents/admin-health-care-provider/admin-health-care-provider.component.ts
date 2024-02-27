import { Component, HostListener } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { HealthCareProvider } from 'src/app/model/HealthCareProvider';
import { HealthCareProviderService } from 'src/app/services/HealthCareProviderServices/health-care-provider.service';

@Component({
  selector: 'app-admin-health-care-provider',
  templateUrl: './admin-health-care-provider.component.html',
  styleUrls: ['./admin-health-care-provider.component.css']
})
export class AdminHealthCareProviderComponent {
  healthCareProviderList: HealthCareProvider[] = [];
  deleteId!: number;
  search:any;
  constructor(private healthCareProviderService: HealthCareProviderService, private cookieService: CookieService) {
    this.getAllHealthCareProvider();
  }

  getAllHealthCareProvider() {
    this.healthCareProviderService.getAllHealthCareProvider(JSON.parse(this.cookieService.get('userId')).userToken)
      .subscribe(
        (healthCareProviders) => {
          this.healthCareProviderList = healthCareProviders
          console.log(this.healthCareProviderList);

        }
      );
  }

  confirmDelete(deleteHealthCareProviderID: number) {
    this.deleteId = deleteHealthCareProviderID
    let content = document.getElementById('confirmDeleteDisplay');
    content?.classList.add('active');
  }

  closeDeleteModel() {
    let content = document.getElementById('confirmDeleteDisplay');
    content?.classList.remove('active');
  }

  submitConfirmDelete() {
    this.deleteHealthcareProvider(this.deleteId);
    alert("delete Complete");
    let content = document.getElementById('confirmDeleteDisplay');
    content?.classList.remove('active');
  }

  deleteHealthcareProvider(deleteId: number) {
    this.healthCareProviderService.deleteHealthCareProviderById(JSON.parse(this.cookieService.get('userId')).userToken, deleteId)
      .subscribe(
        (admin) => {
          this.deleteId = 0;
          console.log(admin);
          this.getAllHealthCareProvider();
        }
      );
  }

  searchHealthCareProviderByName(){
    if(this.search==null || typeof this.search !== 'string') alert("invalid Input for search by name");
    else{
      this.healthCareProviderService.getHealthCareProviderByName(this.search,JSON.parse(this.cookieService.get('userId')).userToken)
      .subscribe((healthCareProviderList)=>{
        console.log(healthCareProviderList);
        this.healthCareProviderList=healthCareProviderList;
      })
    }

  }
  searchHealthCareProviderById(){
    const parsedNumber: number = parseInt(this.search, 10);
    if(this.search==null || isNaN(parsedNumber)) alert("invalid Input for search by Id");
    else{
      this.healthCareProviderService.getHealthCareProviderById(JSON.parse(this.cookieService.get('userId')).userToken,this.search)
      .subscribe((healthcareprovider)=>{
        console.log(healthcareprovider);
        this.healthCareProviderList=[];
        this.healthCareProviderList = this.healthCareProviderList.concat(healthcareprovider);
      })
    }

  }

}
