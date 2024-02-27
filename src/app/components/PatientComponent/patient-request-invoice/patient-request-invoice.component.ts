import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HealthCareProvider } from 'src/app/model/HealthCareProvider';
import { Invoices } from 'src/app/model/Invoices';
import { HealthCareProviderService } from 'src/app/services/HealthCareProviderServices/health-care-provider.service';
import { InvoicesService } from 'src/app/services/InvoicesServices/invoices.service';
import { PlansService } from 'src/app/services/PlansServices/plans.service';

@Component({
  selector: 'app-patient-request-invoice',
  templateUrl: './patient-request-invoice.component.html',
  styleUrls: ['./patient-request-invoice.component.css']
})
export class PatientRequestInvoiceComponent {

  currentDate: Date = new Date();
  healthCareProviderList: HealthCareProvider[] = [];

  currentHealthCareProviderId!: number;

  invoiceDueDate!: Date;
  invoiceTax!: number;
  consultingFees!: number;
  diagnosticTestFees!: number;
  diagnosticScanFees!: number;
  invoiceStatus!: string;

  


  constructor(private healthCareProviderService: HealthCareProviderService, private invoiceService: InvoicesService, private cookieService: CookieService) {
    this.getHealthCareProviders();
  }

  getHealthCareProviders() {
    this.healthCareProviderService.getAllHealthCareProvider(JSON.parse(this.cookieService.get('userId')).userToken)
      .subscribe(healthCareProviders => this.healthCareProviderList = healthCareProviders)
  }

  isDueDateInvalid(formValue: any): boolean {
    const invoiceDueDate = new Date(formValue.invoiceDueDate);
    return invoiceDueDate < this.currentDate;
  }

  openInvoiceRequest(healthCareProviderId: number) {
    this.currentHealthCareProviderId = healthCareProviderId;
    let content = document.getElementById('requestInvoiceDisplay');
    content?.classList.add('active');
  }

  submitInvoiceRequest() {
    const invoice: Invoices = {
      "invoiceId": 0,
      "invoiceDate": new Date(),
      "invoiceDueDate": this.invoiceDueDate,
      "patientName": "",
      "patientAddress": "",
      "invoiceTax": this.invoiceTax,
      "consultingFees": this.consultingFees,
      "diagnosticTestFees": this.diagnosticTestFees,
      "diagnosticScanFees": this.diagnosticScanFees,
      "calculatedAmount": 0,
      "invoiceStatus": "",
      "healthCareProviderId": this.currentHealthCareProviderId
    }
    
    this.invoiceService.addInvoice(invoice, JSON.parse(this.cookieService.get('userId')).userId, JSON.parse(this.cookieService.get('userId')).userToken)
      .subscribe((invoice) => {
        alert('Congratulations invoice request generated');
        this.invoiceDueDate = new Date();
        this.invoiceTax = 0;
        this.consultingFees = 0;
        this.diagnosticTestFees = 0;
        this.diagnosticScanFees = 0;
        this.invoiceStatus = "";

        alert('Congratulations Invoice request generated');
        let content = document.getElementById('requestInvoiceDisplay');
        content?.classList.remove('active');
      }, (error) => {
        console.error('Error occurred:', error);
        alert('Failed to generate Invoice Request');
      })
  }

  closeInvoiceRequest() {
    let content = document.getElementById('requestInvoiceDisplay');
    content?.classList.remove('active');

  }



}
