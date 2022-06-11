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
import { AdminPolicysComponent } from './adminsuccesslogin/admin-policys/admin-policys.component';
import { AdminQueryComponent } from './adminsuccesslogin/admin-query/admin-query.component';
import { AdminUnknownCustomerComponent } from './adminsuccesslogin/admin-unknown-customer/admin-unknown-customer.component';
import { AddAdminByAdminComponent } from './adminsuccesslogin/add-admin-by-admin/add-admin-by-admin.component';
import { AddnewadminComponent } from './adminsuccesslogin/addAdminByAdmin/addnewadmin/addnewadmin.component';
import { ViewadmisComponent } from './adminsuccesslogin/addAdminByAdmin/viewadmis/viewadmis.component';
import { ReplyComponent } from './adminsuccesslogin/admin-query/reply/reply.component';



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


          {path:"admincustomers", component:AdmincustomersComponent} ,
          {path:"adminPolicys", component:AdminPolicysComponent} ,
          {path:"adminQuery", component:AdminQueryComponent},
          {path:"adminunknown",component:AdminUnknownCustomerComponent},

//Admin End

   {
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
  },
  {
    path:"newadmin", component:AddAdminByAdminComponent
  },
  {
    path:"addadmin",component:AddnewadminComponent  },
    {
      path:"viewadmins" ,component:ViewadmisComponent
    },
    {
        path:"adminQuery/reply" , component:ReplyComponent

    }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
