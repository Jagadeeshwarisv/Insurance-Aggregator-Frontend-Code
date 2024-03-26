import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { VehicledataService } from 'src/app/service/vehicledata.service';

@Component({
  selector: 'app-post-vehicledata',
  templateUrl: './post-vehicledata.component.html',
  styleUrls: ['./post-vehicledata.component.css']
})

export class PostVehicledataComponent implements OnInit{

  postVehicledataForm!: FormGroup;
  submitted = false;


  constructor(private vehicledataService: VehicledataService,
     private fb: FormBuilder,
     private router: Router){}
  
  ngOnInit(){
  this.postVehicledataForm = this.fb.group({
    policyNumber: [null, [Validators.required, this.policyNumberValidator]],
    vehicleType: [null, [Validators.required]],
    vehicleRegistrationNumber: [null, [Validators.required, this.vehicleRegistrationNumberValidator]],
    vehicleModel: [null, [Validators.required]],
    registrationState: [null, [Validators.required]],
    modelYear: [null, [Validators.required]],
  

  })
}


postVehicledata(){

    // Check if the form is already submitted
    if (this.submitted) {
      return;
    }
  
    // Set submitted to true when the form is submitted
    this.submitted = true;
  
    // Check if the form is invalid
    if (this.postVehicledataForm.invalid) {
      return; // If the form is invalid, do not proceed with submission
    }
    this.vehicledataService.postVehicledata(this.postVehicledataForm.value).subscribe(
      (res) => {
        console.log(res);
        // Display success message
        alert('Added successfully');
        this.router.navigateByUrl("/");
  })
}

// Custom validator for policyNumber
policyNumberValidator(control: any) {
  const policyNumberRegex = /^[a-zA-Z0-9]*$/;
  if (control.value && !policyNumberRegex.test(control.value)) {
    return { 'invalidPolicyNumber': true };
  }
  return null;
}

    // Custom validator for vehicleRegistrationNumber
    vehicleRegistrationNumberValidator(control: any) {
      const vehicleRegistrationNumberRegex = /^[a-zA-Z0-9]*$/; // Only alphabetic and numeric characters are allowed
      if (control.value && !vehicleRegistrationNumberRegex.test(control.value)) {
        return { 'invalidVehicleRegistrationNumber': true };
      }
      return null;
    }    
}

