import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { User } from 'src/app/classfile/user';
import { UserLoginService } from 'src/app/services/loginservice/user-login.service';
import { UserviceService } from 'src/app/services/ureg/uservice.service';
import Swal from 'sweetalert2';





@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(public userservice:UserviceService,public roter:Router, private loginService:UserLoginService) { }
  public user=new User();
    email!:any;
    pass!:any;


  ngOnInit(): void {
       this.email=localStorage.getItem('cemail');
       this.user.cemail=this.email;
       this.pass=localStorage.getItem("cpassword");
      this.user.cpassword=this.pass;
      this.loginService.afterLoginData(this.user).subscribe((responce)=>{

          this.user=responce;
          this.user.cage=responce.cage;

      })


       

  }
 

  updateService(){


    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {

          //Send Data
          this.userservice.UpdtaeUser(this.user,this.email).subscribe((update=>{

          
              
            //this.roter.navigate(['ulog'])
    }),error=>{
          // console.log(error);
          
          // alert("Somethibg Wrong with Server...Please Wait")
          // this.roter.navigate(['profile'])

          console.warn(this.user.cemail);
          this.roter.navigate(['ulog'])
          
          
    })

      //Show Alerrt

        Swal.fire('Saved!', '', 'success')

      } else if (result.isDenied) {

        Swal.fire('Changes are not saved', '', 'info')
      }
    })




    

  }
  UserUpdate(){
     this.updateService();
    console.log(this.user);
    console.warn(this.email);
    
    
  }

}
