import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AjouteroffreComponent } from './Components/ajouteroffre/ajouteroffre.component';
import { AllappliersComponent } from './Components/allappliers/allappliers.component';
import { ApplystatusComponent } from './Components/applystatus/applystatus.component';
import { CandidatedashboardComponent } from './Components/candidatedashboard/candidatedashboard.component';
import { DetailsComponent } from './Components/details/details.component';
import { DetailsoffreComponent } from './Components/detailsoffre/detailsoffre.component';
import { EntermailComponent } from './Components/entermail/entermail.component';
import { LandingComponent } from './Components/landing/landing.component';
import { LogincandidateComponent } from './Components/logincandidate/logincandidate.component';
import { LogincompanyComponent } from './Components/logincompany/logincompany.component';
import { MyprofileComponent } from './Components/myprofile/myprofile.component';
import { OffersComponent } from './Components/offers/offers.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { RecruteurdashboardComponent } from './Components/recruteurdashboard/recruteurdashboard.component';
import { RegistercandidateComponent } from './Components/registercandidate/registercandidate.component';
import { RegistercompanyComponent } from './Components/registercompany/registercompany.component';
import { ResetpasswordComponent } from './Components/resetpassword/resetpassword.component';
import { StatistiquesComponent } from './Components/statistiques/statistiques.component';
import { TouslesoffresComponent } from './Components/touslesoffres/touslesoffres.component';


const routes: Routes = [
  { path: '' , redirectTo: '/Welcome' , pathMatch:'full' },
  {path:'Welcome',component:LandingComponent},
  { path: 'reset-password/:token', component: ResetpasswordComponent },
  {path:'enteryouremail',component:EntermailComponent},
  {path:'RegisterCompany',component:RegistercompanyComponent},
  {path:'LoginCompany',component:LogincompanyComponent},
  {path:'LoginCandidate',component:LogincandidateComponent},
  {path:'RegisterCandidate',component:RegistercandidateComponent},
  {path:'Recruteurdashboard',component:RecruteurdashboardComponent , children : [
    {path:'myprofile',component:MyprofileComponent},
    {path:'touslesoffres',component:TouslesoffresComponent},
    {path:'',component:TouslesoffresComponent},
    {path:'addanoffer',component:AjouteroffreComponent},
    {path:'detailsoffer/:_id',component:DetailsoffreComponent},
    {path:'statistics',component:StatistiquesComponent},
    {path:'allappliers/:_id',component:AllappliersComponent},
  ]
},
  {path:'Candidatedashboard',component:CandidatedashboardComponent  , children : [
    {path:'',component:OffersComponent},
    {path:'profile',component:ProfileComponent},
    {path:'details',component:DetailsComponent},
    {path:'offers',component:OffersComponent},
    {path:'Applystatus',component:ApplystatusComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
