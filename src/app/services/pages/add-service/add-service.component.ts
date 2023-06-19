import {Component} from '@angular/core';

import {FormBuilder, FormGroup} from '@angular/forms';
import {ServiceClass} from 'src/app/services/model/service';
import {ActivatedRoute} from "@angular/router";
import {ServicesService} from "../../services/service/services.service";


@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.css']
})
export class AddServiceComponent {

  new_service!: ServiceClass;
  nombree: any='';
  agency_id: any;

  // input4: string[]=[""];
  contador: number= 0;
  formm: FormGroup;
  constructor(private ser: ServicesService, private fb: FormBuilder, private route: ActivatedRoute){

    this.agency_id = this.route.snapshot.paramMap.get('id');

    this.formm= this.fb.group({
      name: [''],
      descripcion: [''],
      location: [''],
      actividades: [''],
      price:[''],
      new_price: [''],
      image: [''],
      input1:[''],
      input2:[''],
      input3:[''],
      input4:[''],
      input5:[''],
      input6:[''],
      input7:[''],
      input8:[''],
      Dinput1:[''],
      Dinput2:[''],
      Dinput3:[''],
      Dinput4:[''],
      Dinput5:[''],
      Dinput6:[''],
      Dinput7:[''],
      Dinput8:['']
    })


  }




  getFecha():string{
    const fecha= new Date()
    const dia = fecha.getDate();
    const mes = fecha.getMonth()+1;
    const anio = fecha.getFullYear();

    return dia + "/" + mes + "/" + anio
  }

  saveData(){
    // console.log(aaa);
    console.log(this.formm.value)
    this.new_service=new ServiceClass(
     null,this.formm.value.name,4,this.formm.value.price,
     this.formm.value.new_price,"Perú",this.getFecha(),
     this.formm.value.photo,
     true, this.agency_id
    )
    console.log(this.new_service)
    ///pas, con fe
    this.ser.agregarService(this.new_service).subscribe(tarea =>{
      console.log("servicio agregado", tarea);
      this.new_service.erase();
    })
  }

  add_acitivities(){
    this.contador++
  }

  less_acitivities(){
    this.contador--
  }



}
