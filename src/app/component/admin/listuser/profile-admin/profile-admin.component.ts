import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TemporaryService } from 'src/app/service/temporary/temporary.service';
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'app-profile-admin',
  templateUrl: './profile-admin.component.html',
  styleUrls: ['./profile-admin.component.css']
})
export class ProfileAdminComponent implements OnInit {

  
  updateUserForm:FormGroup
  constructor(private userService: UserService, private temp: TemporaryService) { 
    this.updateUserForm=new FormGroup({
      
      firstName : new FormControl<string>(''),
      lastName: new FormControl<string>(''),
      gender: new FormControl<string>(''),
      mNumber: new FormControl(),
      email: new FormControl<string>(''),
      password: new FormControl<string>(''),
    })
  }


  ngOnInit(): void {
    this.getUserById(localStorage.getItem("userId"))
  }
  user=localStorage.getItem("user")
  data :any={}
  getUserById(id: any) {
    this.userService.getUserById(id).subscribe(res => {
      this.data=res.data
      console.log(res);
      console.log(this.user);
    }, err => {
      console.log(err);

    })
  }

  updateUser(){
    this.userService.updateUserById(this.updateUserForm.value).subscribe(res=>{
      
    },err=>{

    })
  }

}
