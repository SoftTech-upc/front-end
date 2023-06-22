export interface Reservation {
    id: number;
    amount: number;
    price: number;
    scheduled_date: Date;
    status: string;
    service_id: number;
    customer_id: number;
}
