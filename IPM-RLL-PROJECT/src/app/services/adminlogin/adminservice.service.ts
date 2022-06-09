import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Admin } from '../../classfile/admin';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

// admin:Admin;
export class AdminserviceService {

  constructor( private http:HttpClient) { }

  loginAdmin(admin:Admin):Observable<Admin>{
    
    console.log(admin.adminpassword,admin.adminemail);
   
    //adminshowdata//
    return   this.http.get<Admin>("http://localhost:8085/adminshowdata/"+admin.adminemail+"/"+admin.adminpassword);
    
  }
  afterLoginData(admin:Admin):Observable<Admin>{

    return this.http.get<Admin>("http://localhost:8085/showdata/"+admin.adminemail+"/"+admin.adminpassword);
  }
}
