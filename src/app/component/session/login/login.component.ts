import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
      sessionStorage.setItem("users",res.data)
      localStorage.setItem("userId",res.data.userId)
      localStorage.setItem("user",res.data.data)
      console.log(res.data.roles.roleName);
      
      this.temp.users=res.data

      if(res.data.roles.roleName=='admin'){
        this.router.navigateByUrl("/homeAdmin")
      }else 
      if(res.data.roles.roleName=='user'){
        this.router.navigateByUrl("/homeUser")
      }else{
        this.router.navigateByUrl("/signup")
      }
    },err=>{
      console.log(err);
      
    })
  }
}
