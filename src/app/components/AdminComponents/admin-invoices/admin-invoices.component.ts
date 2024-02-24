import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-invoices',
  templateUrl: './admin-invoices.component.html',
  styleUrls: ['./admin-invoices.component.css']
})
export class AdminInvoicesComponent {
  confirmDelete(){
    let content=document.getElementById('confirmDeleteDisplay');
    content?.classList.add('active');
  }

  closeDeleteModel(){
    let content=document.getElementById('confirmDeleteDisplay');
    content?.classList.remove('active');
  }

  submitConfirmDelete(){
    alert('Congratulations Purchase completed');
    let content=document.getElementById('confirmDeleteDisplay');
    content?.classList.remove('active');
  }
}
