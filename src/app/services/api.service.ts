import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root' 
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

  private GetErrors(error:any){
    return throwError(error.error)
  }

  getData(url: string):Observable<any> {
    return this.http.get(url).pipe(catchError(this.GetErrors )); 
  }
}
