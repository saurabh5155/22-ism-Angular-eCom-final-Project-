import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/service/session/session.service';
import { TemporaryService } from 'src/app/service/temporary/temporary.service';

@Component({
  selector: 'app-only-email-verify',
  templateUrl: './only-email-verify.component.html',
  styleUrls: ['./only-email-verify.component.css']
})
export class OnlyEmailVerifyComponent implements OnInit {

  emailForm:FormGroup
  constructor(private sessionService:SessionService,private router:Router,private temp:TemporaryService) {
    this.emailForm= new FormGroup({
      email:new FormControl('')
    })
   }

  ngOnInit(): void {
  }

  emailVerify(){
    this.sessionService.onlyEmailApi(this.emailForm.value).subscribe(res=>{
      console.log(this.emailForm.value.email);
      this.temp.email=this.emailForm.value.email
      this.router.navigateByUrl("/otpVerify")
    },err=>{
      this.router.navigateByUrl("/onlyEmailVerify")
    })
  }
}
