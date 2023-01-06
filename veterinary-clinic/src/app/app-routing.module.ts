import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { AddAppointmentComponent } from './add-appointment/add-appointment.component';
import { AppointmentViewComponent } from './appointment-view/appointment-view.component';
import { AppointmentViewGuardService } from './services/appointment-view-guard.service';



const routes: Routes = [
  {path: 'appointment-list', component: AppointmentListComponent},
  {
    path: 'appointment-list/:id', 
    component: AppointmentViewComponent,
    canActivate: [AppointmentViewGuardService]
  },

  {path: 'add-appointment', component: AddAppointmentComponent},
  {path: '',redirectTo:'/appointment-list', pathMatch:'full'}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

