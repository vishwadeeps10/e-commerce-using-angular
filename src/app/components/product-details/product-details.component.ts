import { Title } from '@angular/platform-browser';
import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TruncateWordsPipe } from "../../pipes/truncate-words.pipe";
import { TruncateWordsPipeWithViewMore } from '../../pipes/truncate-words-with-view-more.pipe';
import { LoaderComponent } from "../../shared/loader/loader.component";
import { Location } from '@angular/common'

@Component({
    selector: 'app-product-details',
    standalone: true,
    templateUrl: './product-details.component.html',
    styleUrl: './product-details.component.css',
    imports: [CommonModule, TruncateWordsPipe, TruncateWordsPipeWithViewMore, LoaderComponent]
})
export class ProductDetailsComponent implements OnInit{
  singleUserData:any;
  isTruncated = true;
  isLoading:boolean = true;

  constructor(private route: ActivatedRoute, private title: Title, private apiService: ApiService,private location: Location ) { }
  toggleDescription() {
    this.isTruncated = !this.isTruncated;
  }
  getWordCount(text: string): number {
    if (!text) return 0;
    return text.trim().split(/\s+/).length;
  }
  back(): void {
    this.location.back()
  }
  ngOnInit(): void {
    this.title.setTitle('Dashboard');
    let id = this.route.snapshot.params['id'];
    //api call
    this.apiService.getSigleData(id)
      .subscribe(
        response => {
          if(response){
            this.singleUserData = response;
            this.isLoading=false
            console.log("Response received:", response);
          }
        },
        error => {
          this.isLoading=false
          console.error("Error occurred while fetching data:", error);
        }
      );
  }


}
