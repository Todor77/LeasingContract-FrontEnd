import {Model} from "./model";

export class Brand {
    id?: number;
    name?: string;
    models : Array<Model> ;
    constructor() {
        this.models = [];
    }
}
