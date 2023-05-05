import { Component, OnInit } from '@angular/core';
import { ServiceClass } from 'src/app/Clases/Card';
import { ServicesService } from '../../../services/services.service';

import {MatDialog} from '@angular/material/dialog';
import { Route, Router } from '@angular/router';
import { EditarServiceComponent } from '../editar-service/editar-service.component';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  template: '<button mat-button (click)="openDialog()">Open dialog</button>',
  styleUrls: ['./dashboard.component.css']

})
export class DashboardComponent implements OnInit{

  data_!: ServiceClass[];
  arrayScore: ServiceClass[]=[]
  arrayPrice: ServiceClass[]=[]
  arrayParaTi: ServiceClass[]=[]
  constructor(private ser: ServicesService, public dialog: MatDialog){}
ngOnInit(): void {

  this.getDates()

}

getDates(){
  this.ser.get()
  .subscribe((data: ServiceClass[])=>{
    this.data_= data;
    // console.log(this.data_)
    // console.log(typeof(this.data_))
    // console.log(this.data_[1])
    this.ordenarPrice();
    this.ordenarScore();
    this.ordenar()
  })
}

ordenarScore(): void {
  this.arrayScore= this.data_.slice()
  this.arrayScore.sort((a, b) => {
    return a.score - b.score;
  });
  this.arrayScore= (this.arrayScore.slice(0,4))
}

ordenarPrice(): void {
  this.arrayPrice= this.data_.slice()
  this.arrayPrice.sort((a, b) => {
    return a.price - b.price;
  });
  this.arrayPrice= (this.arrayPrice.slice(0,4))
}

ordenar(){
  this.arrayParaTi= this.data_.slice()
  this.arrayParaTi = (this.arrayParaTi.slice(0,4))
}


openDialog(id: Number) {
 const dialogRef = this.dialog.open(EditarServiceComponent,{
  data: {id}
 });

  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  });
}

}



// export class DialogContentExampleDialog {



// }
