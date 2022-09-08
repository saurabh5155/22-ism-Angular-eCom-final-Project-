import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/service/category/category.service';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent implements OnInit {

  categoryForm:FormGroup
  constructor(private acRoute:ActivatedRoute,private categoryService:CategoryService,private router:Router) {
    this.categoryForm=new FormGroup({
      categoryId :new FormControl( this.acRoute.snapshot.params["categoryId"]),
      categoryName:new FormControl('')
    })
  }

  ngOnInit(): void {
    this.getCategoryById()
  }

  category:any={}
  getCategoryById(){
    this.categoryService.getCategoryById(this.acRoute.snapshot.params["categoryId"]).subscribe(res=>{
        this.category=res
        console.log(res);
    },err=>{
      console.log(err);
      
    })
  }

  updateCategory(){
    this.categoryService.updateCategory(this.categoryForm.value).subscribe(res=>{
      console.log(res);
      this.router.navigateByUrl("/homeAdmin/listCategory")
    },err=>{
      console.log(err);

    })
  }
}
