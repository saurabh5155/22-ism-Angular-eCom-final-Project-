import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CartService } from 'src/app/service/cart/cart.service';
import { ProductService } from 'src/app/service/product/product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  products:Array<any>=[]
  constructor(private productService:ProductService,private cartService:CartService) {
   }

  ngOnInit(): void {
  this.getAllProduct()
  }

  getAllProduct(){
    this.productService.getAllProducts().subscribe(res=>{
      console.log(res);
      this.products = res
    },err=>{
      console.log(err);
      
    })
  }

  userId=localStorage.getItem("userId")
  addToCart(productId:any){
    console.log(productId);
    console.log(this.userId);
    
    
    let add = {
      users:{
        userId:this.userId
      },
      products:{
        productId:productId
      }
    }
    this.cartService.AddToCart(add).subscribe(res=>{
      console.log(res);
      
    },err=>{
      console.log(err);
      
    })
  }
}
