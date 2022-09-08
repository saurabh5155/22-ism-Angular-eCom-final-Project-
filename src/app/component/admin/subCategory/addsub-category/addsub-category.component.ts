import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CategoryService } from 'src/app/service/category/category.service';
import { SubCategoryService } from 'src/app/service/subCategory/sub-category.service';

@Component({
  selector: 'app-addsub-category',
  templateUrl: './addsub-category.component.html',
  styleUrls: ['./addsub-category.component.css']
})
export class AddsubCategoryComponent implements OnInit {

  category:Array<any>=[]

  subCategoryForm:FormGroup
  constructor(private categoryService:CategoryService,private subCategoryService:SubCategoryService) {
    this.subCategoryForm=new FormGroup({
      subCategoryName:new FormControl(''),
      category:new FormControl()
    })
   }

  ngOnInit(): void {
    this.getAllCategory()
  }

  getAllCategory(){
    console.log("hello2");
    
    this.categoryService.getAllCategory().subscribe(res=>{
      this.category = res
    },err=>{
      console.log(err);
      
    })
  }

  addSubCategory(){
    console.log(this.subCategoryForm.value);
    this.subCategoryService.addSubCategory(this.subCategoryForm.value).subscribe(res=>{
      this.subCategoryForm.reset()
      console.log(res);
      
    },err=>{
      console.log(err);
      
    })
  }
}
