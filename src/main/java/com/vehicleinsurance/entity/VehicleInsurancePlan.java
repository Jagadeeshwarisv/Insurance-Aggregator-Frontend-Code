package com.vehicleinsurance.entity;
 
import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
@Entity
public class VehicleInsurancePlan {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String policyNumber;
    private String vehicleType;
    private String vehicleRegistrationNumber;
    private String vehicleModel;
    private String registrationState;
    private Integer modelYear;
    
	public VehicleInsurancePlan() {
        // Default constructor with default values
    	
		this.policyNumber = "1111";
		this.vehicleType = "Car";
		this.vehicleRegistrationNumber = "KA05MG9102";
		this.vehicleModel = "BMW X3";
    }
	
	
	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public String getPolicyNumber() {
		return policyNumber;
	}


	public void setPolicyNumber(String policyNumber) {
		this.policyNumber = policyNumber;
	}


	public String getVehicleRegistrationNumber() {
		return vehicleRegistrationNumber;
	}


	public void setVehicleRegistrationNumber(String vehicleRegistrationNumber) {
		this.vehicleRegistrationNumber = vehicleRegistrationNumber;
	}


	public String getVehicleType() {
		return vehicleType;
	}


	public void setVehicleType(String vehicleType) {
		this.vehicleType = vehicleType;
	}


	public String getVehicleModel() {
		return vehicleModel;
	}


	public void setVehicleModel(String vehicleModel) {
		this.vehicleModel = vehicleModel;
	}

	
	
    public String getRegistrationState() {
		return registrationState;
	}


	public void setRegistrationState(String registrationState) {
		this.registrationState = registrationState;
	}


	public Integer getModelYear() {
		return modelYear;
	}


	public void setModelYear(Integer modelYear) {
		this.modelYear = modelYear;
	}

	public VehicleInsurancePlan(Long id, String policyNumber, String vehicleType, String vehicleRegistrationNumber, String vehicleModel) {
		super();
		this.id = id;
		this.policyNumber = policyNumber;
		this.vehicleType = vehicleType;
		this.vehicleRegistrationNumber = vehicleRegistrationNumber;
		this.vehicleModel = vehicleModel;
		this.registrationState = registrationState;
		this.modelYear = modelYear;
	}





}
	