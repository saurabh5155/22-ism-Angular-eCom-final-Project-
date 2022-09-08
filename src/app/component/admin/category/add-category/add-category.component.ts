import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CategoryService } from 'src/app/service/category/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  categoryForm:FormGroup
  constructor(private categoryService:CategoryService) { 
    this.categoryForm=new FormGroup({
      categoryName:new FormControl('')
    })
  }

  ngOnInit(): void {
  }

  addCategory(){
    this.categoryService.addCategory(this.categoryForm.value).subscribe(res=>{
      this.categoryForm.reset()
      console.log(res);
    },err=>{
      console.log(err);

    })
  }
}
