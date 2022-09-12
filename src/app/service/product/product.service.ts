import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  addProduct(product:any):Observable<any>{
    return this.http.post(environment.url+"/products",product);
  }
  
  getAllProducts():Observable<any>{
    return this.http.get(environment.url+"/products");
  }
}

