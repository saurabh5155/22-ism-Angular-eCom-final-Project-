import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private http:HttpClient) { }

  addAddress(address:any):Observable<any>{
    return this.http.post(environment.url+"/address",address)
  }

  getAddressById(userId:any):Observable<any>{
    return this.http.get(environment.url+"/address/"+userId)
  }
}
