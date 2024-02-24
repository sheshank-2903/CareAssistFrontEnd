import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-health-care-provider',
  templateUrl: './admin-health-care-provider.component.html',
  styleUrls: ['./admin-health-care-provider.component.css']
})
export class AdminHealthCareProviderComponent {

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
