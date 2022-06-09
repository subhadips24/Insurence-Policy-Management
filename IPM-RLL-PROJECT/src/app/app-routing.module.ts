import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { ServicesIpmComponent } from './services-ipm/services-ipm.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UregComponent } from './ureg/ureg.component';
import { UserSucessLoginComponent } from './user-sucess-login/user-sucess-login.component';
import { AdminsucessloginComponent } from './adminlogin/adminsucesslogin/adminsucesslogin.component';


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
    ,component:UserSucessLoginComponent,children:[
      
    ]
  },
  {
    path:"alog/adminsucesslogin", component:AdminsucessloginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
