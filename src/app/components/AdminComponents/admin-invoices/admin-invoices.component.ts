import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Invoices } from 'src/app/model/Invoices';
import { InvoicesService } from 'src/app/services/InvoicesServices/invoices.service';

@Component({
  selector: 'app-admin-invoices',
  templateUrl: './admin-invoices.component.html',
  styleUrls: ['./admin-invoices.component.css']
})
export class AdminInvoicesComponent {

  invoiceList:Invoices[]=[];
  deleteId!:number;

  constructor(private invoiceService:InvoicesService,private cookieService: CookieService){
    this.getAllInvoice();
  }
  getAllInvoice(){
    this.invoiceService.getAllInvoices(JSON.parse(this.cookieService.get('userId')).userToken)
             .subscribe(  
                    (patients) =>
                       { 
                          this.invoiceList = patients 
                          console.log(this.invoiceList);
                      }
            );
    }

  confirmDelete(deleteInvoiceId:number){
    this.deleteId=deleteInvoiceId;
    let content=document.getElementById('confirmDeleteDisplay');
    content?.classList.add('active');
  }

  closeDeleteModel(){
    let content=document.getElementById('confirmDeleteDisplay');
    content?.classList.remove('active');
  }

  submitConfirmDelete(){
    this.deleteInvoiceId(this.deleteId);
    alert('Delete completed');
    let content=document.getElementById('confirmDeleteDisplay');
    content?.classList.remove('active');
  }

  deleteInvoiceId(deleteId:number){
    this.invoiceService.deleteInvoiceById(JSON.parse(this.cookieService.get('userId')).userToken,deleteId)
             .subscribe(  
                    (invoice) =>
                       { 
                          this.deleteId=0;
                          console.log(invoice);
                          this.getAllInvoice();
                      }
            );
    }
}
