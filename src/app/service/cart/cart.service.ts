import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http:HttpClient) { }

  AddToCart(cart:any):Observable<any>{
    return this.http.post(environment.url+"/cart",cart)
  }
  
  getCarts(userId:any):Observable<any>{
    return this.http.get(environment.url+"/cart/"+userId)
  }

  checkOut(){
    
  }
}
