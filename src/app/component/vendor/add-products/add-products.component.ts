import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductService } from 'src/app/service/product/product.service';
import { SubCategoryService } from 'src/app/service/subCategory/sub-category.service';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {

  subCategory:Array<any>=[]
  
  product:FormGroup
  constructor(private subCategoryService:SubCategoryService,private productService:ProductService) { 
    this.product=new FormGroup({
      productName:new FormControl(''),
      discreption:new FormControl(''),
      price:new FormControl(),
      qty:new FormControl(),
      subCategory:new FormControl()
    })
  }

  ngOnInit(): void {
    this.getAllSubCategory()
  }


  getAllSubCategory(){
    this.subCategoryService.getAllSubCategory().subscribe(res=>{
      console.log(res);
      this.subCategory = res
    },err=>{
      console.log(err);
      
    })
  }

  addProduct(){
    this.productService.addProduct(this.product.value).subscribe(res=>{
      console.log(res);
      this.product.reset()
    },err=>{
      console.log(err);
      
    })
  }

}
