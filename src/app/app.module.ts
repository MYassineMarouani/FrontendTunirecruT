import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './Components/landing/landing.component';
import { RegistercompanyComponent } from './Components/registercompany/registercompany.component';
import { LogincompanyComponent } from './Components/logincompany/logincompany.component';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { RecruteurdashboardComponent } from './Components/recruteurdashboard/recruteurdashboard.component';
import { RecruteursidebarComponent } from './Components/recruteursidebar/recruteursidebar.component';
import { RecruteurheaderComponent } from './Components/recruteurheader/recruteurheader.component';
import { MyprofileComponent } from './Components/myprofile/myprofile.component';
import { TouslesoffresComponent } from './Components/touslesoffres/touslesoffres.component';
import { DetailsoffreComponent } from './Components/detailsoffre/detailsoffre.component';
import { AjouteroffreComponent } from './Components/ajouteroffre/ajouteroffre.component';
import { UnauthorizedComponent } from './Components/unauthorized/unauthorized.component';
import { CandidatedashboardComponent } from './Components/candidatedashboard/candidatedashboard.component';
import { StatistiquesComponent } from './Components/statistiques/statistiques.component';
import { LogincandidateComponent } from './Components/logincandidate/logincandidate.component';
import { RegistercandidateComponent } from './Components/registercandidate/registercandidate.component';
import { OffersComponent } from './Components/offers/offers.component';
import { DetailsComponent } from './Components/details/details.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { CandidateheaderComponent } from './Components/candidateheader/candidateheader.component';
import { ApplystatusComponent } from './Components/applystatus/applystatus.component';
import { AllappliersComponent } from './Components/allappliers/allappliers.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    RegistercompanyComponent,
    LogincompanyComponent,
    RecruteurdashboardComponent,
    RecruteursidebarComponent,
    RecruteurheaderComponent,
    MyprofileComponent,
    TouslesoffresComponent,
    DetailsoffreComponent,
    AjouteroffreComponent,
    UnauthorizedComponent,
    CandidatedashboardComponent,
    StatistiquesComponent,
    LogincandidateComponent,
    RegistercandidateComponent,
    OffersComponent,
    DetailsComponent,
    ProfileComponent,
    CandidateheaderComponent,
    ApplystatusComponent,
    AllappliersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    FormBuilder,
    HttpClient,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
