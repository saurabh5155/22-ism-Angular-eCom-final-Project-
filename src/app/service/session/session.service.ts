import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from 'src/app/interface/users';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Login } from 'src/app/interface/login';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private http:HttpClient) { }

  singupApi(user:Users):Observable<any>{
    return this.http.post(environment.url+"/signup",user);
  }
  
  loginApi(login:Login):Observable<any>{
    return this.http.post(environment.url+"/login",login);
  }
  
  onlyEmailApi(email:any):Observable<any>{
    return this.http.post(environment.url+"/emailVerify",email);
  }
  
  otpVerifyApi(forgotPassword:any):Observable<any>{
    return this.http.post(environment.url+"/OTPVerify",forgotPassword);
  }
}

