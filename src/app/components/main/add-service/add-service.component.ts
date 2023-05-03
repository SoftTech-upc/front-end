import { Component } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceClass } from 'src/app/Clases/Card';


@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.css']
})
export class AddServiceComponent {

  new_service!: ServiceClass;
  nombree: any='';

  // input4: string[]=[""];
  contador: number[];
  formm: FormGroup;
  constructor(private ser: ServicesService, private fb: FormBuilder){
    
    this.formm= this.fb.group({
      name: [''],
      descripcion: [''],
      location: [''],
      actividades: [''],
      hora_inicio: [''],
      hora_fin: [''],
      price:[''],
      new_price: [''],
      publicar_inicio: [''],
      publicar_fin: ['']
    })

    this.contador=new Array()
    this.contador.push(0);
  }

  


  getFecha():string{
    const fecha= new Date()
    const dia = fecha.getDate();
    const mes = fecha.getMonth()+1;
    const anio = fecha.getFullYear();

    const date = dia+"/"+mes+"/"+anio;
    return date
  }

  saveData(){
    // console.log(aaa);
    // console.log(this.formm.value)
    this.new_service=new ServiceClass(
     null,this.formm.value.name,4,this.formm.value.price,
     this.formm.value.new_price,"Perú",this.getFecha(),
     "https://humanidades.com/wp-content/uploads/2018/11/montan%CC%83as-e1543190126108.jpg",
     true,0
    )
    console.log(this.new_service)
    ///pas, con fe
    this.ser.agregarService(this.new_service).subscribe(tarea =>{
      console.log("servicio agregado", tarea);
      this.new_service.erase();
    })
  }

  add_acitivities(){
    this.contador.push(this.contador.length)
    

  }

}
