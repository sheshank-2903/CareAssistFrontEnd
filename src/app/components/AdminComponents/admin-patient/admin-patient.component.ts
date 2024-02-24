import { Component } from '@angular/core';
import { Patient } from 'src/app/model/Patient';
import { PatientService } from 'src/app/services/PatientServices/patient.service';

@Component({
  selector: 'app-admin-patient',
  templateUrl: './admin-patient.component.html',
  styleUrls: ['./admin-patient.component.css']
})
export class AdminPatientComponent {
  patientList:Patient[]=[];

  constructor(private patientService:PatientService){
    this.getAllProducts();
  }



  getAllProducts(){
    this.patientService.getAllPatients()
             .subscribe(  
                    (patients) =>
                       { 
                          this.patientList = patients 
                          console.log(this.patientList);
                      }
            );
    }

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
