import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { ServicesIpmComponent } from './services-ipm/services-ipm.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UregComponent } from './ureg/ureg.component';
import { UserSucessLoginComponent } from './user-sucess-login/user-sucess-login.component';

import { DashboardComponent } from './user-sucess-login/dashboard/dashboard.component';
import { ProfileComponent } from './user-sucess-login/profile/profile.component';
import { PoliciesComponent } from './user-sucess-login/policies/policies.component';
import { HistoryComponent } from './user-sucess-login/history/history.component';
import { QuestionsComponent } from './user-sucess-login/questions/questions.component';
import { AdmindashboardComponent } from './adminsuccesslogin/admindashboard/admindashboard.component';
import { AdmincustomersComponent } from './adminsuccesslogin/admincustomers/admincustomers.component';



const routes: Routes =[
  {
    path:'',
    
   
    
    children:[
     {
       path:"" , component:HomeComponent
     } ,

      {

        path:'aboutus',
        component:AboutComponent
      },
      {
        path:'services',
        component:ServicesIpmComponent
      },
      {
        path:'contact',
        component:ContactusComponent
      }

    ]
   }
  //  ,
  //  {
  //    path:'aboutus',
  //    component:AboutComponent
  //  },
  // {
  //   path:'services',
  //   component:ServicesIpmComponent
  // },
  // {
  //   path:'contact',
  //   component:ContactusComponent
  // }
  ,
  {
    path:'ulog',
    component:UserloginComponent
  }
  ,
  {
    path:'alog',
    component:AdminloginComponent
  },

  {
    path:"ureg",
    component:UregComponent
    ,pathMatch:'full'
  },
  {
      path:"ulog/sucessLogin"
          ,component:DashboardComponent
        // ,children:[

          
        //   {
        //     path:"ulog/sucessLogin"
        //     ,component:DashboardComponent
        //   },
        //   {
        //     path:"profile",
        //     component:ProfileComponent
        //   },
        //   {
        //     path:"policies", component:PoliciesComponent
        
        //   },
        //   {
        //       path:"history",component:HistoryComponent
        //   },
        //   {
        //       path:"queries" ,component:QuestionsComponent
        //   }
        // ]
    
  },
  {
    path:"alog/adminsucesslogin",component:AdmindashboardComponent
  },
 //admin start
 {
  path:"dashboard" ,
  component:AdmindashboardComponent
},


          {path:"admincustomers", component:AdmincustomersComponent}  

//Admin End

   ,{
    path:"dashboard"
    ,component:DashboardComponent
  },
  {
    path:"profile",
    component:ProfileComponent
  },
  {
    path:"policies", component:PoliciesComponent

  },
  {
      path:"history",component:HistoryComponent
  },
  {
      path:"queries" ,component:QuestionsComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
