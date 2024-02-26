import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Invoices } from 'src/app/model/Invoices';
import { InvoicesService } from 'src/app/services/InvoicesServices/invoices.service';

@Component({
  selector: 'app-patient-invoices',
  templateUrl: './patient-invoices.component.html',
  styleUrls: ['./patient-invoices.component.css']
})
export class PatientInvoicesComponent {

  invoiceList:Invoices[]=[];

  constructor(private invoiceService:InvoicesService,private cookieService: CookieService){

    this.getInvoicesByPatientId();
  }

  getInvoicesByPatientId(){
    this.invoiceService.getInvoiceByPatientId(JSON.parse(this.cookieService.get('userId')).userId,JSON.parse(this.cookieService.get('userId')).userToken)
    .subscribe(invoices=>this.invoiceList=invoices)

  }

}
