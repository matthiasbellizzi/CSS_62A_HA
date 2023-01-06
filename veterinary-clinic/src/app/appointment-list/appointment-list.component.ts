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
    this.initialiseAppoinments();
  }

  title = 'veterinary-clinic';
  appointments: Appointment[] = [];

  constructor(private appointmentBooking: AppointmentBooking) { }

  initialiseAppoinments() {
    this.appointmentBooking.getAppointments().subscribe((resp: Appointment[]) => {
      this.appointments = resp;
    });
  }

  // initialiseAppoinments() {
  //   this.appointments.push(
  //     new Appointment("11111M", "Max", "Labrador", "Joe", "Borg", 30),
  //     new Appointment("22222M", "Freya", "German Shepard", "Peter", "Attard", 30)
  //   );
  // }

  //@Output()
  //itemAdded: EventEmitter<Item> = new EventEmitter<Item>();

  viewButton() {
    console.log('Detected a button click in VIEW');
    //this.itemAdded.emit(this.item);
  }

  updateButton() {
    console.log('Detected a button click in UPDATE');
  }

  deleteButton() {
    console.log('Detected a button click in DELETE');
  }
  
}
