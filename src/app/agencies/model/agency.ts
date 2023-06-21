import {Tour} from "../../tours/model/tour";

export interface Agency {
  id: number;
  name: string;
  email: string;
  phoneNumber: string;
  description: string;
  photo: string;
  location: string;
  ruc: string;
  score: number;
  tours: Tour[];
}
