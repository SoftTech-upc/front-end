import { Component, OnInit } from '@angular/core';
import { ServiceClass } from 'src/app/Clases/Card';
import { ServicesService } from '../../../services/services.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  data_: any;
  // img: string="../../../../assets/img/target.jpg"
  // description:string="Disfruta de una aventura en la montaña El Huascaran"
  // count_stars:number=4;//implementar funcion
  // coste: number[]=[1200,1300]

  constructor(private ser: ServicesService){}
ngOnInit(): void {
  // for(let i:number=0; i<3;i++){
  //   this.data.push(new Card(this.img,this.description,this.count_stars,this.coste));
  // }

  // console.log(this.data)


  this.ser.get()
  .subscribe((data: any)=>{
    this.data_= data;
    console.log(this.data_)
  })
}

getDates(){
  this.ser.get()
  .subscribe((data: any)=>{
    this.data_= data;
    console.log(this.data_)
  })
}

}
