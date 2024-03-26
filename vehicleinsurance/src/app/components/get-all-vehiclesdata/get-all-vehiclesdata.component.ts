import { Component } from '@angular/core';
import { VehicledataService } from 'src/app/service/vehicledata.service';


// Interface to define the structure of a vehicle object
interface Vehicle {
  id: number;
  policyNumber: string;
  vehicleType: string;
  vehicleRegistrationNumber: string;
  vehicleModel: string;
  registrationState: string;
  modelYear: number;
}

@Component({
  selector: 'app-get-all-vehiclesdata',
  templateUrl: './get-all-vehiclesdata.component.html',
  styleUrls: ['./get-all-vehiclesdata.component.css']
})
export class GetAllVehiclesdataComponent {
  vehicledata! : Vehicle[];
  constructor(private vehicledataService : VehicledataService){}
  
ngOnInit(){
  this.getAllPlans();
}
getAllPlans(){
  this.vehicledataService.getAllPlans().subscribe((res)=> {
    console.log(res);
    this.vehicledata = res;
  })
} 
}
