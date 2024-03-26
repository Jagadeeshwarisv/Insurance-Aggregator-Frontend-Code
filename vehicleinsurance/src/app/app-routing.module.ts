import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostVehicledataComponent } from './components/post-vehicledata/post-vehicledata.component';
import { GetAllVehiclesdataComponent } from './components/get-all-vehiclesdata/get-all-vehiclesdata.component';
import { UpdateVehicledataComponent } from './components/update-vehicledata/update-vehicledata.component';

const routes: Routes = [
  {path : 'vehicledata' , component : PostVehicledataComponent},
  {path : "" , component : GetAllVehiclesdataComponent},
  {path : "vehicledata/:id" , component : UpdateVehicledataComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
