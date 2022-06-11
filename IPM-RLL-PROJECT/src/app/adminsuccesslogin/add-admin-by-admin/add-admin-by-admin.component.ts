import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-admin-by-admin',
  templateUrl: './add-admin-by-admin.component.html',
  styleUrls: ['./add-admin-by-admin.component.css']
})
export class AddAdminByAdminComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  addadmin(){
            this.router.navigate(['addadmin'])

  }
}
