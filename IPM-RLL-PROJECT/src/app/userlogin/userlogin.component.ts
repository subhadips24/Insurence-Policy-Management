import { Component, OnInit } from '@angular/core';
import { User } from '../classfile/user';

import { RouterModule, Router } from '@angular/router';
import { UserLoginService } from '../services/loginservice/user-login.service';
import { ServicesIpmComponent } from '../services-ipm/services-ipm.component';
import { AppComponent } from '../app.component';
import { HttpStatusCode } from '@angular/common/http';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {


  user:User=new User();
 public udata={};

  constructor(private userservice:UserLoginService, private route:Router){ }

  ngOnInit(): void {

  }

  x:any;

  userlogin()
  {

     this.userservice.loginUser(this.user).subscribe(dta=>{
        this.udata=dta;
        
        
        this.user.cage=dta.cage;
        this.user.cid=dta.cid;
        this.user.caddress=dta.caddress;
        this.user.cgender=dta.cgender;
      
        this.user.cphno=dta.cphno;
      

        console.log(this.user);
         

        alert("Successfuly login");
        this.route.navigate(['ulog/sucessLogin']);
       
       
     },error=>{
        alert("Chek your Credencial Please")
        
        this.route.navigate(['/ulog']);  
     });

   
    
      
   }

      

      // if(this.x !="false")
      // {
      //   alert("You have succcesfully Login");
      //   this.userservice.afterLoginData(this.user).subscribe((dta)=>{
      //     console.warn(dta);
          
      //   })

      // }else{
      //   alert("cheeck your id and password")
      // }

      
        

    
  }


