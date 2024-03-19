import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Invoices } from 'src/app/model/Invoices';
import { InvoicesService } from 'src/app/services/InvoicesServices/invoices.service';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { Alignment, Margins } from 'pdfmake/interfaces';
import { style } from '@angular/animations';
import { PatientComponent } from '../patient/patient.component';

(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-patient-invoices',
  templateUrl: './patient-invoices.component.html',
  styleUrls: ['./patient-invoices.component.css']
})
export class PatientInvoicesComponent {

  invoiceList:Invoices[]=[];
  search!:any;

  constructor(private invoiceService:InvoicesService,private cookieService: CookieService){
    PatientComponent.setSelectedTab("myinvoices");
    this.getInvoicesByPatientId();
  }

  getInvoicesByPatientId(){
    this.search=undefined;
    this.invoiceService.getInvoiceByPatientId(JSON.parse(this.cookieService.get('userId')).userId,JSON.parse(this.cookieService.get('userId')).userToken)
    .subscribe(invoices=>this.invoiceList=invoices,error=> alert("Failed to get Invoice"))

  }

  searchInvoiceById() {
    this.invoiceList = [];
    this.invoiceService.getInvoiceById(this.search, JSON.parse(this.cookieService.get('userId')).userToken).
      subscribe(data => {
        this.invoiceList = this.invoiceList.concat(data);
      })

  }

  getStatusColor(status: string): string {
    switch (status) {
      case 'PENDING':
        return 'blue';
      case 'APPROVED':
        return 'green';
      case 'REJECTED':
        return 'red';
      default:
        return 'black';
    }
  }

  downloadInvoiceAsPDF(invoiceId: number) {
    const downloadInvoiceData=this.invoiceList.find(invoice => invoice.invoiceId === invoiceId);
    const documentDefinition = {
      content: [
        { text: 'INVOICE' ,style: 'header'},
        {
          table: {
            body: [
              [{text:'Invoice ID',style:'subheader'} , {text:''+downloadInvoiceData?.invoiceId,style:'subheaderValue'}],
              [{text:'Patient Name',style:'subheader'}, {text:''+  downloadInvoiceData?.patientName, style:'subheaderValue'}],
              [{text:'Invoice Date',style:'subheader'}, {text:''+downloadInvoiceData?.invoiceDate , style:'subheaderValue'}],
              [{text:'Invoice Due Date',style:'subheader'},{text: ''+ downloadInvoiceData?.invoiceDueDate, styles:'subheaderValue'}],
              [{text:'Patient Address',style:'subheader'},{text: ''+ downloadInvoiceData?.patientAddress, styles:'subheaderValue'}],
              [{text:'Invoice Tax',style:'subheader'}, {text:''+downloadInvoiceData?.invoiceTax+'%', style:'subheaderValue'}],
              [{text:'Consulting Fees',style:'subheader'},{text: ''+downloadInvoiceData?.consultingFees+'/-', style:'subheaderValue'}],
              [{text:'Diagnostic Test Fees',style:'subheader'},{text: ''+downloadInvoiceData?.diagnosticTestFees+'/-', style:'subheaderValue'}],
              [{text:'Diagnostic Scan Fees',style:'subheader'}, {text:''+ downloadInvoiceData?.diagnosticScanFees+'/-', style:'subheaderValue'}]
            ]
          }
        },
      ],
      styles: {
        header: {
          fontSize: 24,
          bold: true,
          marginTop:10,
          marginBottom:10,
          alignment: 'center' as Alignment,
        },
        subheader: {
          fontSize: 12,
          bold: true,
        },
        subheaderValue: {
          fontSize: 12,
        }
      }
    };
    const pdfDocGenerator = pdfMake.createPdf(documentDefinition);
    pdfDocGenerator.download('invoice.pdf');
  }



}
