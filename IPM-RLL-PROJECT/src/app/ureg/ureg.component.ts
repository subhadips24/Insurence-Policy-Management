import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../classfile/user';
import { UserviceService } from '../services/ureg/uservice.service';

@Component({
  selector: 'app-ureg',
  templateUrl: './ureg.component.html',
  styleUrls: ['./ureg.component.css'],
})
export class UregComponent implements OnInit {
  user: User = new User();
  constructor(private reService: UserviceService,private  route: Router) {}

  ngOnInit(): void {}

  UserReg() {

        this.reService.registrionProcess(this.user).subscribe((data=>{
            alert("You Have Sucessfully Register")
            this.route.navigate(["/ulog"]);
        }),error=>{
          alert("You have alredy registered")
          this.route.navigate(["/ulog"]);
        });
       //console.log("Hit it");
       
  }
}
