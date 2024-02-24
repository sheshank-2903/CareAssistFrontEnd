import { Component } from '@angular/core';

@Component({
  selector: 'app-patient-request-invoice',
  templateUrl: './patient-request-invoice.component.html',
  styleUrls: ['./patient-request-invoice.component.css']
})
export class PatientRequestInvoiceComponent {

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
