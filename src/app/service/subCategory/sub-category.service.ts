import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubCategoryService {

  constructor(private http:HttpClient) { }

  addSubCategory(subCategory:any):Observable<any>{
    return this.http.post(environment.url+"/subCategory",subCategory)
  }
  
  getAllSubCategory():Observable<any>{
    return this.http.get(environment.url+"/subCategory")
  }
  
  getSubCategoryById(id:any):Observable<any>{
    return this.http.get(environment.url+"/subCategory/"+id)
  }

  deleteSubCategory(id:number):Observable<any>{
    return this.http.delete(environment.url+"/subCategory/"+id)
  }

  updateSubCategory(subCategory:any):Observable<any>{
    return this.http.put(environment.url+"/subCategory",subCategory)
  }

}
