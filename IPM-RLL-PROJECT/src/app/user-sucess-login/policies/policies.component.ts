import { Component, OnInit } from '@angular/core';
import { ApplyPolicie } from '../../classfile/ApplyPolicies/apply-policie';
import { Router } from '@angular/router';

import { ApplyPoliciesServiceService } from '../../services/ApplyPolicies/apply-policies-service.service';
import { PolicysService } from 'src/app/services/Policy/policys.service';
import { Policye } from 'src/app/classfile/Policy/policye';
import { History } from '../history/history.component';
import { Type } from '@angular/compiler';

@Component({
  selector: 'app-policies',
  templateUrl: './policies.component.html',
  styleUrls: ['./policies.component.css']
})
export class PoliciesComponent implements OnInit {

  checkApply:boolean=true;
  checkAfterApply:boolean=false;
  history!:History
  p!:Policye[];
  selectamount!:boolean
  customername!:any
  customeremail!:any;
apply=new ApplyPolicie();
  constructor(private applypolicyService:ApplyPoliciesServiceService,
    private router:Router,private policyservice:PolicysService) { }


 
   app=new ApplyPolicie();

  ngOnInit(): void {
      this.policyservice.getPolicies().subscribe(data=>{

          console.log(data);
          this.p=data;

      },error=>{
        alert("Internal Server error ...")
        this.router.navigate(['ulog/sucessLogin'])
      })
      
      this.customeremail=localStorage.getItem('cemail');
      this.customername=localStorage.getItem('cname');

  }
  applyPolicie(){
    this.checkApply=false;
    this.checkAfterApply=true;


      alert("Cleck ")

      this.customeremail=localStorage.getItem('cemail');
      ;
      


  }

  ltt(pid:number,pname:string,pcatagory:string){

    if(this.app.policyPrice==undefined){
      this.selectamount=true;
     

    }else{
        console.warn();
        
    this.checkApply=false;
    this.checkAfterApply=true
      this.app.policyName=pname;
      this.app.policyCatagory=pcatagory;
     this.app.policyPrice=this.app.policyPrice;
     this.app.customeremail=this.customeremail;
     this.app.customername=this.customername;
     


  
   // console.log(this.app)
        console.warn(this.app)
    console.log(pid+"------ "+pname+"----"+pcatagory+"-------");
      this.myApplication()


    }


    
  }
  
  myApplication(){

    console.log("=============")
    console.warn(this.app)
      this.applypolicyService.appPolicy(this.app).subscribe(reply=>{
              alert("you have applied successfully "+this.app.policyCatagory);
              this.router.navigate(['policies'])
              console.log(reply);
      },error=>{
              alert('Internal Server error..');
              console.log(error)
      })
  }


}