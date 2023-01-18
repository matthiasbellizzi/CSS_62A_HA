import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Authentication} from "../appointment-list/dto/authentication.dto";
import { AppointmentBooking} from "../services/appointment.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


  export class LoginComponent implements OnInit {

    appForm!: FormGroup;
    authentication!: Authentication;
  
    constructor(private formBuilder: FormBuilder, private authenticationService: AppointmentBooking) { }
  
    ngOnInit(): void {
      this.appForm = this.formBuilder.group({
        username: ['',[Validators.required]],
        password:['',[Validators.required]]
      }); 
    }
  
    loginBtn() {
      this.authentication = this.appForm.value;
      console.log("login input");
      console.log(this.authentication);
        
      this.authenticationService.createAuthenticationToken(this.authentication).subscribe((res: any) => {
        this.authentication = res;
        console.log("From Login");
        //console.log(localStorage);
        //localStorage.removeItem('token');
        localStorage.setItem('returnedRole', res.role);
        localStorage.setItem('returnedUsername', res.username);
        localStorage.setItem('returnedToken', res.jwtToken)
        console.log(localStorage);
      })
    }
}





// user: test.vet@pethealth.com          pw: Pa$$w0rd role: vet
// user: test.receptionist@pethealth.com pw: Pa$$w0rd role: receptionist
// user: test.admin@pethealth.com        pw: Pa$$w0rd role: admin

 //curl -X POST "http://localhost:8080/authenticate" 
  //-H  "accept: */*" -H  "Content-Type: application/json" 
  //-d "{  \"password\": \"Pa$$w0rd\",  \"username\": \"test.vet@pethealth.com\"}"

  //curl -X POST "http://localhost:8080/appointment" 
  //-H  "accept: */*" -H  "Content-Type: application/json" 
  //-d "{  \"animalType\": \"string\",  \"appointmentDate\": \"string\",  \"appointmentDuration\": 0,  
  //\"appointmentTime\": \"string\",  \"ownerContactNumber\": \"string\",  \"ownerIdCardNumber\": \"string\",  
  //\"ownerName\": \"string\",  \"ownerSurname\": \"string\",  \"patientName\": \"string\",  
  //\"reasonForAppointment\": \"string\",  \"vetNotes\": \"string\"}"

  //curl -X GET "http://localhost:8080/appointment"
  // -H  "accept: */*" 
  // -H  "Authorization: Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0LnZldEBwZXRoZWFsdGguY29tIiwiZXhwIjoxNjczMDkzNjc4LCJpYXQiOjE2NzMwNzU2Nzh9.tD0ZY6jLI0IIFuEuhjr5Wl8mVLHtSyZZhzakJqT3wfle13qXm2zcsbDkfruQjtSQ8By3CMc7zK-fLrlMlNwCAA"
