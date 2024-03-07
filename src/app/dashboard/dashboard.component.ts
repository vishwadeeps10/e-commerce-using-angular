import { catchError } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ApiService } from '../services/api.service';
import { PRODUCT_LISTING } from '../constants/api-constant';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  data: any;

  constructor(private title: Title, private apiService: ApiService ) { }

  ngOnInit() {
    this.title.setTitle('Dashboard');

    //api call
    this.apiService.getData(PRODUCT_LISTING)
      .subscribe(response => {
        this.data = response;
        console.log("response--> ",response)
      },
      error => {
        console.error("Error occurred while fetching data:", error);
      }
      );
      
    
  }
}