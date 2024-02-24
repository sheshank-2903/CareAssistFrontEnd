import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-insurance-company',
  templateUrl: './admin-insurance-company.component.html',
  styleUrls: ['./admin-insurance-company.component.css']
})
export class AdminInsuranceCompanyComponent {
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
