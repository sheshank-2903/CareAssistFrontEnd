import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule}  from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './components/AdminComponents/admin/admin.component';
import { HealthCareProviderComponent } from './components/HealthCareProviderComponents/health-care-provider/health-care-provider.component';
import { ClaimComponent } from './components/ClaimComponents/claim/claim.component';
import { InsuranceCompanyComponent } from './components/InsuranceCompanyComponents/insurance-company/insurance-company.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HealthCareProviderComponent,
    ClaimComponent,
    InsuranceCompanyComponent
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
