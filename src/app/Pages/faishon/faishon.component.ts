import { Component, Input } from '@angular/core';
import { BackendService } from 'src/app/backend/backend.service';
import { Ifashion } from 'src/app/backend/data';

@Component({
  selector: 'app-faishon',
  templateUrl: './faishon.component.html',
  styleUrls: ['./faishon.component.scss']
})
export class FaishonComponent {


  constructor(private backendservice:BackendService){}


  @Input() fashionData: Ifashion[]=[]

 ngOnInit():void{
  this.backendservice.getfashion().subscribe(data=>{
    console.log(data)
    this.fashionData= data
  })
 }
}
