import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryData, Icart, Ielectronics, Ifashion, Igrocery, IproductData } from './data';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  baseUrl='http://localhost:3000'
  

  //endpoints
  ProductUrl = this.baseUrl + '/product';
  CategoryUrl = this.baseUrl + '/categories';
  cartUrl= this.baseUrl + '/carts';
  electronicsUrl= this.baseUrl + '/electronics';
  fashionUrl=this.baseUrl +'/fashion';
  groceryUrl=this.baseUrl+'/groceryshop'
  

  
  
  constructor(private http:HttpClient) { }

  getproduct():Observable<IproductData[]>{
    return this.http.get<IproductData[]>(this.ProductUrl);
  }

  getproductid():Observable<IproductData[]>{
    return this.http.get<IproductData[]>(this.ProductUrl+'/id')
  }

  postproduct(IproductData:IproductData):Observable<IproductData>{
   return this.http.post<IproductData>(this.ProductUrl,IproductData);
  }

    //category
  getcategory():Observable<CategoryData[]>{
    return this.http.get<CategoryData[]>(this.CategoryUrl);
    }



  

  //cart
  getcart():Observable<Icart[]>{
    return this.http.get<Icart[]>(this.cartUrl);
  }



 

  //electronics
  getelectronics():Observable<Ielectronics[]>{
    return this.http.get<Ielectronics[]>(this.electronicsUrl);
  }


  //fashion
  getfashion():Observable<Ifashion[]>{
    return this.http.get<Ifashion[]>(this.fashionUrl);
  }

  //grocery
  getgrocery():Observable<Igrocery[]>{
    return this.http.get<Igrocery[]>(this.groceryUrl);
  }
 

  //serach

  
  
 
  






  // postProduct():Observable<>{
  //   return this.http.
  // }
  /* sendproduct(send:api){
  return this.http.post(this.baseUrl,send)
  } */



}





