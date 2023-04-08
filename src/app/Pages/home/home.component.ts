import { Component, Input } from '@angular/core';
import { BackendService } from 'src/app/backend/backend.service';
import { CategoryData, Icart, IproductData } from 'src/app/backend/data';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  

  
  constructor(private backendservice:BackendService){}
  
  @Input() categoryData:CategoryData[]=[]
  @Input() homeData: IproductData[]=[]
  @Input() buyData : Icart[]=[]
 
  
  ngOnInit(): void {
    this.backendservice.getproduct().subscribe(data=>{
     console.log(data)
     this.homeData = data
     }),
     this.getproductid();
     this.gatCategeries();
     this.getcart();
   }


getproductid():void{
  this.backendservice.getproductid().subscribe(data=>{
    console.log(data)
    this.homeData=data
  })
}










   url: string = "../assets/img2.jpg";
   imageChange(event: any){
       this.url = event.target.src;
   }
 
   policyOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots:true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: false
  }
 bannerslider: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }
  testimonialslider: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

   // function data(){
     
   // }
  
  
 
   
   // postproduct(){
   //   this.homeservice.postproduct(this.homeData)
   //   .subscribe(Response=>{
   //     this.ngOnInit();
   //     this.homeData={
         
   //     } 
   //   })
 
 
    gatCategeries():any{
     this.backendservice.getcategory().subscribe(data=>{
       console.log(data)
       this.categoryData = data
     })
   }
 
 
   getcart():any{
     this.backendservice.getcart().subscribe(data=>{
       console.log(data)
       this.buyData = data
     })
   }
   
 
   }
   
 
   
   
 
 

