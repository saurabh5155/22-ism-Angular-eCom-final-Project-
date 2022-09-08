import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TemporaryService {
  email:string=""
  users={}
  constructor() { }
}
