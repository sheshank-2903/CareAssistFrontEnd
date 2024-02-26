import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Patient } from 'src/app/model/Patient';
import { PatientService } from 'src/app/services/PatientServices/patient.service';

@Component({
  selector: 'app-health-care-provider-patient',
  templateUrl: './health-care-provider-patient.component.html',
  styleUrls: ['./health-care-provider-patient.component.css']
})
export class HealthCareProviderPatientComponent {
  patientList:Patient[]=[];

  constructor(private patientService:PatientService,private cookieService: CookieService){
    this.getAllPlans();
  }
  getAllPlans(){
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
}
