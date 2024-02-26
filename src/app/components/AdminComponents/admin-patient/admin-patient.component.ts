import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Patient } from 'src/app/model/Patient';
import { PatientService } from 'src/app/services/PatientServices/patient.service';

@Component({
  selector: 'app-admin-patient',
  templateUrl: './admin-patient.component.html',
  styleUrls: ['./admin-patient.component.css']
})
export class AdminPatientComponent {
  patientList:Patient[]=[];
  deleteId!:number;

  constructor(private patientService:PatientService,private cookieService: CookieService){
    this.getAllPatients();
  }
  getAllPatients(){
    this.patientService.getAllPatients(JSON.parse(this.cookieService.get('userId')).userToken)
             .subscribe(  
                    (patients) =>
                       { 
                          this.patientList = patients 
                          console.log(this.patientList);
                          console.log('Type of patientList:', typeof this.patientList);
                      }
            );
    }
    
    confirmDelete(deletePatientId:number){
      this.deleteId=deletePatientId;
      let content=document.getElementById('confirmDeleteDisplay');
      content?.classList.add('active');
    }
  
    closeDeleteModel(){
      let content=document.getElementById('confirmDeleteDisplay');
      content?.classList.remove('active');
    }
  
    submitConfirmDelete(){
      this.deletePatinetId(this.deleteId);
      alert('Delete completed');
      let content=document.getElementById('confirmDeleteDisplay');
      content?.classList.remove('active');
    }

    deletePatinetId(deleteId:number){
      this.patientService.deletePatientById(JSON.parse(this.cookieService.get('userId')).userToken,deleteId)
               .subscribe(  
                      (admin) =>
                         { 
                            this.deleteId!=undefined;
                            console.log(admin);
                            this.getAllPatients();
                        }
              );
      }
}
