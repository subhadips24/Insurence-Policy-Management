import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navlogin',
  templateUrl: './navlogin.component.html',
  styleUrls: ['./navlogin.component.css']
})
export class NavloginComponent implements OnInit {
  public cname!:any;
  public cemail!:any;
  constructor(public router:Router) { }

  ngOnInit(): void {

    this.cname=localStorage.getItem('cname');
     this.cemail=localStorage.getItem('cemail')

     if(this.cname==null){
       this.router.navigate(['ulog'])
     }
     console.log(this.cname);
     
  }


  profile(){
    this.router.navigate(['profile'])
  }
  history(){
    this.router.navigate(['history'])
  }
  applypolicie(){
    this.router.navigate(['policies'])
  }
  queries(){
    this.router.navigate(['queries'])
  }

  policies(){
    this.router.navigate(['policies'])
  }
  dashboard()  {
      this.router.navigate(['ulog/sucessLogin'])
  }
  logout(){
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Logout SuccessFully 🏠 ',
      
      showConfirmButton: false,
      timer: 8000
    })
    localStorage.clear();
    this.router.navigate([""])
  }



}
