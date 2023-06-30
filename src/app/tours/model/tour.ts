import { TourReview } from "src/app/reviews/model/tour-review";
import {Agency} from "../../agencies/model/agency";
import {Activity} from "./activity";

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
  agency: Agency;
  activities: Activity[];
  reviews: TourReview[];
}
