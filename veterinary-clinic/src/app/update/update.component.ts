import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Appointment } from '../appointment-list/dto/appointment.dto';
import { AppointmentBooking } from '../services/appointment.service';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit{

  //appForm!: FormGroup;
  appointment!: Appointment;

  updateForm = new FormGroup({
      animalType: new FormControl(''),
      appointmentDate:new FormControl(''),
      appointmentDuration: new FormControl(''),
      appointmentTime: new FormControl(''),
      ownerContactNumber: new FormControl(''),
      ownerIdCardNumber: new FormControl(''),
      ownerName: new FormControl(''),
      ownerSurname: new FormControl(''),
      patientName: new FormControl(''),
      reasonForAppointment: new FormControl(''),
      vetNotes: new FormControl('')
  })

  constructor(
    private route: ActivatedRoute,
    private appointmentBooking: AppointmentBooking,
    private router: Router
  ) { }

  ngOnInit(): void {
    let id: number = Number(this.route.snapshot.paramMap.get('id'));

    this.appointmentBooking.getAppointmentById(id).subscribe((result) => {
      //this.appointment = res;
      console.log(result);
      // this.updateForm = new FormGroup({
      //   animalType: new FormControl(result['animalType']),
      //   appointmentDate:new FormControl(result['appointmentDate']),
      //   appointmentDuration: new FormControl(result['appointmentDuration']),
      //   appointmentTime: new FormControl(result['appointmentTime']),
      //   ownerContactNumber: new FormControl(result['ownerContactNumber']),
      //   ownerIdCardNumber: new FormControl(result['ownerIdCardNumber']),
      //   ownerName: new FormControl(result['ownerName']),
      //   ownerSurname: new FormControl(result['ownerSurname']),
      //   patientName: new FormControl(result['patientName']),
      //   reasonForAppointment: new FormControl(result['reasonForAppointment']),
      //   vetNotes: new FormControl(result['vetNotes'])
      //   })
    }); 
  }

  

  submitForm() {
    const format = "dd/MM/yyyy"
    const locale = 'en-US'
    //this.appointment = this.updateForm.value;
    console.log(this.appointment);
    
    this.appointment.appointmentDate = formatDate(this.appointment.appointmentDate,format, locale);
    this.appointmentBooking.addAppointment(this.appointment).subscribe((res: Appointment) => {
      this.appointment = res;
      console.log(JSON.stringify(this.appointment));
    })
  }
}
