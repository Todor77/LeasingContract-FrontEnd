import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {LeasingContract} from "../models/leasing-contract.model";


const baseUrl = 'http://localhost:8080/leasing/leasingContracts';

@Injectable({
  providedIn: 'root'
})
export class LeasingContractService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<LeasingContract[]> {
    return this.http.get<LeasingContract[]>(baseUrl);
  }

  get(id:any) : Observable<LeasingContract> {
    return this.http.get<LeasingContract>(`${baseUrl}/${id}`)
  }

  create(data:any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    console.log("update id = " + id)
    return this.http.put(`${baseUrl}/${id}`, data)
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

}
