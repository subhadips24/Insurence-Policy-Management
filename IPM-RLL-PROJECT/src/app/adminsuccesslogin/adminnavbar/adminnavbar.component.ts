import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-adminnavbar',
  templateUrl: './adminnavbar.component.html',
  styleUrls: ['./adminnavbar.component.css']
})
export class AdminnavbarComponent implements OnInit 
{

  constructor(private router:Router) { }
  adminname!:any;
  ngOnInit(): void {

      this.adminname=localStorage.getItem("adminname");
  }
  admincustomers(){


        this.router.navigate(['/admincustomers']);
  }
  dashboard(){

    this.router.navigate(['dashboard'])
  }

  adminPolicys(){
      this.router.navigate(['adminPolicys'])
  }
  adminQuery(){
    this.router.navigate(['adminQuery'])
  }
  adminunknown(){
    this.router.navigate(['adminunknown'])
  }
  newadmin(){

    this.router.navigate(["newadmin"]);
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
