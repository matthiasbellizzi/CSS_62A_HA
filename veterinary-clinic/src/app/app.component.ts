import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'veterinary-clinic';


  logoutButton(): void {
      localStorage.setItem('isUserLoggedIn',"false");

      localStorage.removeItem('returnedRole');
      localStorage.removeItem('returnedUsername');
      localStorage.removeItem('returnedToken');
      //localStorage.removeItem('isUserLoggedIn'); 
    }
}
