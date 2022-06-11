import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class AllUnknownData{
  constructor(
    public ucustomername: string,
    public usmsemail: string,
    public sms: string,
  ){}

  }
@Component({
  selector: 'app-admin-unknown-customer',
  templateUrl: './admin-unknown-customer.component.html',
  styleUrls: ['./admin-unknown-customer.component.css']

  
})
export class AdminUnknownCustomerComponent implements OnInit {


  
 public  allUnknownData!: AllUnknownData[]
  constructor(
    private httpClient : HttpClient
  ) { }

  ngOnInit(): void {

    
    this.httpClient.get<any>('http://localhost:8085/getunknownsms').subscribe(
      response=> {
        this.allUnknownData=response;
        console.log(this.allUnknownData);
        
      })
  }

}
