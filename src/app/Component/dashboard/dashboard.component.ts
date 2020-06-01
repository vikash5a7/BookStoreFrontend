import { Component, OnInit } from '@angular/core';
import { MatSidenavContent } from '@angular/material/sidenav';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  opened:boolean=true;
  public opened2 = '';

  constructor() { }
  nameEventHander($event: any) {
   
    this.opened2 = $event;
    console.log("2",this.opened2);
  }


  ngOnInit(): void {
  }

}
