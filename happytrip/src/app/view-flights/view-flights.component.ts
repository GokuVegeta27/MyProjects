import { Component, OnInit } from '@angular/core';
import { flights } from 'src/models/flight.model';
import { FlightService } from 'src/services/flight.service';

@Component({
  selector: 'app-view-flights',
  templateUrl: './view-flights.component.html',
  styleUrls: ['./view-flights.component.css']
})
export class ViewFlightsComponent implements OnInit {

  flight:flights[]=[];
  constructor(private api:FlightService) { }

  ngOnInit(): void {
    this.api.getFlights().subscribe(flight=>this.flight=flight)

  }

}
