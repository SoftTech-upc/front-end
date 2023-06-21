export interface Tour {
  id: number;
  name: string;
  description: string;
  score: number;
  price: number;
  newPrice: number;
  location: string;
  creationDate: Date;
  photo: any;
  isOffer: boolean;
  agencieId: number;
}
