import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { Invoices } from 'src/app/model/Invoices';
import { InvoicesService } from 'src/app/services/InvoicesServices/invoices.service';

@Component({
  selector: 'app-health-care-provider-home',
  templateUrl: './health-care-provider-home.component.html',
  styleUrls: ['./health-care-provider-home.component.css']
})
export class HealthCareProviderHomeComponent {
  isAddAdminModelVisible: boolean = false;
  invoiceList: Invoices[] = [];
  currentInvoiceId!:number;
  search!:number;
  constructor(private invoiceService: InvoicesService, private cookieService: CookieService) {
    this.getAllInvoice();
  }
  getAllInvoice() {
    this.invoiceService.getInvoiceByHealthCareProviderId(JSON.parse(this.cookieService.get('userId')).userToken, JSON.parse(this.cookieService.get('userId')).userId)
      .subscribe(
        (patients) => {
          this.invoiceList = patients
          console.log(this.invoiceList);
        }
      );
  }

  approveInvoiceAction(){
    this.invoiceService.updateInvoiceStatus(JSON.parse(this.cookieService.get('userId')).userToken,this.currentInvoiceId,"APPROVED")
    .subscribe((invoice)=>{
      alert("Status Approved");
      this.toggleChangeStatus(0);
    })
  }
  rejectInvoiceAction(){
    this.invoiceService.updateInvoiceStatus(JSON.parse(this.cookieService.get('userId')).userToken,this.currentInvoiceId,"REJECTED")
    .subscribe(()=>{
      alert("Status Rejected");
      this.toggleChangeStatus(0);
    })
  }

  toggleChangeStatus(currentInvoiceId:number) {
    this.currentInvoiceId=currentInvoiceId;
    let statusModel = document.getElementById("changeStatusModel"); 4
    if (this.isAddAdminModelVisible) {
      statusModel?.classList.remove("active");
      this.isAddAdminModelVisible = false;
    }
    else {
      statusModel?.classList.add("active");
      this.isAddAdminModelVisible = true;
    }
  }

  searchInvoiceById() {
    this.invoiceList = [];
    this.invoiceService.getInvoiceById(this.search, JSON.parse(this.cookieService.get('userId')).userToken).
      subscribe(data => {
        this.invoiceList = this.invoiceList.concat(data);
        console.log(this.invoiceList);
      })

  }
}
