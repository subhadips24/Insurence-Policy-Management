import { Component, OnInit } from '@angular/core';
import { Unknownquery } from '../classfile/unknownsms/unknownquery';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
 public  u!:Unknownquery;
  constructor() { }

  ngOnInit(): void {
  }

  sendSms(){


  }

}
