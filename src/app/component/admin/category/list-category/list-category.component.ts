import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/service/category/category.service';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent implements OnInit {

  category:Array<any>=[]
  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {
    console.log("hello");
    
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

  deleteCategorybyId(id:any){
    this.categoryService.deleteCategory(id).subscribe(res=>{
      console.log("Category deleted");
      console.log(res);
      this.category = this.category.filter(c => c.categoryId != id)
    },err=>{
      console.log(err);
      
    })
  }

}
