import { Component, OnInit } from '@angular/core';

import { AdminloginComponent } from '../adminlogin.component';
import { Admin } from '../../classfile/admin';
import { AdminserviceService } from '../../services/adminlogin/adminservice.service';
import { KeyValuePipe } from '@angular/common';
import { __values } from 'tslib';

@Component({
  selector: 'app-adminsucesslogin',
  templateUrl: './adminsucesslogin.component.html',
  styleUrls: ['./adminsucesslogin.component.css']
})
export class AdminsucessloginComponent implements OnInit
 {

  admin=new Admin();
  public admineamil!:string;
  public adminpassword!:string;
  public adminname!:string;
  constructor(  ) {}
  ngOnInit(): void {
       
        
     
      
      
        this.admineamil=JSON.stringify(localStorage.getItem('adminemail'));
        this.adminpassword=JSON.stringify(localStorage.getItem('adminpassword'));
        this.adminname=JSON.stringify(localStorage.getItem('adminname'));

      
      
    
  
  }
    
  
 


}
