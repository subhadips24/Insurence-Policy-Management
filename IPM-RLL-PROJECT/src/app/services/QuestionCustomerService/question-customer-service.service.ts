import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { QueryCustomer } from 'src/app/classfile/QueryByCustomer/query-customer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionCustomerServiceService {
 
  constructor(private http:HttpClient ) { }


  sendSms( questionByCustome:QueryCustomer ):Observable<QueryCustomer>{


    return    this.http.post<QueryCustomer>("http://localhost:8085/savequestion",questionByCustome);

  }
}
