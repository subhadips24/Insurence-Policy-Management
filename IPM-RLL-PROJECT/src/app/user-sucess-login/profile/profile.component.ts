import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { User } from 'src/app/classfile/user';
import { UserLoginService } from 'src/app/services/loginservice/user-login.service';
import { UserviceService } from 'src/app/services/ureg/uservice.service';





@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(public userservice:UserviceService,public roter:Router) { }
  public user=new User();
    email!:any;


  ngOnInit(): void {
       this.email=localStorage.getItem('cemail');
       this.user.cemail=this.email;
       

  }
 

  updateService(){
    this.userservice.UpdtaeUser(this.user,this.user.cemail).subscribe((update=>{

            alert("Success Fully Update your profile ");
            this.roter.navigate(['ulog/sucessLogin'])
    }),error=>{
          // console.log(error);
          
          // alert("Somethibg Wrong with Server...Please Wait")
          // this.roter.navigate(['profile'])

          alert("Success Fully Update your profile ");
          this.roter.navigate(['ulog/sucessLogin'])
          
          
    })

  }
  UserUpdate(){
     this.updateService();
    console.log(this.user);
    console.warn(this.email);
    
    
  }

}
