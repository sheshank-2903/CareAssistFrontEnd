import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HealthCareProvider } from 'src/app/model/HealthCareProvider';
import { HealthCareProviderService } from 'src/app/services/HealthCareProviderServices/health-care-provider.service';
import { PlansService } from 'src/app/services/PlansServices/plans.service';

@Component({
  selector: 'app-patient-request-invoice',
  templateUrl: './patient-request-invoice.component.html',
  styleUrls: ['./patient-request-invoice.component.css']
})
export class PatientRequestInvoiceComponent {

  currentDate: Date = new Date();
  healthCareProviderList:HealthCareProvider[]=[];

  constructor(private healthCareProviderService:HealthCareProviderService,private cookieService: CookieService){
    this.getHealthCareProviders();
  }
  
  getHealthCareProviders(){
    this.healthCareProviderService.getAllHealthCareProvider(JSON.parse(this.cookieService.get('userId')).userToken)
    .subscribe(healthCareProviders=>this.healthCareProviderList=healthCareProviders)
  }

  isDueDateInvalid(formValue: any): boolean {
    const invoiceDueDate = new Date(formValue.invoiceDueDate);
    return invoiceDueDate < this.currentDate;
  }

  openInvoiceRequest(){
    let content=document.getElementById('requestInvoiceDisplay');
    content?.classList.add('active');
  }

  submitInvoiceRequest(){
    alert('Congratulations Invoice request generated');
    let content=document.getElementById('requestInvoiceDisplay');
    content?.classList.remove('active');

  }

  closeInvoiceRequest(){
    let content=document.getElementById('requestInvoiceDisplay');
    content?.classList.remove('active');

  }



}
