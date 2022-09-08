import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SessionService } from 'src/app/service/session/session.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm:FormGroup
  constructor(private sessionSrevice:SessionService,private router:Router,private toastr:ToastrService) { 
    this.signupForm=new FormGroup({
      
      firstName : new FormControl<string>(''),
      lastName: new FormControl<string>(''),
      gender: new FormControl<string>(''),
      mNumber: new FormControl(),
      email: new FormControl<string>(''),
      password: new FormControl<string>(''),
    })
  }

  ngOnInit(): void {

  }
  signup(){
    this.sessionSrevice.singupApi(this.signupForm.value).subscribe(res=>{
      console.log(res);
      this.toastr.success("Signup Done");
      this.router.navigateByUrl("/login")
    },err=>{
      console.log(err);
    })
  }
}
