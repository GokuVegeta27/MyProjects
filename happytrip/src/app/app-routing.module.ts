import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookTicketComponent } from './book-ticket/book-ticket.component';
import { BookingConfirmComponent } from './booking-confirm/booking-confirm.component';
import { PaymentScreenComponent } from './payment-screen/payment-screen.component';
import { SearchComponent } from './search/search.component';
import { ViewFlightsComponent } from './view-flights/view-flights.component';

const routes: Routes = [
  {path:'',component:SearchComponent},
  {path:'viewflights',component:ViewFlightsComponent},
  {path:'bookTicket',component:BookTicketComponent},
  {path:'payment',component:PaymentScreenComponent},
  {path:'confirmation',component:BookingConfirmComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
