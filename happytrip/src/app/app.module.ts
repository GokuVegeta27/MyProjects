import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { ViewFlightsComponent } from './view-flights/view-flights.component';
import { BookTicketComponent } from './book-ticket/book-ticket.component';
import { PaymentScreenComponent } from './payment-screen/payment-screen.component';
import { BookingConfirmComponent } from './booking-confirm/booking-confirm.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ViewFlightsComponent,
    BookTicketComponent,
    PaymentScreenComponent,
    BookingConfirmComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
