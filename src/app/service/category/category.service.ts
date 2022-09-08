import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/interface/category';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }

  addCategory(category:Category):Observable<any>{
    return this.http.post(environment.url+"/category",category)
  }
  
  getAllCategory():Observable<any>{
    return this.http.get(environment.url+"/category")
  }
  
  deleteCategory(id:any):Observable<any>{
    return this.http.delete(environment.url+"/category/"+id)
  }
  
  getCategoryById(id:any):Observable<any>{
    return this.http.get(environment.url+"/category/"+id)
  }
  
  updateCategory(category:any):Observable<any>{
    return this.http.put(environment.url+"/category",category)
  }
}
