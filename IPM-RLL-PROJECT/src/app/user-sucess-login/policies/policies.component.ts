import { Component, OnInit } from '@angular/core';
import { ApplyPolicie } from '../../classfile/ApplyPolicies/apply-policie';
import { Router } from '@angular/router';

import { ApplyPoliciesServiceService } from '../../services/ApplyPolicies/apply-policies-service.service';
import { PolicysService } from 'src/app/services/Policy/policys.service';
import { Policye } from 'src/app/classfile/Policy/policye';

@Component({
  selector: 'app-policies',
  templateUrl: './policies.component.html',
  styleUrls: ['./policies.component.css']
})
export class PoliciesComponent implements OnInit {

  checkApply:boolean=true;
  checkAfterApply:boolean=false;

  p!:Policye[];
  selectamount!:boolean
apply=new ApplyPolicie();
  constructor(private applypolicyService:ApplyPoliciesServiceService,
    private router:Router,private policyservice:PolicysService) { }


  // savePolicy(){

  //   this.applypolicyService.applypolicy(this.apply).subscribe( (dta)=>{
  //    alert("Applied Successfully")
   
  //   },error=>{alert("Failed!,Apply again"));
  // }
 
  // onSubmit(){
  //   console.log(this.apply);
  //   this.savePolicy();
  // }
   app=new ApplyPolicie();

  ngOnInit(): void {
      this.policyservice.getPolicies().subscribe(data=>{

          console.log(data);
          this.p=data;

      },error=>{
        alert("Internal Server error ...")
        this.router.navigate(['ulog/sucessLogin'])
      })
      

  }
  applyPolicie(){
    this.checkApply=false;
    this.checkAfterApply=true;


      alert("Cleck ")
  }

  ltt(pid:string,pname:string,pcatagory:string){

    if(this.app.policyPrice==undefined){
      this.selectamount=true;
     

    }else{

    this.checkApply=false;
    this.checkAfterApply=true
    console.log(this.app.policyPrice)

    }
  } 


}
