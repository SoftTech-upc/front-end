import { Agency } from "src/app/agencies/model/agency";
import { Tourist } from "src/app/tourists/model/tourist";

export interface AgencyReview {
  id: number;
  date: Date;
  comment: string;
  professionalismScore: number;
  securityScore: number;
  qualityScore: number;
  costScore: number;
  tourist: Tourist;
  agency: Agency;
}
