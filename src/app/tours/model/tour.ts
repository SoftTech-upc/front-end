export class Tour {
  id: any;
  name: any;
  score: number;
  price: number;
  newPrice: number;
  location: string;
  creation_date: string;
  photo: any;
  isOffer: boolean;
  agencie_id: number;
  constructor(id: any,name: any,
              score: number,price: number,
              new_price: number,
              location: string,
              creation_date: string,
              photo: any,is_offer: boolean,agencie_id: number)
  {
    this.id = id;
    this.name = name;
    this.score = score;
    this.price = price;
    this.newPrice = new_price;
    this.location = location;
    this.creation_date = creation_date;
    this.photo = photo;
    this.isOffer = is_offer;
    this.agencie_id = agencie_id;
  }

  erase(){
    this.id = null;
    this.name = "";
    this.score = 0;
    this.price = 0;
    this.newPrice = 0;
    this.location = "";
    this.creation_date = "";
    this.photo = "";
    this.isOffer = false;
    this.agencie_id = 0;
  }
}
