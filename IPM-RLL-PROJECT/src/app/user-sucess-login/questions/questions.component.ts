import { Component, OnInit } from '@angular/core';
import { QueryCustomer } from 'src/app/classfile/QueryByCustomer/query-customer';
import { QuestionCustomerServiceService } from 'src/app/services/QuestionCustomerService/question-customer-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  q=new QueryCustomer
  constructor( private questinservice:QuestionCustomerServiceService, private router:Router) { }

  ngOnInit(): void {

      let e:any=localStorage.getItem('cemail');
      this.q.customeremail=e;
  }

    sendQ(){ 

      this.questinservice.sendSms(this.q).subscribe(query=>{
            alert("You have Successfully Send sms ")
            this.router.navigate(['ulog/sucessLogin'])

      },error=>{alert("Internal Server error... Pls Wait")})


        

    }
}
