import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Vehicle1} from "../models/vehicle.model";

const baseUrl = 'http://localhost:8080/leasing/vehicles';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Vehicle1[]> {
    return this.http.get<Vehicle1[]>(baseUrl);
  }

  get(id:any) : Observable<Vehicle1> {
    return this.http.get<Vehicle1>(`${baseUrl}/${id}`)
  }

  create(data:any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data)
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

}
