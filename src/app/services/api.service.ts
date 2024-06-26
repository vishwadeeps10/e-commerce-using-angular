import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';
import { PRODUCT_LISTING } from '../constants/api-constant';
import { IProduct } from '../interfaces/product.listing';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  // httpOptions = {
  //   headers:new HttpHeaders({
  //     "Content-Type":"application/json",
  //     "Access-Control-Allow-Origin":"*"
  //   })
  // }
  // http = inject(HttpClient)
  constructor(private http: HttpClient) {}
  private GetErrors(error: any) {
    return throwError(error.error);
  }

  getData(url: string) {
    return this.http.get<IProduct[]>(url).pipe(
      catchError(this.GetErrors),
      map((products) => {
        return products?.map((product: any) => {
          return { ...product, quantity: 1 };
        });
      })
    );
  }
  getSigleData(query: string) {
    return this.http
      .get<IProduct>(PRODUCT_LISTING + query)
      .pipe(
        catchError(this.GetErrors),
        map((products) => {
            return { ...products, quantity: 1 };
        })
        );
  }
}
