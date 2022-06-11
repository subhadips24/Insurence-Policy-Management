import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../classfile/user';
import { UserviceService } from '../services/ureg/uservice.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-ureg',
  templateUrl: './ureg.component.html',
  styleUrls: ['./ureg.component.css'],
})
export class UregComponent implements OnInit {
  user: User = new User();
  constructor(private reService:UserviceService,private  route: Router) {}

  ngOnInit(): void {}

  UserReg() {


        if(this.user.caddress===undefined || this.user.cage===undefined|| this.user.cemail===undefined||this.user.cgender===undefined||this.user.cname===undefined|| this.user.cpassword===undefined||this.user.cphno===undefined){
      
            console.warn(this.user);
            
          Swal.fire({
            icon: 'error',
            title: 'Oops...😠',
            text: "Please Fill Up Every Field!!!!!✍️",
          
          })

         
        }else{
                
              this.reService.registrionProcess(this.user).subscribe((data=>{
                  alert("You Have Sucessfully Register")
                  this.route.navigate(["/ulog"]);
              }),error=>{
                    Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'You Have Alredy Account!! 👍',
            
          })
                this.route.navigate(["/ulog"]);
              });
      
      }
       //console.log("Hit it");
       
  }
}
