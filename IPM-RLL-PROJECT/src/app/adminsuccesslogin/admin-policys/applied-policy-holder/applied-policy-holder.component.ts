import { Component, OnInit } from '@angular/core';
import { ApplypolicieComponent } from '../../../applypolicie/applypolicie.component';
import { ApplyPolicie } from '../../../classfile/ApplyPolicies/apply-policie';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-applied-policy-holder',
  templateUrl: './applied-policy-holder.component.html',
  styleUrls: ['./applied-policy-holder.component.css']
})
export class AppliedPolicyHolderComponent implements OnInit {

 public  isPending!:string
 public  status!:string



  allApplyData!:ApplyPolicie[]
  
  constructor(
    private httpClient : HttpClient
  ) { }

  public application=new ApplyPolicie();
  ngOnInit(): void {
      this.getData();
    }


    getData(){

      this.isPending="Pending"
      this.httpClient.get<ApplyPolicie[]>('http://localhost:8085/getcustomersByPending').subscribe(
        response=> {
          this.allApplyData=response;
         // this.getData();
          console.log(this.allApplyData);
          
        })
    }

    doApprove(){
     this.application.status="Approved";
     this.getData();
    }

   doReject(){
    this.application.status="Rejected";


        this.getData();
    
   }
   doSave(appid: number){

    this.httpClient.put<ApplyPolicie>("http://localhost:8085/updatestatus/"+appid,this.application).subscribe(response=>{
      console.log(response);
      this.getData();
      alert("Status Updated")
      
    },error=>{
      this.getData();
      console.log(error);
    });
    // localStorage.setItem("appid",appid);
   }


}
