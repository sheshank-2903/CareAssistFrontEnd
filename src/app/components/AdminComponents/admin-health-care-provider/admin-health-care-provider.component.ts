import { Component } from '@angular/core';
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
}
