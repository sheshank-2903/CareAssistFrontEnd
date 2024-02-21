import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AdminComponent } from './components/AdminComponents/admin/admin.component';
import { HealthCareProviderComponent } from './components/HealthCareProviderComponents/health-care-provider/health-care-provider.component';
import { InsuranceCompanyComponent } from './components/InsuranceCompanyComponents/insurance-company/insurance-company.component';
import { PatientComponent } from './components/PatientComponent/patient/patient.component';
import { AdminHomeComponent } from './components/AdminComponents/admin-home/admin-home.component';
import { AdminPatientComponent } from './components/AdminComponents/admin-patient/admin-patient.component';
import { AdminPlansComponent } from './components/AdminComponents/admin-plans/admin-plans.component';
import { AdminInvoicesComponent } from './components/AdminComponents/admin-invoices/admin-invoices.component';
import { AdminInsuranceCompanyComponent } from './components/AdminComponents/admin-insurance-company/admin-insurance-company.component';
import { AdminClaimsComponent } from './components/AdminComponents/admin-claims/admin-claims.component';
import { AdminHealthCareProviderComponent } from './components/AdminComponents/admin-health-care-provider/admin-health-care-provider.component';
import { InsuranceCompanyPlansComponent } from './components/InsuranceCompanyComponents/insurance-company-plans/insurance-company-plans.component';
import { InsuranceCompanyClaimsComponent } from './components/InsuranceCompanyComponents/insurance-company-claims/insurance-company-claims.component';
import { InsuranceCompanyProfileComponent } from './components/InsuranceCompanyComponents/insurance-company-profile/insurance-company-profile.component';

const routes: Routes = [
  {path:'admin/home',component:AdminHomeComponent},
  {path:'admin/patient',component:AdminPatientComponent},
  {path:'admin/healthCareProvider',component:AdminHealthCareProviderComponent},
  {path:'admin/insuranceCompany',component:AdminInsuranceCompanyComponent},
  {path:'admin/invoices',component:AdminInvoicesComponent},
  {path:'admin/plans',component:AdminPlansComponent},
  {path:'admin/claims',component:AdminClaimsComponent},

  {path:'healthCareProvider',component:HealthCareProviderComponent},

  {path:'insuranceCompany/home',component:InsuranceCompanyPlansComponent},
  {path:'insuranceCompany/claims',component:InsuranceCompanyClaimsComponent},
  {path:'insuranceCompany/profile',component:InsuranceCompanyProfileComponent},

  {path:'patient',component:PatientComponent},
  {path:'',redirectTo:'admin/home',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
