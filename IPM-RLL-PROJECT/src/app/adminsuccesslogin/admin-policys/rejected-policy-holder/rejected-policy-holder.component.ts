import { Component, OnInit } from '@angular/core';
import { ApplyPolicie } from '../../../classfile/ApplyPolicies/apply-policie';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rejected-policy-holder',
  templateUrl: './rejected-policy-holder.component.html',
  styleUrls: ['./rejected-policy-holder.component.css']
})
export class RejectedPolicyHolderComponent implements OnInit {

  public allRejectedData!:ApplyPolicie[]
  constructor(
    private httpClient : HttpClient,private router:Router
  ) { }

  ngOnInit(): void { 
    if(localStorage.getItem('adminemail')===undefined || localStorage.getItem('adminemail')===null ){




      this.router.navigate(['alog']).then(()=>{

        window.location.reload();
      })
    }


    this.httpClient.get<any>('http://localhost:8085/getcustomersByRejected').subscribe(
      response=> {
        this.allRejectedData=response;
        console.log(this.allRejectedData);
        
      })
    }

}
