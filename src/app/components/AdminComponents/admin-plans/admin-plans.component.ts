import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-plans',
  templateUrl: './admin-plans.component.html',
  styleUrls: ['./admin-plans.component.css']
})
export class AdminPlansComponent {
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
