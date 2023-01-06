import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { AppointmentViewComponent } from './appointment-view/appointment-view.component';
import { HomeComponent } from './home/home.component';
import { AppointmentBooking } from './services/appointment.service';
import { AppRoutingModule } from './app-routing.module';
import { AppointmentViewGuardService } from './services/appointment-view-guard.service';
import { AddAppointmentComponent } from './add-appointment/add-appointment.component';

@NgModule({
  declarations: [
    AppComponent,
    AppointmentListComponent,
    AppointmentViewComponent,
    HomeComponent,
    AddAppointmentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    AppointmentBooking,
    AppointmentViewGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
