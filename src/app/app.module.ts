import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule}  from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './components/AdminComponent/admin/admin.component';
import { InvoicesComponent } from './components/InvoicesComponents/invoices/invoices.component';
import { PatientComponent } from './components/PatientComponent/patient/patient.component';
import { PlansComponent } from './components/PlansComponents/plans/plans.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
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
