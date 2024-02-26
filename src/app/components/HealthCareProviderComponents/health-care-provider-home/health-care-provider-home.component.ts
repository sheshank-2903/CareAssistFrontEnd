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
  isAddAdminModelVisible: boolean=false;
  invoiceList:Invoices[]=[];

  constructor(private invoiceService:InvoicesService,private cookieService: CookieService){
    this.getAllInvoice();
  }
  getAllInvoice(){
    this.invoiceService.getInvoiceByHealthCareProviderId(JSON.parse(this.cookieService.get('userId')).userToken,JSON.parse(this.cookieService.get('userId')).userId)
             .subscribe(  
                    (patients) =>
                       { 
                          this.invoiceList = patients 
                          console.log(this.invoiceList);
                      }
            );
    }

toggleChangeStatus() {
 let statusModel=document.getElementById("changeStatusModel");4
 if(this.isAddAdminModelVisible){
    statusModel?.classList.remove("active");
   console.log("Remove")
   this.isAddAdminModelVisible=false;
 }
 else{
    statusModel?.classList.add("active");
   console.log("show")
   this.isAddAdminModelVisible=true;
 }
}
}
