import { Component, Input } from '@angular/core';
import { BackendService } from 'src/app/backend/backend.service';
import { Ielectronics } from 'src/app/backend/data';

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.scss']
})
export class ElectronicsComponent {


  constructor(private backendservice:BackendService){}


    @Input() electronicData: Ielectronics[]=[]
  
   ngOnInit():void{
    this.backendservice.getelectronics().subscribe(data=>{
      console.log(data)
      this.electronicData = data
    })
   }


}
