import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../shared/navbar/navbar.component";
import { Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
@Component({
    selector: 'app-dashboard',
    standalone: true,
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.css',
    imports: [NavbarComponent,RouterLink]
})
export class DashboardComponent implements OnInit{
  constructor(private title:Title) { }
  ngOnInit() {
    this.title.setTitle('Dashboard');
  }
}
