import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AddressService } from 'src/app/service/address/address.service';
import { SessionService } from 'src/app/service/session/session.service';
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.css']
})
export class AddAddressComponent implements OnInit {

  address:FormGroup
  constructor(private addressService:AddressService,private userService:UserService) { 
    
    this.address = new FormGroup({
      houseDetail:new FormControl(''),
      city:new FormControl(''),
      state:new FormControl(''),
      addressCode:new FormControl(''),
      users : new FormControl()
    })
  }
  
  ngOnInit(): void {
    let user =localStorage.getItem("userId")
    this.userService.getUserById(user).subscribe(res=>{
      this.address.value.users = res.data
      console.log(this.address.value.users);
    },err=>{
      console.log(err);
    })
  }

  addAddress(){
    console.log(this.address.value);
    this.addressService.addAddress(this.address.value).subscribe(res=>{
      console.log(res);
        this.address.reset()
    },err=>{
      console.log(err);
      
    })
  }
}
