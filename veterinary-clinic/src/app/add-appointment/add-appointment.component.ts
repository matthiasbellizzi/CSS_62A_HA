import { formatDate } from '@angular/common';
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
      animalType: ['',[Validators.required]],
      appointmentDate:['',[Validators.required]],
      appointmentDuration: ['',[Validators.required]],
      appointmentTime: ['',[Validators.required]],
      ownerContactNumber: ['',[Validators.required]],
      ownerIdCardNumber: ['',[Validators.required]],
      ownerName: ['',[Validators.required]],
      ownerSurname: ['',[Validators.required]],
      patientName: ['',[Validators.required]],
      reasonForAppointment: ['',[Validators.required]],
      vetNotes: ['',[Validators.required]]
    });
  }

  submitForm() {
    const format = "dd/MM/yyyy" 
    const locale = 'en-US'
    this.appointment = this.appForm.value;
    console.log(this.appointment);
    
    this.appointment.appointmentDate = formatDate(this.appointment.appointmentDate,format, locale);
    this.appointmentBooking.addAppointment(this.appointment).subscribe((res: Appointment) => {
      this.appointment = res;
      console.log(JSON.stringify(this.appointment));
    })
  }
}
 