import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApplyPolicie } from '../../classfile/ApplyPolicies/apply-policie';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApplyPoliciesServiceService {
 
  constructor(public HttpClient:HttpClient) { }

    appPolicy( cu:ApplyPolicie):Observable<Object>{


      return this.HttpClient.post("http://localhost:8085/applypolicy",cu);


    }
}
