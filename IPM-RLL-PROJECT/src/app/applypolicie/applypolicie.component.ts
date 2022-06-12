import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-applypolicie',
  templateUrl: './applypolicie.component.html',
  styleUrls: ['./applypolicie.component.css']
})
export class ApplypolicieComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {

    if(localStorage.getItem('adminemail')===undefined || localStorage.getItem('adminemail')===null ){




      this.router.navigate(['alog']).then(()=>{

        window.location.reload();
      })
    }
  }

}
