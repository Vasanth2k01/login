import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router:Router){

  }
  show=false;//show 1 byte boolean

  showme(){
    let doesShow=this.show
    this.show=!doesShow;
  }
 gothere(){
   console.log('worked')
   this.router.navigate(['/profile'])
 }
// student=[
//   {name:"Vasanth",age:20},//0
//   {name:"Vignesh",age:22},//1
//   {name:"Nirmal",age:23}//2
//     ]

  
}
