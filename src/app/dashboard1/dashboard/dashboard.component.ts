import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backenddas/backend.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
 
  constructor(private service:BackendService){}

  ngOnInit():void{}

  
  signUp(data:object):void{
    
    this.service.AdminSignUp(data).subscribe((result)=>{
    console.warn(result)
    })
  }

  // postData() {
  //   this.auth.postAdRegister(this.adminRegisterForm.value).subscribe((result: any) => {
  //     alert('Data Register Successfull');
  //     const data = result;
  //     this.adminRegisterForm.reset();
  //     this.router.navigate(['/']);
  //   });
  //   console.log(this.adregisterDatas);
  // }


 
  
  }

