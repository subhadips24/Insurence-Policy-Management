import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
export class History{

 

  public appid!: string
  public policyPrice!: string
  public policyCatagory!:string
  public policyName!:string;
  public policyapplydate!: string
  public status!:string;
  public customername!: string
  public customerenmail!: string


}

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  constructor(private HttpClient:HttpClient) { }

  ngOnInit(): void {
    this.getHistory();
  }

  x!:any;
  public y:History[]=[];
  h= new History();
  

  getHistory(){
    this.HttpClient.get<History[]>('http://localhost:8085/getallaplicationofpolicy').subscribe(
      response=>{
        
        console.log("done-----------------------------------------------");
        this.y=response;
        console.log(this.y)

     
        
        // this.history=response;
        // console.log(this.history);
       
      },error=>{
        console.warn("not done--------------------------------")
      }
    )
  }



}
