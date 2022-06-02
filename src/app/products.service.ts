import { Injectable } from '@angular/core';

 
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }

  baseUrl="https://raw.githubusercontent.com/epsilon-ux/code-challenge-resources/main/cookies.json"

  getProducts()
  {
    return this.http.get<any>(this.baseUrl);
  }
}
