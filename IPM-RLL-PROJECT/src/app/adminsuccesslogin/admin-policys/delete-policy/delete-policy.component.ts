import { Component, OnInit } from '@angular/core';
import { ApplyPolicie } from '../../../classfile/ApplyPolicies/apply-policie';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Policye } from '../../../classfile/Policy/policye';

@Component({
  selector: 'app-delete-policy',
  templateUrl: './delete-policy.component.html',
  styleUrls: ['./delete-policy.component.css']
})
export class DeletePolicyComponent implements OnInit {

 public  allPolicyData!: Policye[]
  
  constructor(
    private httpClient : HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.httpClient.get<any>('http://localhost:8085/getpolicys').subscribe(
      response=> {
        this.allPolicyData=response;
        console.log(this.allPolicyData);
        
      })

  }
  deletePolicy(pid:number){

    const deletePoint = 'http://localhost:8085/deletepolicy/'+pid;

    alert("Ok it's Deleted")
    // this.router.navigate(['viewPolicy']).then(()=>{
    //   window.location.reload();
    // });

    
    this.httpClient.delete<number>(deletePoint).subscribe( response=> {
      console.log(response);


      this.httpClient.get<any>('http://localhost:8085/getpolicys').subscribe(
        response=> {
          this.allPolicyData=response;
          console.log(this.allPolicyData);
          
        })
  
      
    })
  }
}
