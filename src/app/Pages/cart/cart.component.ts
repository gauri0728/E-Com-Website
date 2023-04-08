import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { BackendService } from 'src/app/backend/backend.service';
import { Icart } from 'src/app/backend/data';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {


  constructor(private backendservice:BackendService){}

   selectIndex=0;
  @Input() cartData:Icart[]=[]

 ngOnInit():void{
  this.backendservice.getcart().subscribe(data=>{
    console.log(data)
    this.cartData = data
  });
  this.changeIndex
 }

 changeIndex(index: number){
  this.selectIndex = index;
 }


 

}
