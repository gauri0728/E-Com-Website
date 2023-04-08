import { Component, Input } from '@angular/core';
import { BackendService } from 'src/app/backend/backend.service';
import { Igrocery } from 'src/app/backend/data';

@Component({
  selector: 'app-grocery',
  templateUrl: './grocery.component.html',
  styleUrls: ['./grocery.component.scss']
})
export class GroceryComponent {


  constructor(private backendservice:BackendService){}


  @Input() groceryData: Igrocery[]=[]

 ngOnInit():void{
  this.backendservice.getgrocery().subscribe(data=>{
    console.log(data)
    this.groceryData= data
  })
 }
}
