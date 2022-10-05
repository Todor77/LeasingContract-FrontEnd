import {Vehicle} from "./vehicle.model";
import {Customer} from "./customer.model";

export class LeasingContract {
    id?: number;
    contractNumber?: number;
    customer? : Customer;
    monthlyRate?: number;
    vehicle?: Vehicle;
    constructor() {
        this.vehicle = new Vehicle();
        this.customer = new Customer();
    }
}


