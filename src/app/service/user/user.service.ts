import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from 'src/app/interface/users';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  listUser():Observable<any>{
    return this.http.get(environment.url+"/users")
  }
  
  getUserById(id:number):Observable<any>{
    return this.http.get(environment.url+"/users/"+id)
  }
  
  updateUserById(user:Users):Observable<any>{
    return this.http.put(environment.url+"/users",user)
  }
  
  deleteUserById(id:number):Observable<any>{
    return this.http.delete(environment.url+"/users/"+id)
  }
}
