import { Component, OnInit } from '@angular/core';
import { SubCategoryService } from 'src/app/service/subCategory/sub-category.service';

@Component({
  selector: 'app-list-subcategory',
  templateUrl: './list-subcategory.component.html',
  styleUrls: ['./list-subcategory.component.css']
})
export class ListSubcategoryComponent implements OnInit {

  constructor(private subCategoryService: SubCategoryService) { }

  subCategory: Array<any> = []
  ngOnInit(): void {
    this.getAllSubCategory()
  }

  getAllSubCategory() {
    this.subCategoryService.getAllSubCategory().subscribe(res => {
      this.subCategory = res
    }, err => {
      console.log(err);

    })
  }

  deleteSubCategory(id: number) {
    this.subCategoryService.deleteSubCategory(id).subscribe(res => {
      this.subCategory = this.subCategory.filter(r => r.subCategoryId != id)
      console.log(res);
      
    }, err => {
      console.log(err);

    })
  }
}
