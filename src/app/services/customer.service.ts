import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Customer} from "../models/customer.model";

const baseUrl = 'http://localhost:8080/leasing/customers';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Customer[]> {
    return this.http.get<Customer[]>(baseUrl);
  }

  get(id:any) : Observable<Customer> {
    return this.http.get<Customer>(`${baseUrl}/${id}`)
  }

  create(data:any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    console.log("id === " + id);
    return this.http.put(`${baseUrl}/${id}`, data)
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }
}
