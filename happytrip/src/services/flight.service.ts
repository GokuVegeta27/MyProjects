import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { flights } from 'src/models/flight.model';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  constructor(private http:HttpClient) { }

  url:string='http://localhost:3000/flights'

  getFlights():Observable<flights[]>{
   return this.http.get<flights[]>(this.url)
  }
}
