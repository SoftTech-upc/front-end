import { validateHorizontalPosition } from '@angular/cdk/overlay';
import { Conditional } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceClass } from 'src/app/services/model/service';
import { ServicesService } from 'src/app/services/services/services.service';

@Component({
  selector: 'app-editar-service',
  templateUrl: './editar-service.component.html',
  styleUrls: ['./editar-service.component.css']
})
export class EditarServiceComponent implements OnInit {

  new_service!: ServiceClass;
  nombree: any='';

  data_:any;
 
  formm: FormGroup;
  constructor(private ser: ServicesService, private fb: FormBuilder){
    
    this.formm= this.fb.group({
      name: ['',Validators.required],
      location: [''],
      price:[''],
      new_price: ['']
    })

  }

  ngOnInit(): void {
    this.getDates();
  }

  getDates(){
    this.ser.get()
  .subscribe((data: any)=>{
    this.data_= data;
    console.log(this.data_)
    
  })
  }


  getFecha():string{
    const fecha= new Date()
    const dia = fecha.getDate();
    const mes = fecha.getMonth()+1;
    const anio = fecha.getFullYear();

    const date = dia+"/"+mes+"/"+anio;
    return date
  }

  updateData(){
    this.new_service=new ServiceClass(
      2,this.formm.value.price,4,this.formm.value.price,
      this.formm.value.new_price,this.formm.value.location,this.getFecha(),
      null,
      true,0
     )
     this.ser.actualizarService(this.new_service).subscribe(aaa=>{
      console.log("se actualizó", aaa)
     })
  }

}
