import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutComponent } from './about/about.component';

import { ServicesIpmComponent } from './services-ipm/services-ipm.component';
import { FooterComponent } from './footer/footer.component';
import { UserloginComponent } from './userlogin/userlogin.component';

import { UregComponent } from './ureg/ureg.component';
import {  FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserSucessLoginComponent } from './user-sucess-login/user-sucess-login.component';




import { DashboardComponent } from './user-sucess-login/dashboard/dashboard.component';
import { ProfileComponent } from './user-sucess-login/profile/profile.component';
import { NavloginComponent } from './user-sucess-login/navlogin/navlogin.component';
import { QuestionsComponent } from './user-sucess-login/questions/questions.component';
import { PoliciesComponent } from './user-sucess-login/policies/policies.component';
import { HistoryComponent } from './user-sucess-login/history/history.component';
import { ApplypolicieComponent } from './applypolicie/applypolicie.component';

import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminnavbarComponent } from './adminsuccesslogin/adminnavbar/adminnavbar.component';
import { AdmindashboardComponent } from './adminsuccesslogin/admindashboard/admindashboard.component';
import { AdmincustomersComponent } from './adminsuccesslogin/admincustomers/admincustomers.component';




@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    ContactusComponent,
    AboutComponent,
    ServicesIpmComponent,
    FooterComponent,
    UserloginComponent,

    UregComponent,
    UserSucessLoginComponent,
    AdminloginComponent,
    DashboardComponent,
    NavloginComponent,
    ProfileComponent,
    QuestionsComponent,
    ApplypolicieComponent,
    PoliciesComponent,
    HistoryComponent,
   
    AdmindashboardComponent,
    AdminnavbarComponent,
    AdmincustomersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
