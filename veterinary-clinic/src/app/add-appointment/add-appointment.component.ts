import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Appointment } from '../appointment-list/dto/appointment.dto';
import { AppointmentBooking } from '../services/appointment.service';

@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.css']
})
export class AddAppointmentComponent implements OnInit{

  appForm!: FormGroup;
  appointment!: Appointment;

  constructor(private formBuilder: FormBuilder, private appointmentBooking: AppointmentBooking) { }

  ngOnInit(): void {
    this.appForm = this.formBuilder.group({
      animalType: null,
      appointmentDate:null,
      appointmentDuration: null,
      appointmentTime: null,
      ownerContactNumber: null,
      ownerIdCardNumber: null,
      ownerName: null,
      ownerSurname: null,
      patientName: null,
      reasonForAppointment: null,
      vetNotes: null
    });
  }

  submitForm() {
    this.appointment = this.appForm.value;
    console.log(this.appointment);
    
    this.appointmentBooking.addAppointment(this.appointment).subscribe((res: Appointment) => {
      this.appointment = res;
      console.log(JSON.stringify(this.appointment));
    })
  }
}
