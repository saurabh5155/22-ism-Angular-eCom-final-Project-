import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart:Array<any>=[]
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.getCart()
  }

  getCart(){
    this.cartService.getCarts(localStorage.getItem("userId")).subscribe(res=>{
      console.log(res);
      this.cart=res
    },err=>{
      console.log(err);
      
    })
  }
}
