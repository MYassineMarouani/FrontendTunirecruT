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
    AjouteroffreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    FormBuilder,
    HttpClient,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
