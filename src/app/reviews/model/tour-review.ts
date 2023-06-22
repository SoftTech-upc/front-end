export interface TourReview {
    id: number;
    date: Date;
    comment: string;
    score: number;
    customer_id: number;
    tour_id: number;
}