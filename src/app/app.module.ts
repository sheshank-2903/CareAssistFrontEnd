import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule}  from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { HealthCareProviderComponent } from './components/HealthCareProviderComponents/health-care-provider/health-care-provider.component';
import { ClaimComponent } from './components/ClaimComponents/claim/claim.component';
import { InsuranceCompanyComponent } from './components/InsuranceCompanyComponents/insurance-company/insurance-company.component';
import { AdminComponent } from './components/AdminComponents/admin/admin.component';
import { InvoicesComponent } from './components/InvoicesComponents/invoices/invoices.component';
import { PatientComponent } from './components/PatientComponent/patient/patient.component';
import { PlansComponent } from './components/PlansComponents/plans/plans.component';



@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HealthCareProviderComponent,
    ClaimComponent,
    InsuranceCompanyComponent,
    InvoicesComponent,
    PatientComponent,
    PlansComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
