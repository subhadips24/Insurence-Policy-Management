import { Component, OnInit } from '@angular/core';
import { Policye } from '../../../../classfile/Policy/policye';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-apply-update',
  templateUrl: './apply-update.component.html',
  styleUrls: ['./apply-update.component.css']
})
export class ApplyUpdateComponent implements OnInit {

  pid!:number
  public updateData = new Policye();
 
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  UpdateNow(){
    this.pid=Number(localStorage.getItem("policyId"));
    console.log(this.pid+" "+this.updateData.policycatagory);
    
    this.http.put<Policye>("http://localhost:8085/updatepolicy/"+Number(this.pid),this.updateData).subscribe(response=>{
      console.log(response);
      alert("Ok it Updated")
      
    },error=>{

      console.log(error);
    });
  }


}
