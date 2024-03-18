
import { catchError } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ApiService } from '../services/api.service';
import { PRODUCT_LISTING } from '../constants/api-constant';
import { TruncateWordsPipe } from '../pipes/truncate-words.pipe';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from "../shared/loader/loader.component";


@Component({
    standalone: true,
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
    imports: [TruncateWordsPipe, RouterLink, CommonModule, LoaderComponent]
})
export class DashboardComponent implements OnInit {
  products: any;
  isLoading:boolean = true;
  
  constructor(private title: Title, private apiService: ApiService ) { }
  
  ngOnInit() {
    this.title.setTitle('Dashboard');
    
    //api call
    this.apiService.getData(PRODUCT_LISTING)
      .subscribe(
        response => {
          if(response){
            console.log("response",response)
            this.isLoading = false;
            this.products = response;
          }
        },
        error => {
          this.isLoading = false;
          console.error("Error occurred while fetching data:", error);
        }
      );
  }
}