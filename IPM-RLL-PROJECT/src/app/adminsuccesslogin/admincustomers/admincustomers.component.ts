import { Component, OnInit } from '@angular/core';
import { User } from '../../classfile/user';
import { Route, Router } from '@angular/router';
import { UserviceService } from 'src/app/services/ureg/uservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admincustomers',
  templateUrl: './admincustomers.component.html',
  styleUrls: ['./admincustomers.component.css']
})
export class AdmincustomersComponent implements OnInit {

  allCustomerData!: User[]

  constructor(
    private cs:UserviceService
,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.cs.getAllCustomers().subscribe(result=>{
      this.allCustomerData=result;
      console.log(this.allCustomerData);
      
    })
  }
  deleteCustomer(cid: number){
   
    this.cs.deleteCustomer(cid);
     
    Swal.fire(cid+' id has deleted')
   this.router.navigateByUrl('/dashboard')//.then(()=>{
    //   window.location.reload()
    // });
   
    
  }

}
