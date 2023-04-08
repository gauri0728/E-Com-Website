import { Component, Input } from '@angular/core';
import { IproductData } from '../backend/data';
import { BackendService } from '../backend/backend.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  

    
  constructor(private backendservice:BackendService){}
  
 
  @Input() homeData: IproductData[]=[]
  
 
  
  ngOnInit(): void {
    this.backendservice.getproduct().subscribe(data=>{
     console.log(data)
     this.homeData = data
     })}
  
  


}

