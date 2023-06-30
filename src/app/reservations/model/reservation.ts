import {Tourist} from "../../tourists/model/tourist";
import {Tour} from "../../tours/model/tour";

export interface Reservation {
    id: number;
    amount: number;
    price: number;
    scheduledDate: Date;
    status: string;
    tour: Tour;
    tourist: Tourist;
}
