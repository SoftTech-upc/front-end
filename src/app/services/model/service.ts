
export class ServiceClass {
  id: any;
  name: any;
  score: number; //estrellas
  price: number;
  new_price: number;
  location: string;
  creation_date: string;
  photo: any;
  is_ofter: boolean;
  agencie_id: number;
  constructor(id: any,name: any,
    score: number,price: number,
    new_price: number,
                location: string,
                creation_date: string,
                photo: any,is_ofter: boolean,agencie_id: number)
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
    this.agencie_id = agencie_id;
  }

  erase(){
    this.id = null;
    this.name = "";
    this.score = 0;
    this.price = 0;
    this.new_price = 0;
    this.location = "";
    this.creation_date = "";
    this.photo = "";
    this.is_ofter = false;
    this.agencie_id = 0;
  }
}
