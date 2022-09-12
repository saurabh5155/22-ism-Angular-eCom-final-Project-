import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/service/session/session.service';
import { TemporaryService } from 'src/app/service/temporary/temporary.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup
  constructor(private sessionService:SessionService,private router:Router,private temp:TemporaryService) {
    this.loginForm=new FormGroup({
      email:new FormControl,
      password:new FormControl
    })
   }

  ngOnInit(): void {
  }

  login(){
    this.sessionService.loginApi(this.loginForm.value).subscribe(res=>{
      console.log(res);
      sessionStorage.setItem("users",res)
      localStorage.setItem("userId",res.userId)
      let reviver = (res) ;
      localStorage.setItem("user",res)
      console.log(res.roles.roleName);
      
      this.temp.users=res.data

      if(res.roles.roleName=='admin'){
        this.router.navigateByUrl("/homeAdmin")
        let userssss=JSON.stringify(localStorage.getItem("user"))
        console.log(userssss);
        let userss = JSON.parse(userssss)
        console.log(userss);
        console.log(userss.mNumber);

        
      }else 
      if(res.roles.roleName=='user'){
        this.router.navigateByUrl("/homeUser")
      }else 
      if(res.roles.roleName=='vendor'){
        this.router.navigateByUrl("/homeVendor")
      }
      else{
        this.router.navigateByUrl("/signup")
      }
    },err=>{
      console.log(err);
      
    })
  }
}
