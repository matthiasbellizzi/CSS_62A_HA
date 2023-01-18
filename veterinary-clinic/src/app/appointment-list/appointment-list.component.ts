import { Component, OnInit } from '@angular/core';
import { Appointment } from './dto/appointment.dto';
import { AppointmentBooking } from '../services/appointment.service';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {

  //private _listFilter: string='';
  ngOnInit(): void {
    this.appointmentBooking.getAppointments().subscribe((resp: Appointment[]) => {
      this.appointments = resp;
    });
  }

  title = 'veterinary-clinic';
  appointments: Appointment[] = [];

  constructor(private appointmentBooking: AppointmentBooking) { }

  viewButton() {
    console.log('Detected a button click in VIEW');
  }

  updateButton() {
    console.log('Detected a button click in UPDATE');
  }

  deleteButton() {
    console.log('Detected a button click in DELETE');
  }
  
}
