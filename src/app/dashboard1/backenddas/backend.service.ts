import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  


  constructor(private http:HttpClient) { }

  private apiUrl = 'http://localhost:3000';

  
 
  AdminSignUp(data:any){
    return this.http.post('http://localhost:3000',data)
  }


  
}
