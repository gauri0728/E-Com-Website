import { Component, Input } from '@angular/core';
import { BackendService } from 'src/app/backend/backend.service';
import { Ielectronics } from 'src/app/backend/data';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(private backendservice:BackendService){}


  @Input() electronicData: Ielectronics[]=[]

 ngOnInit():void{
  this.backendservice.getelectronics().subscribe(data=>{
    console.log(data)
    this.electronicData = data
  })
 }

 onSearch(event:any){
  console.log(event.target.value);
 }







}
