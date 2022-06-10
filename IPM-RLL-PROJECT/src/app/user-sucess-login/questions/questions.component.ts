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
  
  
  sms!:QueryCustomer[];


  ngOnInit(): void {

      let e:any=localStorage.getItem('cemail');
      this.q.customeremail=e;
      this.getSms();
  }

  getSms(){

      this.questinservice.getSmsEmail(this.q.customeremail).subscribe(data=>{
            this.sms=data;
            console.log(data)
      },error=>{

            alert('Internal Problem Please wait')
      })

  }


    sendQ(){ 

      this.questinservice.sendSms(this.q).subscribe(query=>{
            alert("You have Successfully Send sms ")
            this.router.navigate(['ulog/sucessLogin'])

      },error=>{alert("Internal Server error... Pls Wait")})


        

    }

 
}
