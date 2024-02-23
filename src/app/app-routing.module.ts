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

import { HealthCareProviderHomeComponent } from './components/HealthCareProviderComponents/health-care-provider-home/health-care-provider-home.component';
import { HealthCareProviderPatientComponent } from './components/HealthCareProviderComponents/health-care-provider-patient/health-care-provider-patient.component';
import { HealthCareProviderInvoiceHistoryComponent } from './components/HealthCareProviderComponents/health-care-provider-invoice-history/health-care-provider-invoice-history.component';
import { PatientRequestInvoiceComponent } from './components/PatientComponent/patient-request-invoice/patient-request-invoice.component';
import { PatientHomeComponent } from './components/PatientComponent/patient-profile/patient-home.component';
import { PatientPlansComponent } from './components/PatientComponent/patient-plans/patient-plans.component';
import { PatientInvoicesComponent } from './components/PatientComponent/patient-invoices/patient-invoices.component';
import { PatientPurchasedPlansComponent } from './components/PatientComponent/patient-purchased-plans/patient-purchased-plans.component';
import { PatientClaimsComponent } from './components/PatientComponent/patient-claims/patient-claims.component';
import { HealthCareProviderProfileComponent } from './components/HealthCareProviderComponents/health-care-provider-profile/health-care-provider-profile.component';
import { AdminProfileComponent } from './components/AdminComponents/admin-profile/admin-profile.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { AboutUsComponent } from './components/HomeComponents/about-us/about-us.component';
import { FeedbackComponent } from './components/HomeComponents/feedback/feedback.component';
import { HomeComponent } from './components/HomeComponents/home/home.component';


const routes: Routes = [
  {path:'admin/home',component:AdminHomeComponent},
  {path:'admin/patient',component:AdminPatientComponent},
  {path:'admin/healthCareProvider',component:AdminHealthCareProviderComponent},
  {path:'admin/insuranceCompany',component:AdminInsuranceCompanyComponent},
  {path:'admin/invoices',component:AdminInvoicesComponent},
  {path:'admin/plans',component:AdminPlansComponent},
  {path:'admin/claims',component:AdminClaimsComponent},
  {path:'admin/profile',component:AdminProfileComponent},



  {path:'healthCareProvider',component:HealthCareProviderComponent},

  {path:'insuranceCompany/home',component:InsuranceCompanyPlansComponent},
  {path:'insuranceCompany/claims',component:InsuranceCompanyClaimsComponent},
  {path:'insuranceCompany/profile',component:InsuranceCompanyProfileComponent},

  {path:'patient',component:PatientComponent},

  {path:'healthCareProvider/home',component:HealthCareProviderHomeComponent},
  {path:'healthCareProvider/patient',component:HealthCareProviderPatientComponent},
  {path:'healthCareProvider/invoiceHistory',component:HealthCareProviderInvoiceHistoryComponent},
  {path:'healthCareProvider/profile',component:HealthCareProviderProfileComponent},




  {path:'insuranceCompany',component:InsuranceCompanyComponent},




  {path:'patient/home',component:PatientHomeComponent},
  {path:'patient/requestInvoice',component:PatientRequestInvoiceComponent},
  {path:'patient/myinvoices',component:PatientInvoicesComponent},
  {path:'patient/browsePlans',component:PatientPlansComponent},
  {path:'patient/activePlans',component:PatientPurchasedPlansComponent},
  {path:'patient/claims',component:PatientClaimsComponent},



  {path:'',redirectTo:'homePage',pathMatch:'full'},

  {path:'login',component:LoginComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'aboutUs',component:AboutUsComponent},
  {path:'feedback',component:FeedbackComponent},
  {path:'homePage',component:HomeComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
