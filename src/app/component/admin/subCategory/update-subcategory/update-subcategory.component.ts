import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/service/category/category.service';
import { SubCategoryService } from 'src/app/service/subCategory/sub-category.service';

@Component({
  selector: 'app-update-subcategory',
  templateUrl: './update-subcategory.component.html',
  styleUrls: ['./update-subcategory.component.css']
})
export class UpdateSubcategoryComponent implements OnInit {

  category:Array<any>=[]

  subCategoryForm:FormGroup

  category1:any

  constructor(private subCategoryService:SubCategoryService,private categoryService:CategoryService,private acRoute:ActivatedRoute) {
    this.subCategoryForm=new FormGroup({
      subCategoryId:new FormControl(this.acRoute.snapshot.params["subCategoryId"]),
      subCategoryName:new FormControl(''),
      category:new FormControl()
    })
   }

  ngOnInit(): void {
    this.getAllCategory()
    this.getSubCategoryById()
  }

  getAllCategory(){
    this.categoryService.getAllCategory().subscribe(res=>{
      this.category=res
    },err=>{
      console.log(err);
    })
  }

  getSubCategoryById(){
    this.subCategoryService.getSubCategoryById(this.acRoute.snapshot.params["subCategoryId"]).subscribe(res=>{
      this.subCategoryForm.controls['subCategoryName'].setValue(res.subCategoryName)
      this.category1 =  res.category

      console.log(this.subCategoryForm);  
      
      
      console.log(res+"hello");
      
    },err=>{
      console.log(err+"hello000");
    })
  }

  updateSubCategory(){
    this.subCategoryService.updateSubCategory(this.subCategoryForm.value).subscribe(res=>{
      console.log(res);
    },err=>{
      console.log(err);
      
    })

  }

}
