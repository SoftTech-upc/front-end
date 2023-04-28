import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/interfaces/card';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  data: Card[]=[]
  img: string="../../../../assets/img/target.jpg"
  description:string="Disfruta de una aventura en la montaña El Huascaran"
  count_stars:number=4;//implementar funcion
  coste: number[]=[1200,1300]
ngOnInit(): void {
  for(let i:number=0; i<3;i++){
    this.data.push(new Card(this.img,this.description,this.count_stars,this.coste));
  }

  console.log(this.data)
}

}
