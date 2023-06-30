import {Tour} from "./tour";

export interface Activity {
  id: number;
  name: string;
  description: string;
  tour: Tour;
}
