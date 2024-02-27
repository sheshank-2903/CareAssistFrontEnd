import { Component } from '@angular/core';
import { select } from '@ngrx/store';
import { CookieService } from 'ngx-cookie-service';
import { Patient } from 'src/app/model/Patient';
import { PatientService } from 'src/app/services/PatientServices/patient.service';

@Component({
  selector: 'app-admin-patient',
  templateUrl: './admin-patient.component.html',
  styleUrls: ['./admin-patient.component.css']
})
export class AdminPatientComponent {
  patientList: Patient[] = [];
  deleteId!: number;
  search: any;

  constructor(private patientService: PatientService, private cookieService: CookieService) {
    this.getAllPatients();
  }
  getAllPatients() {
    this.patientService.getAllPatients(JSON.parse(this.cookieService.get('userId')).userToken)
      .subscribe(
        (patients) => {
          this.patientList = patients
          console.log(this.patientList);
          console.log('Type of patientList:', typeof this.patientList);
        }
      );
  }

  confirmDelete(deletePatientId: number) {
    this.deleteId = deletePatientId;
    let content = document.getElementById('confirmDeleteDisplay');
    content?.classList.add('active');
  }

  closeDeleteModel() {
    let content = document.getElementById('confirmDeleteDisplay');
    content?.classList.remove('active');
  }

  submitConfirmDelete() {
    this.deletePatinetId(this.deleteId);
    alert('Delete completed');
    let content = document.getElementById('confirmDeleteDisplay');
    content?.classList.remove('active');
  }

  deletePatinetId(deleteId: number) {
    this.patientService.deletePatientById(JSON.parse(this.cookieService.get('userId')).userToken, deleteId)
      .subscribe(
        (admin) => {
          this.deleteId != undefined;
          console.log(admin);
          this.getAllPatients();
        }
      );
  }

  searchPatientByName(){
    if(this.search==null || typeof this.search !== 'string') alert("invalid Input for search by name");
    else{
      this.patientService.getPatientByName(this.search,JSON.parse(this.cookieService.get('userId')).userToken)
      .subscribe((patientList)=>{
        this.patientList=patientList;
      })
    }

  }
  searchPatientById(){
    const parsedNumber: number = parseInt(this.search, 10);
    if(this.search==null || isNaN(parsedNumber)) alert("invalid Input for search by Id");
    else{
      this.patientService.getPatientById(this.search,JSON.parse(this.cookieService.get('userId')).userToken)
      .subscribe((patient)=>{
        console.log(patient);
        this.patientList=[];
        this.patientList = this.patientList.concat(patient);
      })
    }

  }

}
