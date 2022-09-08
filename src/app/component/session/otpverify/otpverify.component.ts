import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/service/session/session.service';
import { TemporaryService } from 'src/app/service/temporary/temporary.service';

@Component({
  selector: 'app-otpverify',
  templateUrl: './otpverify.component.html',
  styleUrls: ['./otpverify.component.css']
})
export class OTPVerifyComponent implements OnInit {

  otpVerifyForm:FormGroup
  constructor(private sessionService:SessionService,private temp:TemporaryService,private router:Router) { 
    this.otpVerifyForm = new FormGroup({
      email:new FormControl(this.temp.email),
      otp:new FormControl(''),
      password:new FormControl('')
    })
  }

  ngOnInit(): void {

    console.log(this.temp.email);
    this.temp.email= this.otpVerifyForm.value.email
  }

  otpVerify(){
    this.sessionService.otpVerifyApi(this.otpVerifyForm.value).subscribe(res=>{
      this.router.navigateByUrl("/login")
    },err=>{
      this.router.navigateByUrl("/onlyEmailVerify")
    })
  }
}
