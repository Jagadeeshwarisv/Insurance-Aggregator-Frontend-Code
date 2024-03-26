import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VehicledataService } from 'src/app/service/vehicledata.service';

@Component({
  selector: 'app-update-vehicledata',
  templateUrl: './update-vehicledata.component.html',
  styleUrls: ['./update-vehicledata.component.css']
})
export class UpdateVehicledataComponent {
  updateVehicledataForm!: FormGroup;

  id: number = this.activatedRoute.snapshot.params["id"];
  constructor(private activatedRoute: ActivatedRoute,
    private service: VehicledataService, 
    private fb: FormBuilder,
    private router: Router){}

  ngOnInit(){
   this.updateVehicledataForm = this.fb.group({
    policyNumber: [null, [Validators.required]],
    vehicleType: [{ value: null, disabled: true }, [Validators.required]],
    vehicleRegistrationNumber: [null, [Validators.required]],
    vehicleModel: [{ value: null, disabled: true }, [Validators.required]],
    registrationState: [null, [Validators.required]],
    modelYear: [{ value: null, disabled: true }, [Validators.required]],
  })
  this.getPlanById();
}

getPlanById(){
  this.service.getPlanById(this.id).subscribe((res)=>{
    console.log(res);
    this.updateVehicledataForm.patchValue(res);
  })
}

updatePlan(){
  this.service.updatePlan(this.id,this.updateVehicledataForm.value).subscribe((res)=>{
    console.log(res);
    if(res.id != null){
      this.router.navigateByUrl("");
    }
  })
}

}
