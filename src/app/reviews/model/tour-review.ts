import { Tourist } from "src/app/tourists/model/tourist";
import { Tour } from "src/app/tours/model/tour";

export interface TourReview {
    id: number;
    date: Date;
    comment: string;
    score: number;
    tourist: Tourist;
    tour: Tour;
}