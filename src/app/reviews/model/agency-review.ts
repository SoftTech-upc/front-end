export interface AgencyReview {
  id: number;
  date: Date;
  comment: string;
  professionalism_score: number;
  security_score: number;
  quality_score: number;
  cost_score: number;
  customer_id: number;
  agency_id: number;
}
