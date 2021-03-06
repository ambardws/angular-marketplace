import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private htpp: HttpClient) { }

  getProduct() {
    return this.htpp.get<any>("https://fakestoreapi.com/products/")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}
