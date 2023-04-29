import { OffersComponent } from '../components/main/offers/offers.component';

export class ServiceClass {
  id: number;
  name: string;
  score: number; //estrellas
  price: number;
  new_price: number;
  location: string;
  creation_date: string;
  photo: string;
  is_ofter: boolean;
  description: string;
  agencia_id: number;
  constructor(id: number,name: string,score: number,price: number,new_price: number,
                location: string,creation_date: string,photo: string,is_ofter: boolean,
                description: string,agencia_id: number) 
    {
    this.id = id;
    this.name = name;
    this.score = score;
    this.price = price;
    this.new_price = new_price;
    this.location = location;
    this.creation_date = creation_date;
    this.photo = photo;
    this.is_ofter = is_ofter;
    this.description = description;
    this.agencia_id = agencia_id;
  }
}
