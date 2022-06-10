import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../classfile/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserviceService {

  constructor(private http:HttpClient) { }

    registrionProcess(user:User):Observable<Object>{
      console.log(user)
    return this.http.post("http://localhost:8085/addcustomer",user);
    }
    UpdtaeUser(user:User,emial:string){

      return this.http.put("http://localhost:8085/updatecustomer/"+emial+"",user)
    }
}
