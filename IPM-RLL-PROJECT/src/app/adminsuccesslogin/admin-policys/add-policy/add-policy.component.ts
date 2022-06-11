import { Component, OnInit } from '@angular/core';
import { Policye } from '../../../classfile/Policy/policye';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-add-policy',
  templateUrl: './add-policy.component.html',
  styleUrls: ['./add-policy.component.css']
})
export class AddPolicyComponent implements OnInit {

  addData = new Policye();

  constructor( public HttpClient:HttpClient) { }

  ngOnInit(): void {
  }

  public addPolicy(addData:Policye) {
    return this.HttpClient.post("http://localhost:8085/addpolicys",addData);
  }


  public addNow(){
    console.warn(this.addData);
    this.addPolicy(this.addData).subscribe(reply=>{
      console.log(reply);
    });
    
  }

}
