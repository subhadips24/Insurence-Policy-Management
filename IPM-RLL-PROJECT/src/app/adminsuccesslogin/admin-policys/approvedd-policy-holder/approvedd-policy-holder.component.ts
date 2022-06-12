import { Component, OnInit } from '@angular/core';
import { ApplyPolicie } from '../../../classfile/ApplyPolicies/apply-policie';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-approvedd-policy-holder',
  templateUrl: './approvedd-policy-holder.component.html',
  styleUrls: ['./approvedd-policy-holder.component.css']
})
export class ApproveddPolicyHolderComponent implements OnInit {

  public allApprovedData!: ApplyPolicie[]
  constructor(
    private httpClient : HttpClient,
   public router:Router
  ) { }

  ngOnInit(): void {

    if(localStorage.getItem('adminemail')===undefined || localStorage.getItem('adminemail')===null ){




      this.router.navigate(['alog']).then(()=>{

        window.location.reload();
      })
    }


    this.httpClient.get<any>('http://localhost:8085/getcustomersByApproved').subscribe(
      response=> {
        this.allApprovedData=response;
        console.log(this.allApprovedData);
        
      })
    }


}
