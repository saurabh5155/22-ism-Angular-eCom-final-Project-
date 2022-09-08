import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  users:Array<any>=[]

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.getAllUser()
  }

  getAllUser(){
    this.userService.listUser().subscribe(res=>{
      this.users=res.listData
      console.log(res);  
    },err=>{
      console.log(err);  
    })
  }

  id = localStorage.getItem("userId")

  deleteUserById(id:any){
    this.userService.deleteUserById(id).subscribe(res=>{
      this.users = this.users.filter(u => u.userId != id)
      console.log(res);
    },err=>{
        console.log(err);
        
    })
  }
}
